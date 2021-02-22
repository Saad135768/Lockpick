import Container from "@material-ui/core/Container"
import useStyles from "./style"
import Grid from "@material-ui/core/Grid"
import React from 'react'

import Link from "next/link"
import Button from "../../../../common/Button"

const Brochure = () => {
  const classes = useStyles()

  return (
    <div className={classes.BrochureHolder}>
         <Grid container justify="center" >
      <Grid item lg={9}> 
      <h3>BROCHURES</h3>
      </Grid>
      </Grid>

        <div className={classes.BrochureBg}>

      <Container>

      <Grid container justify="center" spacing={2}>
      <Grid item lg={9}>

      <Grid container justify="center" spacing={2}>

<Grid item lg={6} xs={6}>
<img src="../../../../static/support/brochureleft.png"/>
</Grid>
<Grid item lg={6} xs={6}>

<img src="../../../../static/support/brochureright.jpg"/>
</Grid>
</Grid>
</Grid>

</Grid>
</Container>
</div>
</div>


  )
}

export default Brochure
