import React, { useState } from 'react'
import { Grid, Container, Breadcrumbs } from '@material-ui/core'
import useStyles from './style'
import ImageGallery from 'react-image-gallery'
import { MdKeyboardArrowRight } from 'react-icons/md'
import 'react-image-gallery/styles/css/image-gallery.css'
import ReactHtmlParser from 'react-html-parser'
import NumericInput from 'react-numeric-input'
import Button from '../../common/Button'
import QuickCart from '../../modules/Cart/components/QuickCart/'
import Link from 'next/link'
import { pathOr } from 'ramda'
import { UPDATE_CART_ITEM } from '../../commonData'
import { withSnackbar } from 'notistack'
import { useMutation } from '@apollo/react-hooks'
import useStore from '../../store'
import Router from 'next/router'
import Head from 'next/head'

const SingleProduct = (props) => {
  const [productsQuantity, setProductsQuantity] = useState(1)
  const [updateCartItem] = useMutation(UPDATE_CART_ITEM)

  // Products values
  const name = pathOr('No name found', ['product', 'product', 'name', 'en'] ,props)

  let taxonomyName = pathOr('', ['product', 'product', 'taxonomies', '0', 'name', 'en'], props)

  const productCode = pathOr('No name found', ['product', 'product', 'productCode'], props)

  const description = pathOr('No description', ['product', 'product', 'description', 'en'], props)

  const quantity = pathOr(1, ['product', 'variations', '0', 'stock', '0', 'amount'], props)

  const mainPrice = pathOr(0, ['product', 'variations', '0', 'price', 'mainPrice'], props)

  const discountedPrice = pathOr(0, ['product', 'variations', '0', 'price', 'discountedPrice'], props)

  const variationsId = pathOr('', ['product', 'variations', '0', '_id'], props)

  const customAttributes = () => pathOr([], ['product', 'product', 'customAttributes'], props)

  const productOverviewTitle = customAttributes().find((i) => i.key.toLowerCase().includes('product overview'))?.key
  
  const productOverviewDescription = customAttributes().find((i) => i.key.toLowerCase().includes('product overview'))?.value
  
  const whyLockpickTitle = customAttributes().find((i) => i.key.toLowerCase().includes('why lockpick'))?.key

  const whyLockpickDescription = customAttributes().find((i) => i.key.toLowerCase().includes('why lockpick'))?.value
  
  const featuresTitle = customAttributes().find((i) => i.key.toLowerCase().includes('features'))?.key

  const featuresDescription = customAttributes().find((i) => i.key.toLowerCase().includes('features'))?.value

  const imgs = []

  pathOr([], ['product', 'product', 'images'], props).forEach((img) =>
    imgs.push({ original: img, thumbnail: img })
  )

  if (taxonomyName.includes('bmw')) taxonomyName = 'options'

  const setCart = useStore((state) => state.setCart)

  // Add to cart mutation
  const AddToCart = async (variation, quantity) => {
    try {
      const res = await updateCartItem({
        variables: { variation: { variation, quantity } },
      })
      props.enqueueSnackbar('Product has been added to cart successfully', {
        variant: 'success',
      })
      setCart(res.data.updateCartItem)
    } catch (error) {
      if (error.graphQLErrors) {
        props.enqueueSnackbar(error.graphQLErrors[0].message, {
          variant: 'error',
        })
      } else
        props.enqueueSnackbar('something went wrong', { variant: 'error' })
    }
  }
  
  const classes = useStyles()
  return (
    <>
    <Head>
      <title> Product | {name} </title>
    </Head>

    
    <div className={classes.AboutHolder}>
      
      <Container>
        <Grid container justify='center'>
          <Grid item md={10} xs={12}>
            <Grid container spacing={8}>
              <div className={classes.SingleProductHead}>
                <div>
                  <h2>
                    <Breadcrumbs aria-label='breadcrumb'>
                      <Link href='/'>
                        <a>Home</a>
                      </Link>
                      <Link href='/products'>
                        <a>Products</a>
                      </Link>
                      <a>{taxonomyName?.toUpperCase()}</a>
                    </Breadcrumbs>
                  </h2>
                </div>
                <div>
                  <h4>
                    <Link href='/products'>
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
                  <p>{ReactHtmlParser(description)}</p>
                  <h3>
                    
                    $
                    {(discountedPrice || mainPrice)
                      .toFixed(2)
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                  </h3>
                  <h5> VAT (Included or Excluded)</h5>
                  <h5> Shipping Description</h5>
                  <h4> Quantity</h4>

                  <div className={classes.NumericInput}>
                    <NumericInput
                      mobile
                      min={1}
                      max={quantity}
                      value={productsQuantity}
                      onChange={(e) => setProductsQuantity(e)}
                    />
                  </div>
                  <div className={classes.SingleProductButtons}>
                    <QuickCart
                      AddToCartMutation={() =>
                        AddToCart(variationsId, productsQuantity)
                      }
                    />

                    <div className={classes.BuyNowBtn}>
                      <Button
                        onClick={async () => {
                          await AddToCart(variationsId, productsQuantity)
                          Router.push('/checkout')
                        }}
                      >

                        Buy Now
                      </Button>
                    </div>
                  </div>
                </div>
              </Grid>
              <div className={classes.SingleProductOverviewHolder}>
                <div className={classes.SingleProductOverview}>
                  <h3> {productOverviewTitle || 'Product overview'}</h3>

                  <hr />

                  <div>{productOverviewDescription ? ReactHtmlParser(productOverviewDescription) : ''}</div>
                </div>
                <div className={classes.SingleProductList}>
                  <div className={classes.SingleProductListContent}>
                    <h3> {whyLockpickTitle}</h3>

                 {whyLockpickDescription ? ReactHtmlParser(whyLockpickDescription) : 'No description found'}
                  </div>
                </div>

                <div className={classes.SingleProductList}>
                  <div className={classes.SingleProductListContent}>
                    <h3> {featuresTitle} </h3>
                    {featuresDescription ? ReactHtmlParser(featuresDescription) : 'No description found'}
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
    </>
  )
}

export default withSnackbar(SingleProduct)
