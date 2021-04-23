import React, { useState } from 'react'
import Container from "@material-ui/core/Container"
import CartData from "./components/CartData"
import useStyles from "./style"
import Grid from "@material-ui/core/Grid"
import OrderSummary from "./components/OrderSummary"
import { AiOutlineTag } from "react-icons/ai"
import { GrNotes } from "react-icons/gr"
import Link from "next/link"
import { MdKeyboardArrowRight } from "react-icons/md"
import useStore from '../../store'

const CartModule = () => {
  const classes = useStyles()
  const state = useStore()
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
                <CartData />
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
                <OrderSummary />
              </Grid>
             
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default CartModule
