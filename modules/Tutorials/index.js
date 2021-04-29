import Container from '@material-ui/core/Container'
import useStyles from './style'
import Grid from '@material-ui/core/Grid'
import React from 'react'
import Link from 'next/link'
import Button from '../../common/Button'
import TutorialsVideos from '../Tutorials/components/TutorialsVideos'
import TutorialsSlider from '../Tutorials/components/TutorialsSlider'
const Tutorials = () => {
  const classes = useStyles()

  return (
    <div className={classes.Tutorials}>
      <Container>
        <Grid container justify="center" spacing={2}>
          <Grid item lg={10} xs={12}>
            <div className={classes.root}>
              <Grid container spacing={3}>
                <Grid item lg={6} xs={12} sm={6}>
                  <img
                    src="../../static/support/toturial.png"
                    style={{
                      filter:
                        'drop-shadow(0.35rem 3.35rem 0.9rem rgba(0, 0, 0, 0.3)',
                    }}
                  />
                </Grid>
                <Grid item lg={6} xs={12} sm={6}>
                  <div className={classes.TutorialsRight}>
                    <h4> DOCUMENTS</h4>
                    <div className={classes.TutorialsButtons}>
                      <div>
                        <Link
                          as={
                            '../../static/support/Lock-Pick-Quick-Start-Guide.pdf'
                          }
                          href="../../static/support/Lock-Pick-Quick-Start-Guide.pdf"
                        >
                          <a
                            href="../../static/support/Lock-Pick-Quick-Start-Guide.pdf"
                            target="_blank"
                          >
                            <Button>START GUIDE</Button>
                          </a>
                        </Link>
                        <Link
                          as={'../../static/support/manual.pdf'}
                          href=".../../static/support/manual.pdf"
                        >
                          <a
                            href="../../static/support/manual.pdf"
                            target="_blank"
                          >
                            <Button> MANUAL</Button>
                          </a>
                        </Link>

                        <a>
                          <TutorialsSlider
                            title={'TUTORIALS'}
                          ></TutorialsSlider>
                        </a>
                      </div>

                      <div className={classes.TutorialsIcon}>
                        <img src="../../static/images/pdf2.png" />
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
            <div className={classes.videoholder}>
              <div id="scrollTo">
                <h5> Video Tutorials </h5>
              </div>

              <div className={classes.TutorialsVideo} id="TUTORIALS">
                <TutorialsVideos />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Tutorials