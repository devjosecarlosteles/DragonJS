import { remote } from 'electron'

interface createModalProps {
  route: string;
}

function createModal ({ route }: createModalProps) {
  const top = remote.getCurrentWindow()
  const child = new remote.BrowserWindow({ 
    width: 463,
    height: 105,
    parent: top, 
    modal: true, 
    frame: false,
    show: false,
    resizable: false,
    webPreferences: {
      nodeIntegration: true
    }
  })
    child.loadURL(`http://localhost:4000/${ route } `)
    child.once('ready-to-show', () => {
      child.show()
    })
}

export default createModal