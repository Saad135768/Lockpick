import React, { useState, useEffect } from 'react'
import useStyles from "./style"
import Button from "../../../../common/Button"
import Link from "next/link"
import useStore from '../../../../store'


const OrderSummary = (props) => {

  const total = useStore((state) => state.total)
 
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
      <Link as={"#"} href="#">
        <a href="#">
          <Button> CheckOut</Button>
        </a>
      </Link>
      <img src="../../../../static/images/cart/payment.jpeg" />
    </div>
  )
}

export default OrderSummary
