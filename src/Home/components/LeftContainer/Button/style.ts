import styled from 'styled-components'
import { palet } from '../../../../styles/GlobalStyle'

export const Container = styled.div`
  width: 214px;
  height: 42px;

  display: flex;

  align-items: center;
  justify-content: space-evenly;

  font-size: 0.9rem;

  background-color: ${ palet.backgroundLight };

  cursor: pointer;

  :hover {
    background-color: #505050;

    svg {
      color: #000;
    }
  }
`