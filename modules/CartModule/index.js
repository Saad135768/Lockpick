import React, { useState, useEffect } from 'react'
import Container from "@material-ui/core/Container"
import CartData from "./components/CartData"
import useStyles from "./style"
import Grid from "@material-ui/core/Grid"
import OrderSummary from "./components/OrderSummary"
import { AiOutlineTag } from "react-icons/ai"
import { GrNotes } from "react-icons/gr"
import Link from "next/link"
import { MdKeyboardArrowRight } from "react-icons/md"
import { useQuery } from '@apollo/react-hooks'
import { GET_CART } from './../../commonData'
import { pathOr } from 'ramda'

const CartModule = () => {
  const { data } = useQuery(GET_CART, { fetchPolicy: 'no-cache' })
  const classes = useStyles()
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState()
  
  useEffect(() => {
    if (data) setCart(pathOr([], ['getCurrentCustomer', 'cart'], data))
  }, [data])


  useEffect(() => {
    cart?.variations?.reduce((a,b) => {
      const discountedPrice = pathOr(1, ['variation', 'price', 'discountedPrice'], b)
      const mainPrice = pathOr(1, ['variation', 'price', 'mainPrice'], b)
      const quantity = pathOr(1, ['quantity'], b)
      const total =  a + ((discountedPrice || mainPrice) * quantity )
      setTotal(total)
      return total
    }, 0)
  }, [cart])

  return (
    <div className={classes.CartHolder}>
      <Container>
        <Grid container justify="center">
          <Grid item lg={11} md={11} sm={12} xs={12}>
            <Grid container spacing={8}>
              <Grid item lg={8} md={8} sm={12} xs={12}>
              <div className={`${classes.CartTableTitle} CartTableTitle`}>
                    <div>
                      <h2>My Cart </h2>
                    </div>
                    <div>
                      <h4>
                        <Link href='/products'>
                          <a>Continue Shopping</a>
                        </Link>
                        <MdKeyboardArrowRight />
                      </h4>
                    </div>
                  </div>
                  <hr />
                <CartData total={total} />
                <div className={classes.CartInputs}>
               <div className={classes.promocode}>
                 <div>
                <AiOutlineTag/>
                 </div>
                 <div>
                <input placeholder="Enter a promo code"/> 
                 </div>
                 </div>
                 <div className={`${classes.promocode} note`}>
                 <div>
                <GrNotes/>
                 </div>
                 <div>
                <input placeholder="Add a note"/> 
                 </div>
                 </div>
               </div>
              </Grid>
              <Grid item lg={4} md={4} sm={12} xs={12}>
                <OrderSummary data={data} total={total} />
              </Grid>
             
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default CartModule
