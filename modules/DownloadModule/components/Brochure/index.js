import Container from "@material-ui/core/Container"
import useStyles from "./style"
import Grid from "@material-ui/core/Grid"
import React from 'react'

import Link from "next/link"

const Brochure = () => {
  const classes = useStyles()

  return (
    <div className={classes.BrochureHolder}>
         <Grid container justify="center" >
      <Grid item lg={9}> 
      <h3>BROCHURES</h3>
      </Grid>
      </Grid>


      <Container>
      <div className={classes.BrochureBg}>

      <Grid container justify="center" spacing={2}>
      <Grid item lg={9}>

      <Grid container justify="center" spacing={2}>

<Grid item lg={6} xs={6}>
  <a href="../../../../static/support/brochures1.pdf" target="_blank">

<img src="../../../../static/support/brochureleft.png"/>
</a>
</Grid>
<Grid item lg={6} xs={6}>
<a href="../../../../static/support/brochures2.pdf" target="_blank">

<img src="../../../../static/support/brochureright.jpg"/>
</a>
</Grid>
</Grid>
</Grid>

</Grid>
</div>
</Container>

</div>


  )
}

export default Brochure
