import useStyles from "./style"
import Slider from "react-slick"
import ProductSliderData from "../ProductSliderData"

const ThirdProductSlider  = () => {
  const classes = useStyles()
  var settings = {
    dots: true,
    infinite: false,
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
           <div className={classes.firstsecond}>
           
            <div className={classes.second}>
              <ProductSliderData
                title={"Add-on / options"}
                type={"Starter kit"}
                price={"$2,999,00"}
                include={"Includes:"}
                description={
                  "Main Device, Accessories, Interface Boards, And Full Software."
                }
                buttonTitle={"Add to cart"}
                buttonLink={""}
                buttonLinkAs={""}
              />
            </div>
            <div className={classes.first}>
              <img src="../../../../static/images/products/addons.png" />
            </div>
          </div>
          <div className={classes.firstsecond}>
           
            <div className={classes.second}>
              <ProductSliderData
                title={"Lock Pick Basic Kit"}
                type={"Starter kit"}
                price={"$2,999,00"}
                include={"Includes:"}
                description={
                  "Main Device, Accessories, Interface Boards, And Full Software."
                }
                buttonTitle={"Add to cart"}
                buttonLink={""}
                buttonLinkAs={""}
              />
            </div>
            <div className={classes.first}>
              <img src="../../../../static/images/products/product1.png" />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default ThirdProductSlider 
