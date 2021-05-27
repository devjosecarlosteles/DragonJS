import React from 'react'
import Button from './Button'

import { Container } from './style'

function LeftContainer() {
  return (
    <Container>
      <Button title="Novo Arquivo"/>
      <Button title="Abrir Arquivo"/>
      <Button title="Novo Projeto"/>
      <Button title="Abrir Projeto"/>
    </Container>
  )
}

export default LeftContainer