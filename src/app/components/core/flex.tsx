import React from 'react'
import classNames from '../../helpers/class-names'

interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {}

const Flex: React.FC<FlexProps> = React.forwardRef<HTMLInputElement, FlexProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={classNames('flex', className)} {...props}>
        {children}
      </div>
    )
  },
)

Flex.displayName = 'Flex'

export default Flex
