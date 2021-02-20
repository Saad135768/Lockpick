import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import useStyles from "./style"
import Slider from "react-slick";
import ProductSliderData from "../ProductSliderData";

const FirstProductSlider = () => {
  const classes = useStyles()
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          dots: true
        }
      },
    
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className={classes.ProductSliderHolder}>
      <div className={classes.ProductSliderBg}>
      <Grid container>
      <Grid lg={6} sm={6} xs={12}>
      <Slider {...settings}>
          <div>
           <img src="../../../../static/images/products/product1.png"/>
          </div>
          <div>
           <img src="../../../../static/images/products/product1.png"/>
          </div>
         
        </Slider>
</Grid>
<Grid lg={6} sm={6} xs={12}>
<ProductSliderData
title={'Lock Pick Basic Kit'}
type={'Starter kit'}
price={'$2,999,00'}
include={'Includes:'}
description={'Main Device, Accessories, Interface Boards, And Full Software.'}
buttonTitle={'Add to cart'}
buttonLink={''}
buttonLinkAs={''}

>

</ProductSliderData>

</Grid>
      </Grid>
      </div>

    </div>
  )
}

export default FirstProductSlider
