import type { ReactNode } from 'react'
import { Label as Root } from '~/ui/label'

interface LabelProps {
  labelClassName?: string
  children: ReactNode
  onClick?: () => void
}

export const HRLabel = ({ labelClassName, children, onClick }: LabelProps) => {
  return (
    <>
      <Root className={labelClassName} onClick={onClick}>
        {children}
      </Root>
    </>
  )
}
