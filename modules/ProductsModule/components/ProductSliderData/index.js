/* eslint-disable no-nested-ternary */
import React, { useState } from 'react'
import Router from 'next/router'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import useStyles from './style'
import Button from '../../../../common/Button'
import ReactHtmlParser from 'react-html-parser'
import NumericInput from 'react-numeric-input'

const ProductSliderData = ({
  title,
  type,
  price,
  description,
  buttonTitle,
  buttonLink,
  buttonLinkAs,
  include,
  softwareon,
  spec,
  quantity,
}) => {
  const [productsQuantity, setProductsQuantity] = useState(1)
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
            {buttonTitle
              && (buttonLinkAs ? (
                  <Button onClick={() => Router.push(buttonLinkAs) }>
                    {buttonTitle}
                  </Button>
              ) : buttonLink ? (
                    <Button onClick={() => Router.push(buttonLink) }>
                      {buttonTitle}
                    </Button>
              ) : (
                <Button>
                  {buttonTitle}
                </Button>
              ))}
          </div>
    </div>
  )
}

export default ProductSliderData
