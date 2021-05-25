import React from 'react'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Slider from 'react-slick'
import ScrollAnimation from 'react-animate-on-scroll'
import Router from 'next/router'
import { useQuery } from '@apollo/react-hooks'
import { CMS } from './data'
import ModalsContent from './component/ModalsContent'
import useStyles from './style'
import { pathOr } from 'ramda'

function SampleNextArrow({ className, style, onClick }) {
  return (
    <div className={className} onClick={onClick}>
      <img src="https://image.devteam9260.workers.dev/?width=70&image=https://hbs-static.s3.eu-west-1.amazonaws.com/product/5fc5fa160412b572360a4771/60ec88e8-7634-4f51-94bf-793577e656d7.svg" alt='left arrow'/>
    </div>
  )
}

function SamplePrevArrow({ className, style, onClick }) {
  return (
    <div className={className} onClick={onClick}>
      <img src="https://image.devteam9260.workers.dev/?width=70&image=https://hbs-static.s3.eu-west-1.amazonaws.com/product/5fc5fa160412b572360a4771/038603e9-8acf-4292-9f7f-7a7294e1be7f.svg"  alt='right arrow'/>
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
                  {pathOr([], ['cms', 'slider'], cms).map(({ name, url, imageURL }, index) => (
                    <div className={classes.slideritem} key={imageURL}>
                    <div className={classes.one}>
                      <img
                        src={`https://image.devteam9260.workers.dev/?width=900&image=${imageURL}`}
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
                    src="https://image.devteam9260.workers.dev/?width=1000&image=https://hbs-static.s3.eu-west-1.amazonaws.com/product/5fc5fa160412b572360a4771/e0a47501-3b89-44b1-9d43-3a0c718658a3.png"
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
