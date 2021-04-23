import React, { useState } from 'react'
import { Grid, Container, Breadcrumbs  } from '@material-ui/core'
import useStyles from './style'
import ImageGallery from 'react-image-gallery'
import { MdKeyboardArrowRight } from 'react-icons/md'
import 'react-image-gallery/styles/css/image-gallery.css'
import ReactHtmlParser from 'react-html-parser'
import NumericInput from 'react-numeric-input'
import Button from '../../common/Button'
import QuickCart from '../../modules/CartModule/components/QuickCart/'
import Link from 'next/link'
import { pathOr } from 'ramda'
import { UPDATE_CART_ITEM } from '../../commonData'
import { withSnackbar } from 'notistack'
import { useMutation } from '@apollo/react-hooks'
import useStore from '../../store'

const SingleProductModule = (props) => {
  const [productsQuantity, setProductsQuantity] = useState(1)
  const [updateCartItem] = useMutation(UPDATE_CART_ITEM)
 
  // Products values
  const name = pathOr('No name found', ['product', 'product','name', 'en'], props)
  const taxonomyName = pathOr('', ['product', 'product','taxonomies','0', 'name', 'en'], props)
  const productCode = pathOr('No name found', ['product', 'product','productCode'], props)
  const description = pathOr('No description', ['product', 'product','description', 'en'], props)
  const quantity = pathOr(1, ['product','variations', '0','stock', '0', 'amount'], props)
  const mainPrice = pathOr(0, ['product','variations', '0','price', 'mainPrice'], props)
  const discountedPrice = pathOr(0, ['product','variations', '0','price', 'discountedPrice'], props)
  const variationsId = pathOr('', ['product','variations', '0', '_id'], props)
  const imgs = []
  pathOr([], ['product', 'product','images'], props).forEach((img) => imgs.push({ original: img, thumbnail: img }))
console.log(`taxonomyName`, taxonomyName)
  const setCart = useStore((state) => state.setCart)
  // Add to cart mutation
  const AddToCart = async (variation, quantity) => {
    try {
      const res = await updateCartItem({ variables: { variation: { variation, quantity }} })
       props.enqueueSnackbar('Product has been added to cart successfully', { variant: 'success' })
       setCart(res.data.updateCartItem)
    }
    catch(error) {
      if (error.graphQLErrors) {
        props.enqueueSnackbar(error.graphQLErrors[0].message, {
          variant: 'error',
        })
      } else props.enqueueSnackbar('something went wrong', { variant: 'error' })
    }
  }

  const classes = useStyles()
  return (
    <div className={classes.AboutHolder}>
      <Container>
        <Grid container justify="center">
          <Grid item md={10} xs={12}>
            <Grid container spacing={8}>
              <div className={classes.SingleProductHead}>
                <div>
                  <h2>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Link href="/"><a>Home</a></Link>
                    <Link href="/products"><a>Products</a></Link>
                    <a>{taxonomyName?.toUpperCase()}</a>
                  </Breadcrumbs>
                  </h2>
                </div>
                <div>
                  <h4>
                    <Link href="/products">
                      <a>Continue Shopping</a>
                    </Link>
                    <MdKeyboardArrowRight />
                  </h4>
                </div>
              </div>
            </Grid>

            <Grid container spacing={8}>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <div className={classes.SingleProductSlider}>
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
                    items={imgs}
                  />
                </div>
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <div className={classes.SingleProductContent}>
                  <h1> {name} </h1>
                  <h6> SKU : {productCode}</h6>
                  <h2>Product Description </h2>
                  <p>
                  {ReactHtmlParser(description)}
                  </p>
                  <h3> $ {(discountedPrice || mainPrice).toFixed(2)}</h3>
                  <h5> VAT (Included or Excluded)</h5>
                  <h5> Shipping Description</h5>
                  <h4> Quantity</h4>

                  <div className={classes.NumericInput}>
                  <NumericInput mobile min={1} max={quantity} value={productsQuantity} onChange={(e) => setProductsQuantity(e)}/>
                  </div>
                  <div className={classes.SingleProductButtons}>
                   
                    <QuickCart func={() => AddToCart(variationsId, productsQuantity)} />

                    <div className={classes.BuyNowBtn}>
                          <Button> Buy Now</Button>
                    </div>
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

export default withSnackbar(SingleProductModule)
