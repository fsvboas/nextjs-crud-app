import { Input as GUIInput, Text } from '@geist-ui/core'
import React from 'react'
import Column from './column'
import Row from './row'
import Show from './show'

interface TextInputProps extends React.ComponentPropsWithRef<typeof GUIInput> {
  error?: string
}
const TextInput = ({ error, ...props }: TextInputProps) => {
  return (
    <Column className="space-y-2">
      <Text p>{props.label}</Text>
      <GUIInput crossOrigin type={Boolean(error) ? 'error' : 'secondary'} />
      <Show when={Boolean(error)} fallback={<Row className="h-[1px]" />}>
        <Row className="h-[1px]">
          <Text span className="text-danger-700 text-sm -mt-1">
            {error}
          </Text>
        </Row>
      </Show>
    </Column>
  )
}

export default TextInput
