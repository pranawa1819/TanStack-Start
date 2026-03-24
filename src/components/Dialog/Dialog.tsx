import { DialogContent, DialogTrigger, Dialog as Root } from '~/ui/dialog'
import type { ReactNode } from 'react'

interface DialogProps {
  children: ReactNode
  className?: string
  triggerContent: ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
  overlayClassName?: string
}

export const Dialog = ({
  children,
  className,
  triggerContent,
  open,
  onOpenChange,
}: DialogProps) => {
  console.log(open);
  return (
    <Root open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild >{triggerContent}</DialogTrigger>
      <DialogContent className={className}>{children}</DialogContent>
    </Root>
  )
}
