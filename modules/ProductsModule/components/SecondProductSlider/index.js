import React, { useState, useEffect } from 'react'
import Container from "@material-ui/core/Container"
import useStyles from "./style"
import Slider from "react-slick"
import { useQuery } from '@apollo/react-hooks'
import { GET_PRODUCTS, GET_TAXONOMIES } from '../../data'
import ProductSliderData from "../ProductSliderData"
import { pathOr } from 'ramda'
import Router, { useRouter } from 'next/router'

const SecondProductSlider = ({ taxonomyName, ...props }) => {
  const [taxonomyId, setTaxonomyId] = useState()
  const parsed = useRouter().query
  const { data: Taxonomy } = useQuery(GET_TAXONOMIES)
  const { data } = useQuery(GET_PRODUCTS, { variables: { 
    searchTerm: parsed?.searchTerm,
    // ID for taxonomy called "full package"
    taxonomies: taxonomyId
   } })
   useEffect(() => {
    const taxonomy = pathOr([], ['getTaxonomies', 'items'], Taxonomy)
    .find((taxonomy) => taxonomy.name.en === taxonomyName)
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
          const mainPrice = pathOr(0, ['variations', '0', 'price', 'mainPrice'], product)
          const description = pathOr(0, ['variations', '0', 'product', 'description', 'en'], product)
          const imgs = pathOr([], ['variations', '0', 'product', 'images'], product)
          const quantity = pathOr(1, ['variations', '0', 'stock', '0', 'amount'], product)
          const customAttributes = pathOr([], ['variations', '0', 'product', 'customAttributes', '0', 'value'], product)
          const variationsId = pathOr('', ['variations', '0', '_id'], product)
          return (
           <div className={classes.firstsecond} key={product._id}>
            <div className={classes.second}>
              <ProductSliderData
                title={name}
                type={"Full package"}
                price={(discountedPrice || mainPrice)?.toFixed(2)}
                description={description}
                spec={customAttributes}
                buttonTitle={"Add to cart"}
                quantity={quantity}
                variationsId={variationsId}
              />
            </div>
            <div className={classes.first} onClick={() => Router.push(`/product/${product._id}`)}>
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
