import styled from 'styled-components'

export const Container = styled.div`
  height: 24px;

  display: flex;

  -webkit-app-region: none; 

  #x {
    margin-right: 0;
  }
`

export const ButtonContainer = styled.div.attrs(props => ({}))`
  width: 20px;

  margin-right: 6px;

  display: flex;
  
  align-items: center;
  justify-content: center;

  :hover { 
    background-color: ${ props => props.color };
  }
`