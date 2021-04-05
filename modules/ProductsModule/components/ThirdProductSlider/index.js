import useStyles from "./style"
import Slider from "react-slick"
import ProductSliderData from "../ProductSliderData"
import { useQuery } from '@apollo/react-hooks'
import { GET_PRODUCTS } from '../../data'
import { useRouter } from 'next/router'
import { pathOr } from 'ramda'

const ThirdProductSlider  = () => {
  const parsed = useRouter().query
  const { data } = useQuery(GET_PRODUCTS, { variables: { 
    searchTerm: parsed?.searchTerm,
    // ID for taxonomy called "bmw wizard"
    taxonomies: '6068e33321364b4f65baff9b'
   } })
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
          dots:false,
          slidesToShow: 1,
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
          const mainPrice = pathOr(0, ['variations', '0', 'price', 'mainPrice'], product)
          const description = pathOr(0, ['variations', '0', 'product', 'description', 'en'], product)
          const imgs = pathOr([], ['variations', '0', 'product', 'images'], product)
          const quantity = pathOr(1, ['variations', '0', 'stock', '0', 'amount'], product)
          return (
           <div className={classes.firstsecond} key={product._id}>
            <div className={classes.second}>
              <ProductSliderData
                title={name}
                type={'Bmw wizard add-on'}
                price={(discountedPrice || mainPrice)?.toFixed(2)}
                description={description}
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

export default ThirdProductSlider 
