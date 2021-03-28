import Link from "next/link"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import Slider from "react-slick"
import ScrollAnimation from "react-animate-on-scroll"
import React from "react"
import Slider4 from "react-slick"
import { useQuery } from '@apollo/react-hooks'
import { GET_PRODUCTS } from './data'
import ModalsContent from "./component/ModalsContent"
import useStyles from "./style"
function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
    className={className}

    onClick={onClick}
  >
<img src="../../static/images/right-arrow.svg"/>

  </div>
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
  
      onClick={onClick}
    >
<img src="../../static/images/left-arrow2.svg"/>

    </div>
  )
}

var settings2 = {
  dots: true,
  infinite: true,
  arrows: true,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  autoplay: true,
  autoplaySpeed: 900,
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
                          src="../../static/images/homepage/shadow2.png"
                          alt="lockpick-header-image"
                        />
                      </div>
                    </div>
                  </div>

                  <div className={classes.slideritem}>
                    <div className={classes.one}>
                      <img src="../../static/images/homepage/slider2.png" style={{filter:'drop-shadow(0.35rem 2.35rem 0.9rem rgba(0, 0, 0, 0.3)'}}/>
                    </div>
                  </div>

                  <div className={classes.slideritem}>
                    <div className={classes.one}>
                      <img src="../../static/images/homepage/slider3.png" style={{filter:'drop-shadow(0.35rem 2.35rem 0.9rem rgba(0, 0, 0, 0.3)'}}/>

                    </div>
                    
                  </div>
                </Slider>

                <div className={classes.three}>
                  <img
                    src="../../static/images/homepage/glow.png"
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
