import React from 'react'
import Button from './Button'

import { Container } from './style'
import {
  FiFile,
  FiFilePlus,
  FiFolder,
  FiFolderPlus
} from 'react-icons/fi'

function LeftContainer() {
  return (
    <Container>
      <Button icon={ <FiFilePlus/> } title="Novo Arquivo"/>
      <Button icon={ <FiFile/> } title="Abrir Arquivo"/>
      <Button icon={ <FiFolderPlus/> } title="Novo Projeto"/>
      <Button icon={ <FiFolder/> } title="Abrir Projeto"/>
      <br/>
      <span>Arquivos recentes</span>
    </Container>
  )
}

export default LeftContainer