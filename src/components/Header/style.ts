import styled from 'styled-components'
import { palet } from '../../styles/GlobalStyle'

export const Container = styled.header`
  height: 24px;

  display: flex;

  justify-content: space-between;
  align-items: center;

  font-size: 0.8rem;

  background-color: ${ palet.secundary };
  color: ${ palet.textPrimary };

  // electron 
  user-select: none;
  -webkit-app-region: drag; 
`

export const Logo = styled.img`
  width: 24px;
`