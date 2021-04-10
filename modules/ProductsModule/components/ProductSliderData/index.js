/* eslint-disable no-nested-ternary */
import React, { useState } from 'react'
import useStyles from './style'
import Button from '../../../../common/Button'
import ReactHtmlParser from 'react-html-parser'
import NumericInput from 'react-numeric-input'
import { useMutation } from '@apollo/react-hooks'
import { UPDATE_CART_ITEM } from '../../../../commonData'
import { withSnackbar } from 'notistack'

const ProductSliderData = ({
  title,
  type,
  price,
  description,
  buttonTitle,
  include,
  softwareon,
  spec,
  quantity,
  variationsId,
  ...props
}) => {
  const [productsQuantity, setProductsQuantity] = useState(1)
  const [updateCartItem] = useMutation(UPDATE_CART_ITEM)
  const AddToCart = async (variation, quantity) => {
    try {
       await updateCartItem({ variables: { variation: { variation, quantity }} })
       props.enqueueSnackbar('Product has been added to cart successfully', { variant: 'success' })
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
    <div className={classes.ProductSliderDataHolder}>
          <div className={classes.SectionTitleHolder}>
            <h1> {title}</h1>
            <h4> {type} </h4>
            <h2> {`$ ${price}`} </h2>
            <h3> {include} </h3>
            <h6> {ReactHtmlParser(description)} </h6>
            <h5> {softwareon} </h5>
            <em> {spec} </em>

          </div>
          <div className={classes.NumericInput}>
          <NumericInput mobile min={1} max={quantity} value={productsQuantity} onChange={(e) => setProductsQuantity(e)}/>
          </div>

          <div className={`${classes.SectionButton} SectionButton`}>
            <Button onClick={() => AddToCart(variationsId, productsQuantity) }>
              {buttonTitle}
       </Button>
          </div>
    </div>
  )
}

export default withSnackbar(ProductSliderData)
