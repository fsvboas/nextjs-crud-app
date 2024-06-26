import React from 'react'
import { classNames } from '../../utils'

interface ColumnProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Column: React.FC<ColumnProps> = React.forwardRef<
  HTMLInputElement,
  ColumnProps
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={classNames('flex flex-col', className)}
      {...props}
    >
      {children}
    </div>
  )
})

Column.displayName = 'Column'
