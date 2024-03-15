import { Text } from '@geist-ui/core'
import { forwardRef } from 'react'
import Column from './column'
import Show from './show'

interface SearchInputProps {
  label?: string
  placeholder?: string
  className?: string
  onChange?: (value: string) => void
}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ label, placeholder, className, onChange, ...inputProps }, ref) => {
    return (
      <Column>
        <Show when={Boolean(label)}>
          <Text span className="text-sm pb-1">
            {label}
          </Text>
        </Show>
        <input
          className={`${className} transition-all w-full h-10
        rounded-md px-4 py-2 text-sm border `}
          type="text"
          placeholder={placeholder}
          ref={ref}
          onChange={event => onChange?.(event.target.value)}
          {...inputProps}
        />
      </Column>
    )
  },
)

export default SearchInput
