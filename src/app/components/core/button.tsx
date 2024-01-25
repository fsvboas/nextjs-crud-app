import { Button as GUIButton } from '@geist-ui/core'
import React from 'react'

interface ButtonProps extends React.ComponentPropsWithRef<typeof GUIButton> {
  children?: string
}

const Button = ({ children, ...props }: ButtonProps) => {
  return <GUIButton {...props}>{children}</GUIButton>
}

export default Button
