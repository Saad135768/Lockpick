import Link from "next/link"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import Slider from "react-slick"
import ScrollAnimation from 'react-animate-on-scroll'
import { Parallax } from 'react-scroll-parallax'

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

  return (
    <div className={classes.HeaderHolder}>
      <Container maxWidth="lg">
        <div className={classes.HeaderImage}>
          <Grid container justify="center">
            <Grid item lg={9} xs={12}>
              <div className={classes.HeaderContent}>
                <h1> unlock your bmw</h1>
                <div className={classes.HeaderMainImge}>
                <Parallax  x={[20, -10]}>

                  <img
                    src="../../static/images/homepage/header2.png"
                    alt="lockpick-header-image"
                  />
                  </Parallax>
                </div>

                <div className={classes.HeaderCircles}>
                <ScrollAnimation animateIn="fadeIn">

                  <h2> unlimited potential</h2>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn='fadeInUp'>


                  <Slider {...settings}>
                    <div>
                      <div className={classes.HeaderCirclesItem}>
                        <img
                          src="../../static/images/homepage/key.png"
                          alt="lockpick-key-image"
                        />
                        <h3>
                          
                          Program New <br /> & Used Keys
                        </h3>
                      </div>
                    </div>

                    <div>
                      <div className={classes.HeaderCirclesItem}>
                        <img
                          src="../../static/images/homepage/rest.png"
                          alt="lockpick-rest-image"
                        />
                        <h3>
                          
                          Reset transmission <br />
                          modules ISN
                        </h3>
                      </div>
                    </div>
                    <div>
                      <div className={classes.HeaderCirclesItem}>
                        <img
                          src="../../static/images/homepage/clone.png"
                          alt="lockpick-clone-image"
                        />
                        <h3>
                          
                          Clone BMW <br /> & Mini modules
                        </h3>
                      </div>
                    </div>
                  </Slider>
                  </ScrollAnimation>

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
