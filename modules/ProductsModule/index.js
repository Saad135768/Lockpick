import Container from "@material-ui/core/Container"
import useStyles from "./style"
import Link from "next/link"
import FirstProductSlider from "../ProductsModule/components/FirstProductSlider"
import { Parallax } from 'react-scroll-parallax'
import ScrollAnimation from 'react-animate-on-scroll'

const ProductsModule = () => {
  const classes = useStyles()

  return (
    <div className={classes.ProductsHolder}>
      <Container>

       <div className={classes.FormHolder}>


       <ScrollAnimation animateIn="fadeIn">
       <h2> BASIC KIT<span> – </span> FULL PACKAGE <br/>
ADD-ON <span> – </span> OPTIONS </h2>
         </ScrollAnimation>

                <div className={classes.ProductsMainImge}>
        <img src="../../static/images/products/header.png" />
        </div>
        <p>
        You can purchase the Lock Pick package (main device, accessories & boards, and software) and install on your own laptop. You can also buy it as a complete package with one of the professional laptops we offer. Lock Pick can also be purchased as an add on to our BMW Wizard.
        </p>
      
        </div>
        <FirstProductSlider/>
      </Container>

    </div>
  )
}

export default ProductsModule
