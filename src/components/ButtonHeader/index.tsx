import React, { useCallback } from 'react'
import { remote } from 'electron'

import {
  FiMinus,
  FiMaximize2,
  FiX
} from 'react-icons/fi'

import {
  Container,
  ButtonContainer
} from './style'

interface ButtonHeaderProps {
  notMaximize: boolean;
}

function ButtonHeader ({ notMaximize }: ButtonHeaderProps) {
  // handle clicks
  // maximize
  const maximizeWindow = useCallback(() => {
    const window = remote.getCurrentWindow()
    if(notMaximize == false) {
      window.maximize()
    } else {
      alert('impossible mazimize this window')
    }
  }, [])
  // minimize
  const minimizeWindow = useCallback(() => {
    const window = remote.getCurrentWindow()
    window.minimize()
  }, [])
  // close
  const closeWindow = useCallback(() => {
    const window = remote.getCurrentWindow()
    window.close()
  }, [])
  return (
    <Container>
      <ButtonContainer onClick={() => minimizeWindow()} color="rgba(187,187,187,41%)">
        <FiMinus />
      </ButtonContainer>
      <ButtonContainer onClick={() => maximizeWindow()} color="rgba(187,187,187,41%)">
        <FiMaximize2 />
      </ButtonContainer>
      <ButtonContainer id="x" onClick={() => closeWindow()} color="red">
        <FiX />
      </ButtonContainer>
    </Container>
  )
}

export default ButtonHeader
