import React from 'react'

import { Container } from './style'

interface ButtonProps {
  title: string;
  icon?: JSX.Element,
  onPress?: Function
}

function Button({ title, icon, onPress = () => {alert('functionality not yet available')}}: ButtonProps) {
  return (
    <Container onClick={ () => onPress() }>{ icon }{ title }</Container>
  ) 
}

export default Button