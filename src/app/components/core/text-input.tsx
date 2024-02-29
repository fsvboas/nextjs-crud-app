import { Text } from '@geist-ui/core'
import { forwardRef } from 'react'
import Column from './column'
import Row from './row'
import Show from './show'

interface TextInputProps {
  placeholder?: string
  minLength?: number
  maxLength?: number
  required?: boolean
  disabled?: boolean
  className?: string
  error?: string
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      placeholder,
      minLength,
      maxLength,
      disabled,
      className,
      error,
      ...inputProps
    },
    ref,
  ) => {
    return (
      <Column>
        <input
          className={`${className} transition-all w-full h-10
        rounded-md px-4 py-2 text-sm border ${
          error
            ? '!border-danger-500 focus:ring-danger-100 focus:border-danger-300'
            : ''
        }`}
          type="text"
          placeholder={placeholder}
          minLength={minLength}
          maxLength={maxLength}
          disabled={disabled}
          ref={ref}
          {...inputProps}
        />
        <Show when={Boolean(error)} fallback={<Row className="h-[1px]" />}>
          <Row className="h-[1px]">
            <Text span className="text-danger-700 text-sm -mt-1">
              {error}
            </Text>
          </Row>
        </Show>
      </Column>
    )
  },
)

export default TextInput
