import React from 'react'
import { classNames } from '../../utils'

interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Flex: React.FC<FlexProps> = React.forwardRef<
  HTMLInputElement,
  FlexProps
>(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={classNames('flex', className)} {...props}>
      {children}
    </div>
  )
})

Flex.displayName = 'Flex'
