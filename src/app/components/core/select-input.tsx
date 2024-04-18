import { Select, Text } from '@geist-ui/core'
import { forwardRef } from 'react'
import { Column, Show } from './'

type SelectInputOptionsType = {
  value: string
  label: string
}

interface SelectInputProps {
  label?: string
  placeholder?: string
  className?: string
  value?: string
  defaultValue?: string
  onChange?: (value: any) => void
  options: SelectInputOptionsType[]
}

export const SelectInput = forwardRef<HTMLInputElement, SelectInputProps>(
  (
    { label, placeholder, className, value, defaultValue, onChange, options },
    ref,
  ) => {
    return (
      <Column>
        <Show when={Boolean(label)}>
          <Text span className="text-sm pb-1">
            {label}
          </Text>
        </Show>
        <Select
          placeholder={placeholder}
          onChange={onChange}
          ref={ref}
          initialValue={defaultValue}
          value={value}
          clearable
          className={`${className} !transition-all !w-full !h-10
          !rounded-md !px-4 !py-2 !text-sm relative`}
        >
          {options?.map((option, index) => (
            <Select.Option key={index} value={option.value}>
              {option.label}
            </Select.Option>
          ))}
        </Select>
      </Column>
    )
  },
)
