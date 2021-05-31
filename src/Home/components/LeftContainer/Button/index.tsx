import React from 'react'

import { Container } from './style'

interface ButtonProps {
  title: string;
  icon?: JSX.Element
}

function Button({ title, icon}: ButtonProps) {
  return (
    <Container>{ icon }{ title }</Container>
  )
}

export default Button