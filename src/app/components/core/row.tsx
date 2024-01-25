import React from 'react'
import classNames from '../../helpers/class-names'

interface RowProps extends React.HTMLAttributes<HTMLDivElement> {}

const Row: React.FC<RowProps> = React.forwardRef<HTMLInputElement, RowProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={classNames('flex flex-row', className)}
        {...props}
      >
        {children}
      </div>
    )
  },
)

Row.displayName = 'Row'

export default Row
