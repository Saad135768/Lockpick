import useStyles from "./style"
import React from 'react'

import Wallpapers from '../DownloadModule/components/Wallpapers'
import Brochure from "./components/Brochure"
import Software from "./components/Software"
const DownloadModule = () => {
  const classes = useStyles()


  return (
    <div className={classes.download}>

<Wallpapers/>

<Brochure/>
<Software/>
    </div>
  )
}

export default DownloadModule
