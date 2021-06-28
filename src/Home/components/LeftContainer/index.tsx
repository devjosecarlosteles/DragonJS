import React, { useContext } from 'react'
import Button from './Button'

import { Container } from './style'
import {
  FiFile,
  FiFilePlus,
  FiFolder,
  FiFolderPlus
} from 'react-icons/fi'

interface LeftContainerProps{
  callbackParent: Function
}

function LeftContainer({ callbackParent }: LeftContainerProps) {
  // callbackPArent returns what it should and show it right container
  // callbackParent possibilities ( newfile, openfile, newproject, openproject )
  return (
    <Container>
      <Button 
        icon={ <FiFilePlus/> }
        title="Novo Arquivo"
        onPress={() => callbackParent('newfile')}
      />
      <Button icon={ <FiFile/> } title="Abrir Arquivo"/>
      <Button icon={ <FiFolderPlus/> } title="Novo Projeto"/>
      <Button icon={ <FiFolder/> } title="Abrir Projeto"/>
      <br/>
      <span>Arquivos recentes</span>  
    </Container>
  )
}

export default LeftContainer