import Container from "@material-ui/core/Container"
import useStyles from "./style"
import ScrollAnimation from "react-animate-on-scroll"
import Grid from "@material-ui/core/Grid"
import React from "react"
import Link from "next/link"
import Button from "../../common/Button"
import { AiOutlineFilePdf } from 'react-icons/ai'

import TutorialsSlider from '../TutorialsModule/components/TutorialsSlider'
const TutorialsModule = () => {
  
  const classes = useStyles()

  return (
    <div className={classes.Tutorials}>
      <Container>
        <Grid container justify="center" spacing={2}>
          <Grid item lg={10} xs={12}>
            <div className={classes.root}>
              <Grid container spacing={3}>
                <Grid item lg={6} xs={12} sm={6}>
                  <img src="../../static/support/toturial.png" />
                </Grid>
                <Grid item lg={6} xs={12} sm={6}>
                  <div className={classes.TutorialsRight}>
                    <h4> DOCUMENTS</h4>
                    <div className={classes.TutorialsButtons}>
                    <div>
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
                   

                  
                      <a>
                     <TutorialsSlider
                     title={'TUTORIALS'}
                     
                     >
                       </TutorialsSlider>
                      </a>
                      </div>

                      <div className={classes.TutorialsIcon}>
                    <img src='../../static/images/pdf2.png'/>
                    </div>
                    </div>
                    
<div>
  <h5> VIDEOS </h5>
</div>
                   
                  </div>

                </Grid>
              </Grid>
            </div>
<div className={classes.videoholder}>

<div className={classes.TutorialsVideo} id="TUTORIALS">
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
