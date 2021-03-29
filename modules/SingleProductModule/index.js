import Container from "@material-ui/core/Container"
import useStyles from "./style"
import Grid from "@material-ui/core/Grid"
import ImageGallery from 'react-image-gallery'
import { MdKeyboardArrowRight } from "react-icons/md"
import 'react-image-gallery/styles/css/image-gallery.css'
import NumericInput from "react-numeric-input"
import Button from "../../common/Button"
import Link from "next/link"
const SingleProductModule = () => {
  const classes = useStyles()
  const images = [
    {
      original: '../../static/images/products/product1.png',
      thumbnail: '../../static/images/products/product1.png',
    },
    {
      original: '../../static/images/products/product1.png',
      thumbnail: '../../static/images/products/product1.png',
    },
    {
      original: '../../static/images/products/product1.png',
      thumbnail: '../../static/images/products/product1.png',
    },
    {
      original: '../../static/images/products/product1.png',
      thumbnail: '../../static/images/products/product1.png',
    },
  ];
  return (
    <div className={classes.AboutHolder}>
      <Container>
      <Grid container justify="center">
          <Grid item lg={10} md={10} sm={12} xs={12}>
            <Grid container spacing={8}>
      <div className={classes.SingleProductHead}>
                    <div>
                      <h2>  
                      <a href="/">Home / </a>
                      <a href="/products">Products /</a>
                      <a href="/singleproduct">  LockPick  Basic Kit </a>
                    </h2>
                    </div>
                    <div>
                      <h4>
                        <Link as={"/products"} href="/products">
                          <a href="/products">Continue Shopping</a>
                        </Link>
                        <MdKeyboardArrowRight />
                      </h4>
                    </div>
                    </div>
</Grid>

<Grid container spacing={8}>

<Grid item lg={6} md={6} sm={12} xs={12}>

<ImageGallery
            isRTL={false}
            showFullscreenButton={true}
            showNav={false}
            slideDuration={800}
            autoPlay={true}
            infinite={false}
            showPlayButton={false}
            slideInterval={3000}
            thumbnailPosition={'left'}
            disableKeyDown={true}
            items={images} />
</Grid>
<Grid item lg={6} md={6} sm={12} xs={12}>
<div className={classes.SingleProductContent}>

<h1> LockPick Basic Kit </h1>
<h6> SKU : 001</h6>
<h2>Product Description </h2> 
<p>
Main device, <span> Basic Kit</span> accessories, interface boards, and full softwareMain 
device, accessories, interface boards, <span> Full Package</span>  and full softwareMain device, 
accessories, interface boards, <span> BMW WIZARD </span> and full software
</p>
<h3> $ 2.995.00</h3>
<h5> VAT (Included or Excluded)</h5> 
<h5> Shipping Description</h5> 
<h4> Quantity</h4>

<div className={classes.NumericInput}>
          <NumericInput mobile min={1} value={1} />
        </div>
        <div className={classes.AddToCartBtn}>

        <Link as={"#"} href="#">
        <a href="#">
          <Button> Add to cart</Button>
        </a>
      </Link>
      </div>
      <div className={classes.BuyNowBtn}>
      <Link as={"#"} href="#">
        <a href="#">
          <Button> Buy Now</Button>
        </a>
      </Link>
      </div>
      </div>
</Grid>
</Grid>
</Grid>
</Grid>

      </Container>

    </div>
  )
}

export default SingleProductModule
