import React from "react"
import useStyles from "./style"
import Link from "next/link"
import useStore from "../../../../store"
import { MdKeyboardArrowRight } from "react-icons/md"
import CartData from "../../../Cart/components/CartData"
import Router from 'next/router'
import Button from './../../../../common/SecondaryButton/index';
import Loader from 'react-loader-spinner'

const CheckoutSummary = ({ setPromocode, loading, GetPromocode, ...props }) => {
  const total = useStore((state) => state.total)
  const cart = useStore((state) => state.cart)
  const cartLength = cart?.variations?.length || 0

  const classes = useStyles()

  return (
    <div className={classes.OrderSummaryHolder}>
      <div className={classes.ContinueShopping}>
        <h4>
          <Link href="/products">
            <a>Continue Shopping</a>
          </Link>
          <MdKeyboardArrowRight />
        </h4>
      </div>

      <div className={classes.OrderSummaryContent}>
        <div className={`${classes.OrderSummaryFlex} EditCart`}>
          <div>
            <h3> Order Summary ({cartLength})</h3>
          </div>
          <div>
            <h4 onClick={() => Router.push('/cart')}>Edit Cart</h4>
          </div>
        </div>
         <CartData />
      
        <div className={classes.promocode}>
          <div>
            <input placeholder="Enter a promo code" onChange={(e) => setPromocode(e.target.value)} />
            <button onClick={() => GetPromocode()}>{ loading ? 
            <Loader
            type="Oval"
            color="#fff"
            height={30}
            width={30}
          />
            : 'Apply promo code'}</button>
          </div>
        </div>

        <div className={classes.OrderSummaryFlex}>
          <div>
            <h3> Subtotal</h3>
          </div>
          <div>
            <p>${total?.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</p>
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
            <p> $0.00</p>
          </div>
        </div>
        <div className={classes.OrderSummaryFlex}>
          <div className={classes.totalText}>
            <h3> Total</h3>
          </div>
          <div>
            <p className={classes.totalPrice}>
              ${total?.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} 
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutSummary
