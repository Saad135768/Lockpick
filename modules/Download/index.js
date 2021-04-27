import React from 'react'
import useStyles from './style'
import Wallpapers from './components/Wallpapers'
import Brochure from './components/Brochure'
import Software from './components/Software'

const Download = () => {

  const classes = useStyles()
  return (
    <div className={classes.download}>
      <Wallpapers />
      <Brochure />
      <Software />
    </div>
  )
}

export default Download
