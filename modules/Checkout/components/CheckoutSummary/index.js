import React, { useState, useEffect } from 'react'
import useStyles from './style'
import Link from 'next/link'
import useStore from '../../../../store'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { AiOutlineCheck } from 'react-icons/ai'
import CartData from '../../../Cart/components/CartData'
import Router from 'next/router'
import { useMutation } from '@apollo/react-hooks'
import { withSnackbar } from 'notistack'
import { pathOr } from 'ramda'
import { APPLY_PROMOCODE } from '../../../../commonData'

const CheckoutSummary = ({ setPromocode, promoCode, ...props }) => {
  const total = useStore((state) => state.total)
  const setTotal = useStore((state) => state.setTotal)
  const shippingRate = useStore((state) => state.shippingRate)
  const cart = useStore((state) => state.cart)
  const cartLength = cart?.variations?.length || 0

  const [originalPrice, setOriginalPrice] = useState()
  const [isPromoApplied, setIsPromoApplied] = useState()
  const [applyPromoCode] = useMutation(APPLY_PROMOCODE)

  useEffect(() => {
    !isPromoApplied && setOriginalPrice(total)
  }, [total])

  const ApplyPromocode = async () => {
    try{
      if(!isPromoApplied) {
      const res = await applyPromoCode({ variables: { total, code: promoCode } })
      const discount = +pathOr(0, ['data', 'applyPromoCode', 'discount'], res)
      setIsPromoApplied(true)
      setTotal(total - discount)
      props.enqueueSnackbar('Promo code applied successfully', { variant: 'success' })
      } 
      return null
    }
    catch(error) {
      if (error?.graphQLErrors) {
        props.enqueueSnackbar(error.graphQLErrors[0].message, {
          variant: 'error',
        })
      } else props.enqueueSnackbar('something went wrong', { variant: 'error' })
    }
    }

 
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
            <input placeholder='Enter a promo code' disabled={isPromoApplied} onChange={(e) => setPromocode(e.target.value)} />
            <div onClick={ApplyPromocode}>
              {isPromoApplied ? <button className={classes.promoAdd}> <AiOutlineCheck/> Promo Added</button> : <button> Apply promo code</button>}
            </div>
        </div>

        <div className={classes.OrderSummaryFlex}>
          <div>
            <h3> Subtotal</h3>
          </div>
          <div>
            {isPromoApplied && 
            <p className={classes.originalPrice}>${(+originalPrice + +shippingRate)?.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</p>
            }
            <p>${(+total)?.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</p>
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
          {isPromoApplied && 
            <p className={classes.originalPrice}>${(+originalPrice + +shippingRate)?.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</p>
            }
            <p>${(+total + +shippingRate)?.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withSnackbar(CheckoutSummary)
