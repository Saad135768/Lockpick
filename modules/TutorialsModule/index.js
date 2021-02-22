import Container from "@material-ui/core/Container"
import useStyles from "./style"
import ScrollAnimation from "react-animate-on-scroll"
import Grid from "@material-ui/core/Grid"
import React from "react"
import Link from "next/link"
import Button from "../../common/Button"
const TutorialsModule = () => {
  const classes = useStyles()

  return (
    <div className={classes.Tutorials}>
      <Container>
        <Grid container justify="center" spacing={2}>
          <Grid item lg={10} xs={12}>
            <div className={classes.root}>
              <Grid container spacing={3}>
                <Grid item lg={6} xs={12}>
                  <img src="../../static/support/toturial.png" />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <div className={classes.TutorialsRight}>
                    <h4> DOCUMNETS</h4>
                    <Link
                      as={"../../static/support/guide.pdf"}
                      href="../../static/support/guide.pdf"
                    >
                      <a href="../../static/support/guide.pdf" target="_blank">
                        <Button>START GUIDE</Button>
                      </a>
                    </Link>
                    <Link
                      as={"../../static/support/manual.pdf"}
                      href=".../../static/support/manual.pdf"
                    >
                      <a href="../../static/support/manual.pdf" target="_blank">
                        <Button> MANUAL</Button>
                      </a>
                    </Link>
                    <Link as={"/support/tutorials"} href="/support/tutorials">
                      <a href="/support/tutorials">
                        <Button> TUTORIALS</Button>
                      </a>
                    </Link>
                  </div>
                </Grid>
              </Grid>
            </div>
<div className={classes.videoholder}>

<div>
  <h3> VIDEO TUTORIALS </h3>
</div>
<div className={classes.TutorialsVideo}>
  <p> LOCK PICK Training Video Tutorials </p>

  <iframe width="100%" height="417" src="https://www.youtube.com/embed/NpEaa2P7qZI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  
</div>
</div>

          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default TutorialsModule
