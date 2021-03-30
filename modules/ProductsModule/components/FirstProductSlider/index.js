import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import useStyles from './style'
import Slider from 'react-slick'
import ProductSliderData from '../ProductSliderData'
import { pathOr } from 'ramda'

const FirstProductSlider = ({ data }) => {
  const imgs = []
  const classes = useStyles()
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 480,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div className={classes.ProductSliderHolder}>
      <div className={classes.ProductSliderBg}>
        <Grid container>
          <Grid lg={6} sm={6} xs={12}>
            <Slider {...settings}>
              {/* <div>
                <img src="../../../../static/images/products/product1.png" />
              </div>
              <div>
                <img src="../../../../static/images/products/a2.png" />
              </div>
              <div>
                <img src="../../../../static/images/products/software.png" />
              </div> */}
              <div>
              {imgs.map((img) =>{ 
                console.log(`imggggg`, img)
                return (
                 <div key={img}>
                 <img src={img} />
               </div>
              )})}
              </div>
            </Slider>
          </Grid>
          <Grid lg={6} sm={6} xs={12}>
            <div className={classes.ProductSliderDataHolder}>
              {pathOr([], ['getProducts', 'items'], data).map((product) => {
                const name = pathOr('', ['variations', '0', 'product', 'name', 'en'], product)
                const discountedPrice = pathOr(0, ['variations', '0', 'price', 'discountedPrice'], product)
                const mainPrice = pathOr(0, ['variations', '0', 'product', 'mainPrice'], product)
                const description = pathOr(0, ['variations', '0', 'product', 'description', 'en'], product)
                const quantity = pathOr(1, ['variations', '0', 'stock', '0', 'amount'], product)
                // imgs.push(pathOr([], ['variations', '0', 'product', 'images'], product))
                return( 
              <React.Fragment key={product._id}>
                <ProductSliderData
                  title={name}
                  type={'Starter kit'}
                  price={(discountedPrice || mainPrice)?.toFixed(2)}
                  include={'Includes:'}
                  description={description}
                  buttonTitle={'Add to cart'}
                  buttonLink={`/product/${product._id}`}
                  buttonLinkAs={''}
                  quantity={quantity}
                />
              </React.Fragment>)})}
             
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default FirstProductSlider
