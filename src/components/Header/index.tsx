import React from 'react'

import {
  Container,
  Logo
} from './style'  

import ButtonHeader from '../ButtonHeader'
import logo from '../../assets/image/logo.png'

interface HeaderProps {
  notMaximize?: boolean;
}

function Header({ notMaximize=false }: HeaderProps) {
  return (
      <Container>
        <Logo src={ logo } alt='logo' />
        <span>DragonJS</span>
        <ButtonHeader notMaximize={ notMaximize } />
      </Container>
  )
}

export default Header
