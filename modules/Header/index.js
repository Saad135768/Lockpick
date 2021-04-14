import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Slider from 'react-slick'
import ScrollAnimation from 'react-animate-on-scroll'
import React from 'react'
import Router from 'next/router'
import { useQuery } from '@apollo/react-hooks'
import { CMS } from './data'
import ModalsContent from './component/ModalsContent'
import useStyles from './style'
import { pathOr } from 'ramda'

function SampleNextArrow({ className, style, onClick }) {
  return (
    <div className={className} onClick={onClick}>
      <img src="../../static/images/right-arrow.svg" />
    </div>
  )
}

function SamplePrevArrow({ className, style, onClick }) {
  return (
    <div className={className} onClick={onClick}>
      <img src="../../static/images/left-arrow2.svg" />
    </div>
  )
}

const settings2 = {
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
  const { data: cms } = useQuery(CMS)
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
                  {pathOr([], ['cms', 'slider'], cms).map(({ name, url, imageURL }) => (
                    <div className={classes.slideritem} key={imageURL}>
                    <div className={classes.one}>
                      <img
                        src={imageURL}
                        alt={name}
                        onClick={() => Router.push(url)}
                        className={classes.img}
                      />
                    </div>
                  </div>
                  ))}
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
