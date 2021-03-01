import Link from "next/link"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import Slider from "react-slick"
import ScrollAnimation from "react-animate-on-scroll"
import React from "react"
import Slider4 from "react-slick"

import ModalsContent from "./component/ModalsContent"
import useStyles from "./style"

var settings2 = {
  dots: true,
  infinite: true,
  arrows: true,
  speed: 900,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,

      },
    },
  ],
}

const Header = () => {
  const classes = useStyles()

  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <div className={classes.HeaderHolder}>
      <Container maxWidth="lg">
        <div className={classes.HeaderImage}>
          <Grid container justify="center">
            <Grid item lg={11} xs={12}>
              <div className={classes.HeaderContent}>
                <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                  <h1>unlock your bmw</h1>
                </ScrollAnimation>

                <Slider {...settings2}>
                  <div className={classes.slideritem}>
                    <div className={classes.one}>
                      <img
                        src="../../static/images/homepage/car.png"
                        alt="lockpick-header-image"
                      />
                      <div className={classes.two}>
                        <img
                          src="../../static/images/homepage/shadow.png"
                          alt="lockpick-header-image"
                        />
                      </div>
                    </div>
                  </div>

                  <div className={classes.slideritem}>
                    <div className={classes.one}>
                      <img src="../../static/images/homepage/slider2.png" />
                    </div>
                  </div>

                  <div className={classes.slideritem}>
                    <div className={classes.one}>
                      <img src="../../static/images/homepage/slider3.png" />
                    </div>
                  </div>
                </Slider>

                <div className={classes.three}>
                  <img
                    src="../../static/images/homepage/glow2.gif"
                    alt="lockpick-header-image"
                  />
                </div>

                <div className={classes.HeaderCircles}>
                  <ScrollAnimation animateIn="fadeIn">
                    <h2> unlimited potential</h2>
                  </ScrollAnimation>
                  <div>
                    <div className={`${classes.HeaderCirclesItem} first `}>
                      <ScrollAnimation animateIn="fadeInUp">

                        <ModalsContent />
                        
                      </ScrollAnimation>
                    </div>
                  </div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  )
}

export default Header
