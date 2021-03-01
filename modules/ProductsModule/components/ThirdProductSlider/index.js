import useStyles from "./style"
import Slider from "react-slick"
import ProductSliderData from "../ProductSliderData"

const ThirdProductSlider  = () => {
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
           <div className={classes.firstsecond}>
           
            <div className={classes.second}>
              <ProductSliderData
                title={"Add-on / options"}
                type={"Add-On to BMW WIZARD"}
                price={"$3,800,00"}
                description={
                  "Includes a complete BMW Wizard software update along with the Lock Pick Basic kit."
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
                title={"Add-on / options"}
                type={"NEW OPTION"}
                price={"$COMING SOON"}
                description={
                  ""
                }
                buttonTitle={"Add to cart"}
                buttonLink={""}
                buttonLinkAs={""}
              />
            </div>
            <div className={classes.first}>
              <img src="../../../../static/images/products/coming.png" />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default ThirdProductSlider 
