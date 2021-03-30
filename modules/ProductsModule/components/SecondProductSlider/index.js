import Container from "@material-ui/core/Container"
import useStyles from "./style"
import Slider from "react-slick"
import ProductSliderData from "../ProductSliderData"
import { pathOr } from 'ramda'

const SecondProductSlider = ({ data }) => {
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
          slidesToShow: 1,
          dots:false,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div className={classes.ProductSliderHolder}>
      <div className={classes.ProductSliderBg}>
        <Slider {...settings}>
        {pathOr([], ['getProducts', 'items'], data).map((product) => {
          const name = pathOr('', ['variations', '0', 'product', 'name', 'en'], product)
          const discountedPrice = pathOr(0, ['variations', '0', 'price', 'discountedPrice'], product)
          const mainPrice = pathOr(0, ['variations', '0', 'product', 'mainPrice'], product)
          const description = pathOr(0, ['variations', '0', 'product', 'description', 'en'], product)
          const imgs = pathOr([], ['variations', '0', 'product', 'images'], product)
          const quantity = pathOr(1, ['variations', '0', 'stock', '0', 'amount'], product)
          return (
           <div className={classes.firstsecond} key={product._id}>
            <div className={classes.second}>
              <ProductSliderData
                title={name}
                type={"Refurbished Dell Latitude"}
                price={(discountedPrice || mainPrice)?.toFixed(2)}
                description={description}
                spec={'i5 Processor / 8 GB RAM / 250 SSD'}
                buttonTitle={"Add to cart"}
                buttonLink={`/product/${product._id}`}
                buttonLinkAs={""}
                quantity={quantity}
              />
            </div>
            <div className={classes.first}>
              <img src={imgs[0]} />
            </div>
          </div>
            )})}

         
        </Slider>
      </div>
    </div>
  )
}

export default SecondProductSlider
