import React, { useState, useEffect } from 'react'
import useStyles from "./style"
import Link from "next/link"
import useStore from '../../../../store'
import { MdKeyboardArrowRight } from "react-icons/md"
import CartData from '../../../CartModule/components/CartData'


const OrderSummary = (props) => {
  const total = useStore((state) => state.total)
  const setTotal = useStore((state) => state.setTotal)

  const cart = useStore((state) => state.cart)
 useEffect(() => {
  setTotal(total)
  if (!cart?.variations?.length) setTotal(0)
 }, [cart, total])
  const classes = useStyles()

  return (
    <div className={classes.OrderSummaryHolder}>

      <div className={classes.ContinueShopping}>
                      <h4>
                        <Link href='/products'>
                          <a>Continue Shopping</a>
                        </Link>
                        <MdKeyboardArrowRight />
                      </h4>
                    </div>
      
      <div className={classes.OrderSummaryContent}>

      <div  className={`${classes.OrderSummaryFlex} EditCart`}>

          <div>
            <h3> Order Summary(1)</h3>
          </div>
          <div>
            <h4>Edit Cart</h4>
          </div>
        </div>
        <CartData/>
   
        <div className={classes.promocode}>
               
                 <div>
                <input placeholder="Enter a promo code"/> 
                 </div>
                 </div>
               

        <div className={classes.OrderSummaryFlex}>
          <div>
            <h3> Subtotal</h3>
          </div>
          <div>
            <p> {total?.toFixed(2)} $</p>
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
       
        <div className={classes.OrderSummaryFlex}>
          <div>
            <h3> Sales Tax</h3>
          </div>
          <div>
            <p> 0.00$</p>
          </div>
        </div>
        <div className={classes.OrderSummaryFlex}>
        <div>
          <h3>Total</h3>
        </div>
        <div>
          <p className={classes.total}> {total?.toFixed(2)} $ </p>
        </div>
      </div>
      </div>
  
    
    </div>
  )
}

export default OrderSummary
