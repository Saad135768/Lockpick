import Container from "@material-ui/core/Container"
import useStyles from "./style"
import ScrollAnimation from 'react-animate-on-scroll'
import Grid from "@material-ui/core/Grid"
import React from 'react'

import Link from "next/link"
import Button from "../../common/Button"

const TutorialsModule = () => {
  const classes = useStyles()


  return (
    <div className={classes.Tutorials}>
      <Container>
      <Grid container justify="center" spacing={2}>
      <Grid item lg={10}>
      <div className={classes.root}>
      <Grid container spacing={3}>
      <Grid item lg={6}>
        <img src="../../static/support/toturial.png"/>
</Grid>
<Grid item lg={6}>
<div className={classes.TutorialsRight}>
  <h4> DOCUMNETS</h4>
  <Link as={"../../static/support/guide.pdf"} href="../../static/support/guide.pdf">
                    <a href="../../static/support/guide.pdf" target="_blank">
                      <Button>START GUIDE</Button>
                    </a>
                  </Link>
                  <Link as={"../../static/support/manual.pdf"} href=".../../static/support/manual.pdf">
                    <a href="../../static/support/manual.pdf" target="_blank">
                      <Button> MANUAL</Button>
                    </a>
                  </Link>
                  <Link as={"/about"} href="./about">
                    <a href="/about">
                      <Button> TUTORIALS</Button>
                    </a>
                  </Link>
                  </div>
</Grid>

</Grid>

   </div>

</Grid>
</Grid>

</Container>

    </div>
  )
}

export default TutorialsModule
