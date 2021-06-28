import { remote } from 'electron'

export const handleCloseWindow = () => {
  const window = remote.getCurrentWindow()
    window.close()
} 
