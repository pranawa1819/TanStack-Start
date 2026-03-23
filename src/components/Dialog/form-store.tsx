import type { ReactNode } from 'react';
import type { FieldValues, FormState } from 'react-hook-form';
import { create } from 'zustand';

type ModalSize = 'sm' | 'md' | 'lg';

type InferFormId<T extends string> =
  Lowercase<T> extends `${infer FirstWord} ${infer Rest}`
    ? `${Lowercase<FirstWord>}-${InferFormId<Rest>}`
    : `${Lowercase<T>}-form`;

export interface DialogState {
  open: boolean;
  title: string | null;
  modalTitle: string | null;
  modalSubTitle?: string | null;
  formId: string | undefined;
  okText?: string | ReactNode | null;
  component: React.ReactNode;
  cancelText?: string | ReactNode | null;
  size?: ModalSize;
  onCancel?: () => void;
  formState?: FormState<FieldValues>;
}

export interface DialogActions {
  onOpen: <T extends string>(config: {
    title: T;
    modalTitle: string | null;
    modalSubTitle?: string | null;
    okText?: string | ReactNode;
    component: ReactNode;
    cancelText?: string | ReactNode;
    size?: ModalSize;
    onCancel?: () => void;
  }) => void;
  onClose: () => void;
  setFormState: (state: DialogState['formState']) => void;
}

export const useDialogFormStore = create<DialogState & DialogActions>((set, get) => ({
  open: false,
  title: null,
  formId: undefined,
  okText: null,
  modalTitle: null,
  component: <></>,
  cancelText: null,
  onCancel: () => {},
  setFormState: (state) => {
    set(() => ({ formState: state }));
    if (state?.isSubmitSuccessful) {
      get().onClose();
    }
  },
  onOpen: <T extends string>(config: {
    title: T;
    modalTitle: string | null;
    modalSubTitle?: string | null;
    okText?: ReactNode;
    component: ReactNode;
    cancelText?: ReactNode;
    size?: ModalSize;
    onCancel?: () => void;
  }) => {
    const { title, okText, component, cancelText, size, onCancel, modalTitle, modalSubTitle } =
      config;
    const formId: InferFormId<T> | string = title
      ? ((title.toLowerCase().replace(/\s+/g, '-') + '-form') as InferFormId<T>)
      : '';
    set(() => ({
      open: true,
      title: title,
      modalTitle: modalTitle,
      modalSubTitle: modalSubTitle,
      formId: formId,
      component: component,
      okText: okText,
      cancelText: cancelText,
      size: size,
      onCancel: onCancel,
    }));
  },
  onClose: () => {
    set((state) => ({
      ...state,
      open: false,
    }));
    set((state) => ({
      ...state,
      title: null,
      formId: undefined,
      component: <></>,
      cancelText: null,
      onCancel: () => {},
    }));
  },
}));