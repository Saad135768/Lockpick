import React from 'react'
import useStyles from "./style"
import Button from "../../../../common/Button"
import useStore from '../../../../store'
import Router from 'next/router'
import { pathOr } from 'ramda'


const OrderSummary = (props) => {
  const total = useStore((state) => state.total) || 0
  const shippingRate = useStore((state) => state.shippingRate) || 0
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
            <h4>${(total)?.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</h4>
          </div>
        </div>
        <div className={classes.OrderSummaryFlex}>
          <div>
            <h3> Shipping</h3>
          </div>
          <div>
            <p> ${shippingRate?.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</p>
          </div>
        </div>
        {/* <div className={classes.OrderSummaryInformation}>
          <p> USA ( destination information )</p>
        </div> */}
        <div className={classes.OrderSummaryFlex}>
          <div>
            <h3> Sales Tax</h3>
          </div>
          <div>
            <p> $0.00</p>
          </div>
        </div>
      </div>
      <hr />
      <div className={classes.OrderSummaryFlex}>
        <div>
          <h3>Total</h3>
        </div>
        <div>
          <p className={classes.total}>${(+total + +shippingRate)?.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} </p>
        </div>
      </div>
        <a>
          <Button onClick={() => { 
            if(pathOr(false, ['variations', 'length',], cart)) Router.push('/checkout')
          }} disabled={!(pathOr(false, ['variations', '0',], cart))}> CheckOut</Button>
        </a>
      <img src="https://image.devteam9260.workers.dev/?width1000&image=https://m2k-static.s3-eu-west-1.amazonaws.com/lock-pick/payment.jpeg" alt='image of payments methods' />
    </div>
  )
}

export default OrderSummary
