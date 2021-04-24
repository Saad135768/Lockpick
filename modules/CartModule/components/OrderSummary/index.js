import React from 'react'
import useStyles from "./style"
import Button from "../../../../common/Button"
import useStore from '../../../../store'
import Router from 'next/router'
import { pathOr } from 'ramda'


const OrderSummary = (props) => {
  const total = useStore((state) => state.total)

  const cart = useStore((state) => state.cart)
  const classes = useStyles()

  return (
    <div className={classes.OrderSummaryHolder}>
      <h2> Order Summary</h2>
      <hr />
      <div className={classes.OrderSummaryContent}>
        <div className={classes.OrderSummaryFlex}>
          <div>
            <h3> Subtotal</h3>
          </div>
          <div>
            <h4> {total?.toFixed(2)} $</h4>
          </div>
        </div>
        <div className={classes.OrderSummaryFlex}>
          <div>
            <h3> Shipping</h3>
          </div>
          <div>
            <p> FREE</p>
          </div>
        </div>
        <div className={classes.OrderSummaryInformation}>
          <p> USA ( destination information )</p>
        </div>
        <div className={classes.OrderSummaryFlex}>
          <div>
            <h3> Sales Tax</h3>
          </div>
          <div>
            <p> 0.00$</p>
          </div>
        </div>
      </div>
      <hr />
      <div className={classes.OrderSummaryFlex}>
        <div>
          <h3>Total</h3>
        </div>
        <div>
          <p className={classes.total}> {total?.toFixed(2)} $ </p>
        </div>
      </div>
        <a>
          <Button onClick={() => { 
            if(pathOr(false, ['variations', 'length',], cart)) Router.push('/checkout')
          }} disabled={!(pathOr(false, ['variations', '0',], cart))}> CheckOut</Button>
        </a>
      <img src="../../../../static/images/cart/payment.jpeg" />
    </div>
  )
}

export default OrderSummary
