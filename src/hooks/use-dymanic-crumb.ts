import React, { Component, useEffect, useState, type ComponentType, type ReactNode } from 'react';

interface FallbackProps {
  retry: () => void;
  error: Error | null;
}

const federatedComponentCache = new Map<string, ComponentType<unknown>>();

const importFn = (componentName: string) => {
  switch (componentName) {
    case 'LocaleContextController':
      return import('hoslog-intl/' + 'LocaleContextController');
    case 'LocaleSwitch':
      return import('hoslog-intl/' + 'LocaleSwitch');
    case 'useLocale':
      return import('hoslog-intl/' + 'useLocale');
    default:
      throw new Error(`Component ${componentName} not found`);
  }
};

const createDynamicComponent = <P extends object>(
  componentName: string,
  FallbackComponent: ComponentType<P & FallbackProps> | null = null,
): React.FC<P> => {

  const DynamicComponentWrapper: React.FC<P> = (props) => {
    const [Component, setComponent] = useState<ComponentType<P> | null>(
      () => (federatedComponentCache.get(componentName) as ComponentType<P>) || null,
    );
    const [error, setError] = useState<Error | null>(null);
    const [retryKey, setRetryKey] = useState(0);

    useEffect(() => {
      // If component is already cached and no error, skip re-importing
      if (federatedComponentCache.has(componentName) && !error) return;

      let isMounted = true;

      importFn(componentName)
        .then((mod: { default: ComponentType<unknown> }) => {
          if (isMounted) {
            const component = mod.default;
            federatedComponentCache.set(componentName, component);
            setComponent(() => component as ComponentType<P>);
          }
        })
        .catch((err) => {
          if (isMounted) {
            console.error(`Failed to load ${componentName}:`, err);
            setError(err instanceof Error ? err : new Error(String(err)));
          }
        });

      return () => {
        isMounted = false;
      };
      // FIX #2: Added componentName to dependency array
    }, [retryKey, componentName]);

    // FIX #4: Clear the cache entry on retry so stale/broken module is not reused
    const retry = () => {
      federatedComponentCache.delete(componentName);
      setError(null);
      setRetryKey((prev) => prev + 1);
    };

    if (error && FallbackComponent) {
      const Fallback = FallbackComponent;
      return <FallbackProps {...props} error={error} retry={retry} />;
    }

    // FIX #1: Guard against null Component during loading state
    if (!Component) {
      return null; // Replace with a spinner/skeleton if preferred
    }

    return <Component key={retryKey} {...props} />;
  };

  return DynamicComponentWrapper;
};

/**
 * useLocale typing
 */
type SupportedLocale = 'jp' | 'en';

type UseLocaleReturn = {
  locale: SupportedLocale;
  setLocale: (locale: SupportedLocale) => void;
  t: (key: string, values?: Record<string, unknown>) => string;
  [key: string]: unknown;
};

// FIX #5: Track load state to allow safe usage before hook is ready
let useLocaleRef: (() => UseLocaleReturn) | null = null;
let useLocaleLoadError: Error | null = null;
let useLocaleLoaded = false;

type UseLocaleType = () => UseLocaleReturn;

const loadUseLocale = async (): Promise<UseLocaleType | null> => {
  // Return early if already loaded
  if (useLocaleRef) return useLocaleRef;

  // FIX #3: Correctly resolve the hook from named export OR default export,
  // since useLocale is a hook — not a React component with a default export.
  try {
    const mod = (await importFn('useLocale')) as {
      useLocale?: UseLocaleType;
      default?: UseLocaleType;
    };

    // Prefer the named export 'useLocale', fall back to default export
    useLocaleRef = mod.useLocale ?? mod.default ?? null;
    useLocaleLoaded = true;

    if (!useLocaleRef) {
      throw new Error('useLocale export not found in hoslog-intl/useLocale module');
    }

    return useLocaleRef;
  } catch (err) {
    useLocaleLoadError = err instanceof Error ? err : new Error(String(err));
    useLocaleLoaded = true; // Mark as attempted even on failure
    console.error('Failed to load useLocale:', useLocaleLoadError);
    return null;
  }
};

/**
 * FIX #5: useDynamicLocale — safe hook wrapper.
 *
 * IMPORTANT: `loadUseLocale()` MUST be awaited at app startup before
 * any component using this hook mounts. Wrap the component tree in an
 * Error Boundary to gracefully handle the thrown error if it occurs.
 */
const useDynamicLocale = (): UseLocaleReturn => {
  if (!useLocaleLoaded) {
    throw new Error(
      'useLocale has not been loaded yet. Ensure loadUseLocale() is awaited before mounting components that use useDynamicLocale().',
    );
  }

  if (useLocaleLoadError) {
    throw useLocaleLoadError;
  }

  if (!useLocaleRef) {
    throw new Error('useLocale could not be resolved from hoslog-intl. Check the module exports.');
  }

  // useLocaleRef is itself a React hook — calling it here is valid
  // as long as useDynamicLocale is only ever called from within a React component or custom hook.
  return useLocaleRef();
};

interface LocaleContextControllerProps {
  children: ReactNode;
  defaultLocale?: string;
  [key: string]: unknown;
}

interface SwitchLocaleProps {
  onChange?: (locale: string) => void;
  [key: string]: unknown;
}

const LocaleContextControllerFallback: React.FC<LocaleContextControllerProps & FallbackProps> = ({ children }) => { return(
  
    {children}
    <div style={ "fontSize: '0.7rem', color: 'red', padding: '0.25rem'" } >⚠️</div>
  
)};

const SwitchLocaleFallback: React.FC<SwitchLocaleProps & FallbackProps> = () => <span>⚠️</span>;

const LocaleContextController = createDynamicComponent<LocaleContextControllerProps>(
  'LocaleContextController',
  LocaleContextControllerFallback,
);

const ToggleLocale = createDynamicComponent<SwitchLocaleProps>(
  'LocaleSwitch',
  SwitchLocaleFallback,
);

export { loadUseLocale, LocaleContextController, ToggleLocale, useDynamicLocale };