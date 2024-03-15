import { Text } from '@geist-ui/core'
import { forwardRef } from 'react'
import Column from './column'
import Show from './show'

interface TextInputProps {
  label?: string
  placeholder?: string
  minLength?: number
  maxLength?: number
  disabled?: boolean
  error?: string
  className?: string
  onChange?: (value: string) => void
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      label,
      placeholder,
      minLength,
      maxLength,
      disabled,
      error,
      className,
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
        <input
          className={`${className} transition-all w-full h-10
        rounded-md px-4 py-2 text-sm border ${
          error ? 'border-red-500 focus:ring-red-100 focus:border-red-300' : ''
        }`}
          type="text"
          placeholder={placeholder}
          minLength={minLength}
          maxLength={maxLength}
          disabled={disabled}
          ref={ref}
          onChange={event => onChange?.(event.target.value)}
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

export default TextInput
