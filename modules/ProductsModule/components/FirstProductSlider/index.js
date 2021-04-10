import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import useStyles from './style'
import Slider from 'react-slick'
import ProductSliderData from '../ProductSliderData'
import { useQuery } from '@apollo/react-hooks'
import { GET_PRODUCTS, GET_TAXONOMIES } from '../../data'
import { pathOr } from 'ramda'
import Router, { useRouter } from 'next/router'

const FirstProductSlider = () => {
  const [images, setImages] = useState([])
  const [taxonomyId, setTaxonomyId] = useState()

  const parsed = useRouter().query
  const { data: Taxonomy } = useQuery(GET_TAXONOMIES)
  const { data } = useQuery(GET_PRODUCTS, { variables: { 
    // searchTerm: parsed?.searchTerm,
    // ID for taxonomy called "Basic kit"
    taxonomies: taxonomyId
   } })

  const imgs = []
  const id = []
useEffect(() => {
  setImages(imgs)
}, [data])

useEffect(() => {
  const taxonomy = pathOr([], ['getTaxonomies', 'items'], Taxonomy)
    .find((taxonomy) => taxonomy.name.en === 'Basic kit')
   if (taxonomy) setTaxonomyId(taxonomy._id)
}, [Taxonomy])

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
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div className={classes.ProductSliderHolder}>
      <div className={classes.ProductSliderBg}>
        <Grid container>
          <Grid lg={6} sm={6} xs={12}>
            <Slider {...settings}>
              {images.map((img) => (
                 <div key={img} onClick={() => Router.push(`/product/${id[0]}`)}>
                 <img src={img} />
               </div>
              ))}
            </Slider>
          </Grid>
          <Grid lg={6} sm={6} xs={12}>
            <div className={classes.ProductSliderDataHolder}>
              {pathOr([], ['getProducts', 'items'], data).map((product) => {
                const name = pathOr('', ['variations', '0', 'product', 'name', 'en'], product)
                const discountedPrice = pathOr(0, ['variations', '0', 'price', 'discountedPrice'], product)
                const mainPrice = pathOr(0, ['variations', '0', 'price', 'mainPrice'], product)
                const description = pathOr(0, ['variations', '0', 'product', 'description', 'en'], product)
                const quantity = pathOr(1, ['variations', '0', 'stock', '0', 'amount'], product)
                const variationsId = pathOr('', ['variations', '0', '_id'], product)
                pathOr([], ['variations', '0', 'product', 'images'], product).map((img) => imgs.push(img))
                id.push(product._id)
                return( 
              <React.Fragment key={product._id}>
                <ProductSliderData
                  title={name}
                  type={'Starter kit'}
                  price={(discountedPrice || mainPrice)?.toFixed(2)}
                  include={'Includes:'}
                  description={description}
                  buttonTitle={'Add to cart'}
                  buttonLink={`/product/${product._id}`}
                  buttonLinkAs={`/product/${product._id}`}
                  quantity={quantity}
                  variationsId={variationsId}
                />
              </React.Fragment>)})}
             
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default FirstProductSlider
