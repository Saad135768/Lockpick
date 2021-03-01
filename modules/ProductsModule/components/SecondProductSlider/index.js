import Container from "@material-ui/core/Container"
import useStyles from "./style"
import Slider from "react-slick"
import ProductSliderData from "../ProductSliderData"

const SecondProductSlider = () => {
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
           <div className={classes.firstsecond}>
           
            <div className={classes.second}>
              <ProductSliderData
                title={"full package"}
                type={"Refurbished Dell Latitude"}
                price={"$3,695,00"}
                description={
                  "Lock Pick Basic kit with preinstalled software on: Factory refurbished Dell Latitude E5470"
                }
                spec={'i5 Processor / 8 GB RAM / 250 SSD'}
                buttonTitle={"Add to cart"}
                buttonLink={""}
                buttonLinkAs={""}
              />
            </div>
            <div className={classes.first}>
              <img src="../../../../static/images/products/1.png" />
            </div>
          </div>

          <div className={classes.firstsecond}>
           
           <div className={classes.second}>
             <ProductSliderData
               title={"full package"}
               type={"Refurbished Panasonic Toughbook"}
               price={"$4,495,00"}
               description={
                 "Lock Pick Basic kit with preinstalled software on: Factory refurbished Panasonic Toughbook CF-54"
               }
               spec={'i5 Processor / 8 GB RAM / 250 SSD'}
               buttonTitle={"Add to cart"}
               buttonLink={""}
               buttonLinkAs={""}
             />
           </div>
           <div className={classes.first}>
             <img src="../../../../static/images/products/2.png" />
           </div>
         </div>

         <div className={classes.firstsecond}>
           
           <div className={classes.second}>
             <ProductSliderData
               title={"full package"}
               type={"New Dell Latitude"}
               price={"$4,795,00"}
               description={
                 "Lock Pick Basic kit with preinstalled software on: Brand-New Dell Latitude E5400 Series"
               }
               spec={'i5 Processor / 8 GB RAM / 250 SSD'}
               buttonTitle={"Add to cart"}
               buttonLink={""}
               buttonLinkAs={""}
             />
           </div>
           <div className={classes.first}>
             <img src="../../../../static/images/products/3.png" />
           </div>
         </div>

         <div className={classes.firstsecond}>
           
           <div className={classes.second}>
             <ProductSliderData
               title={"full package"}
               type={"New Panasonic Toughbook"}
               price={"$5,495,00"}
               description={
                 "Lock Pick Basic kit with preinstalled software on: Brand-New Panasonic Toughbook FZ-55"
               }
               spec={'i5 Processor / 8 GB RAM / 250 SSD'}
               buttonTitle={"Add to cart"}
               buttonLink={""}
               buttonLinkAs={""}
             />
           </div>
           <div className={classes.first}>
             <img src="../../../../static/images/products/4.png" />
           </div>
         </div>
         
        </Slider>
      </div>
    </div>
  )
}

export default SecondProductSlider
