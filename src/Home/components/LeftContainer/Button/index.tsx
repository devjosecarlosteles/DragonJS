import React from 'react'
import { Container } from './style'

interface ButtonProps {
  title: string;
}

function Button({ title }: ButtonProps) {
  return (
    <Container>{ title }</Container>
  )
}

export default Button