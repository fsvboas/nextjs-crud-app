import { Text } from '@geist-ui/core'
import { forwardRef } from 'react'
import ReactInputMask from 'react-input-mask'
import Column from './column'
import Show from './show'

interface MaskInputProps {
  mask: string
  maskPlaceholder?: string
  label?: string
  placeholder?: string
  minLength?: number
  maxLength?: number
  disabled?: boolean
  error?: string
  className?: string
  value?: string
  onChange?: (value: any) => void
}

const MaskInput = forwardRef<ReactInputMask, MaskInputProps>(
  (
    {
      mask,
      maskPlaceholder = '',
      label,
      placeholder,
      minLength,
      maxLength,
      disabled,
      error,
      className,
      value,
      onChange,
      ...inputProps
    },
    ref,
  ) => {
    return (
      <Column>
        <Show when={Boolean(label)}>
          <Text span className="text-sm pb-1">
            {label}
          </Text>
        </Show>
        <ReactInputMask
          className={`${className} transition-all w-full h-10
        rounded-md px-4 py-2 text-sm border ${
          error ? 'border-red-500 focus:ring-red-100 focus:border-red-300' : ''
        }`}
          mask={mask}
          maskPlaceholder={maskPlaceholder}
          placeholder={placeholder}
          alwaysShowMask={false}
          minLength={minLength}
          maxLength={maxLength}
          disabled={disabled}
          ref={ref}
          value={value}
          onChange={onChange}
          {...inputProps}
        />
        <Show when={Boolean(error)}>
          <Text span className="!text-red-500 text-xs mb-1 !h-[1px]">
            {error}
          </Text>
        </Show>
      </Column>
    )
  },
)

export default MaskInput
