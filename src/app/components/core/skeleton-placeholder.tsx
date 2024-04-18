import { classNames } from '../../utils'

interface SkeletonPlaceholderProps {
  width?: number | string
  height?: number | string
  borderRadius?: number
  variant?: 'circle'
  className?: string
  color?: string
}

export const SkeletonPlaceholder = ({
  width,
  height,
  variant,
  borderRadius = 8,
  className,
  color,
}: SkeletonPlaceholderProps) => {
  const hasVariant = Boolean(variant)

  return (
    <div
      className={classNames(
        `animate-pulse ${color ?? 'bg-dark-300/80'}`,
        variant === 'circle' ? 'rounded-full' : 'rounded-none',
        className,
      )}
      style={{
        width,
        height,
        borderRadius: !hasVariant ? borderRadius : undefined,
      }}
    />
  )
}
