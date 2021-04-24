import React from 'react'
import Container from "@material-ui/core/Container"
import useStyles from "./style"
import Grid from "@material-ui/core/Grid"


const Brochure = () => {
  const classes = useStyles()

  return (
    <div className={classes.BrochureHolder}>
      <Container>

        <Grid container justify="center" >
          <Grid item lg={9}>
            <h3>BROCHURES</h3>
          </Grid>
        </Grid>
      </Container>


      <Container>
        <div className={classes.BrochureBg}>

          <Grid container justify="center" spacing={2}>
            <Grid item lg={9}>

              <Grid container justify="center" spacing={2}>

                <Grid item lg={6} xs={6}>
                  <a href="../../../../static/support/Lock-Pick-Brochure.pdf" target="_blank">

                    <img src="../../../../static/support/brochureleft.png" />

                  </a>
                </Grid>
                <Grid item lg={6} xs={6}>
                  <a href="../../../../static/support/BMW-WIZARD-Brochure.pdf" target="_blank">

                    <img src="../../../../static/support/brochureright.jpg" />
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
