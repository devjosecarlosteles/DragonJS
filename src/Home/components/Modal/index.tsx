import React, { useState } from 'react'
import { remote } from 'electron'
import fs from 'fs'
import {
  Container
} from './style'

import ButtonHeader from '../../../components/ButtonHeader'
import extensionLang from '../../../tools/extensionLang'
import {
  FiFile,
  FiFolder
} from 'react-icons/fi'
import { handleCloseWindow } from '../../../tools/windowActions'

function ModalNewFile () {
  const lang = fs.readFileSync('./src/temp/newfile.txt', 'utf-8')
  const extension = extensionLang({ language: lang })
  const { dialog } = remote
  const [ fileNameState, setFileNameState ] = useState('')
  const [ pathState, setPathState ] = useState('')
  
  return (
    <>
      <Container>
        <header>
          <ButtonHeader notMaximize />
        </header>
        <main>
        <div>
          <FiFile/>
          <input 
            value={ fileNameState }
            onChange={(e) => {
              setFileNameState(e.target.value)
            }}
            placeholder='nome do arquivo' 
          />
          <span>.{ extension }</span>
        </div>
        {/* <br/> */}
        <div>
          <FiFolder/>
          <button 
            onClick={() => {
              dialog.showOpenDialog({ properties: ['openDirectory'] })
                .then (result => {
                  if(result.canceled === false) {
                    setPathState(result.filePaths[0])
                  }
                }).catch(err => {
                  console.log(err)
              })
            }}>selecionar diretório
          </button>
        </div>
        </main>
        {
          pathState != '' ? (
            <span id='path'>"{ pathState.substr(0, 40) }...\{ fileNameState }.{ extension }"</span>
          ) : null
        }
        <br/>
        <br/>
        <div id='createOrCancel'> 
          <button className='btnCreate'>Criar Arquivo</button>
          <button 
            className="btnCancel"
            onClick={ () => {
              handleCloseWindow()
            } } 
          >Cancelar</button>
        </div>
      </Container> 
    </>
  )
}

export default ModalNewFile