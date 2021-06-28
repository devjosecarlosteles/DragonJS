import styled from 'styled-components'

import { palet } from '../../../styles/GlobalStyle'

export const Container = styled.div`
  width: 100%;
  height: 96vh;

  padding: 22px;

  display: flex;
`

export const FileBox = styled.div`
  width: 80px;
  height: 80px;

  margin: 7px;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-evenly;

  background-color: ${ palet.secundary };

  cursor: pointer;

  :hover {
    span {
      font-weight: bold;
    }
  }

  span {
    font-size: 0.7rem;

    color: ${ palet.textPrimary };
  }
`