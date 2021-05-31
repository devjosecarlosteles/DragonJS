import styled from 'styled-components'
import { palet } from '../../../styles/GlobalStyle'

export const Container = styled.div`
  width: 26.8vw;
  height: 96vh;

  background-color: ${ palet.backgroundDark };

  span {
    margin-left: 10px;

    font-size: 0.8rem;

    color: ${ palet.textPrimary }
  }
`