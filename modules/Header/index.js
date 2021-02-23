import Link from "next/link"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import Slider from "react-slick"
import ScrollAnimation from 'react-animate-on-scroll'
import { Parallax } from 'react-scroll-parallax'
import React from 'react'
import Button from '@material-ui/core/Button'

import ModalsContent from './component/ModalsContent'
import useStyles from "./style"
var settings = {
  dots: false,
  infinite: false,
  arrows: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        dots: true,
        autoplaySpeed: 1500,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1500,
      },
    },
  ],
}

const Header = () => {
  const classes = useStyles()

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.HeaderHolder}>
      <Container maxWidth="lg">
        <div className={classes.HeaderImage}>
          <Grid container justify="center">
            <Grid item lg={10} xs={12}>
              <div className={classes.HeaderContent}>
              <ScrollAnimation animateIn="fadeIn"
                       animateOnce={true}>
                  
                <h1>unlock your bmw</h1>
                </ScrollAnimation>

                <div className={classes.HeaderMainImge}>
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

<div className={classes.three}>

<img
  src="../../static/images/homepage/glow2.gif"
  alt="lockpick-header-image"
/>
                </div>
                </div>
                <div className={classes.HeaderCircles}>
                <ScrollAnimation animateIn="fadeIn">
                  <h2> unlimited potential</h2>
                  </ScrollAnimation>
                  <Slider {...settings}>
                    <div>
                  

                <div className={`${classes.HeaderCirclesItem} first `}>
                <ScrollAnimation animateIn='fadeInUp'
                    >
                     <ModalsContent
                     image={'../../static/images/homepage/key.png'}
                     title={"Program New "}
                     title2={'& Used Keys'}
                     modalTitle={'Program New & Used Keys'}  
                     description={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy."}
                     >
                     </ModalsContent>
                        </ScrollAnimation>
                      </div>
                    </div>

                    <div>
                 
                        <div className={`${classes.HeaderCirclesItem} second `}>
                        <ScrollAnimation animateIn='fadeInUp'
                    >
                     <ModalsContent
                     image={'../../static/images/homepage/key.png'}
                     title={"Reset transmission "}
                     title2={'modules ISN'}
                     modalTitle={'Reset Transmistion Modules ISN'}  
                     description={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy."}
                     >
                     </ModalsContent>
                        </ScrollAnimation>

                      </div>

                    </div>
                    <div>

                  <div className={`${classes.HeaderCirclesItem} third `}>
                  <ScrollAnimation animateIn='fadeInUp'
                    >
                     <ModalsContent
                     image={'../../static/images/homepage/key.png'}
                     title={"Clone BMW "}
                     title2={'& Mini modules'}
                     modalTitle={'Clone BMW & Mini Modules'}  
                     description={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy."}
                     >
                     </ModalsContent>
                        </ScrollAnimation>
                      </div>
                      </div>
                  </Slider>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
        <ModalsContent/>
      </Container>
    </div>
  )
}

export default Header
