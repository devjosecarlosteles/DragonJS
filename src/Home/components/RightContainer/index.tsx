import React from 'react'
import fs from 'fs'

import { 
  Container,
  FileBox
} from './style'

import {
  newFileElements
} from './newFileElements'
import createModal from '../../../tools/createModal'

interface RightContainerProps {
  show: string;
}


function RightContainer({ show }: RightContainerProps) {
 
  function Show() {
    if(show === 'newfile') {
     return (newFileElements.map((item) => (
      <FileBox 
        title={ `create ${ item.name } file` } 
        key={ item.name }
        onClick={ () => {
          fs.writeFile('./src/temp/newfile.txt', item.name, (err) => {
            if (err) return console.log(err);
          })
          createModal({ route: 'newfile' })
        }}
      >
        { item.icon }
         <span>{ item.name }</span>
        </FileBox>
     )))
    } 
  }
  return (
    <Container>
      { Show() }
    </Container>
  )
}

export default RightContainer