import React, { useState, useEffect } from 'react'
import useStyles from "./style"
import { IoIosClose } from "react-icons/io"
import NumericInput from "react-numeric-input"
import { useQuery, useMutation } from '@apollo/react-hooks'
import { GET_CART, UPDATE_CART_ITEM } from './../../../../commonData'
import { pathOr } from 'ramda'
import { withSnackbar } from 'notistack'
import Router from 'next/router'
import Button from './../../../../common/SecondaryButton/index';

  const CartData = (props) => {
    const [cart, setCart] = useState([])
    const [productsQuantity, setProductsQuantity] = useState(1)
    const [updateCartItem] = useMutation(UPDATE_CART_ITEM)
    const { data } = useQuery(GET_CART, { fetchPolicy: 'no-cache' })
    useEffect(() => {
      if(data) setCart(pathOr([], ['getCurrentCustomer', 'cart'], data))
      }, [data])

     // Add to cart mutation
  const AddToCart = async (variation, quantity, message) => {
    try {
      const res = await updateCartItem({ variables: { variation: { variation, quantity }} })
       props.enqueueSnackbar(message, { variant: 'success' })
       setCart(res.data.updateCartItem)
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
                <div className={classes.CartTable}>
                  <table>
                    {cart?.variations?.length ? pathOr([], ['variations'], cart).map((variation) => {
                     const name = pathOr('', ['variation', 'product', 'name', 'en'], variation)
                     const quantity = pathOr(1, ['quantity'], variation)
                     const stock = pathOr(1, ['variation', 'stock', '0', 'amount'], variation)
                     const variationsId = pathOr('', ['variation', '_id'], variation)
                     const productsId = pathOr('', ['variation', 'product', '_id'], variation)
                     const discountedPrice = pathOr(0, ['variation', 'price', 'discountedPrice'], variation)
                     const mainPrice = pathOr(0, ['variation', 'price', 'mainPrice'], variation)
                     const img = pathOr('', ['variation', 'product', 'images', '0'], variation)
                     return(
                  <tr key={variationsId}>
                      <td>
                        <img src={img} onClick={() => Router.push(`/product/${productsId}`)} />
                      </td>
                      <td>
                        {name} <br /> <p>$ {(discountedPrice || mainPrice)?.toFixed(2)}</p>
                        <div className={classes.NumericInput}>
                          <NumericInput mobile max={stock} defaultValue={quantity} min={1} onChange={(e) => { 
                            AddToCart(variationsId, e, 'Product has been added')
                            setProductsQuantity(e)
                          }}/>
                        </div>
                      </td>
                      <td  className={`${classes.TotalPrice} TotalPrice`}>$ {((discountedPrice || mainPrice) * quantity)?.toFixed(2)} </td>
                      <td>
                        <IoIosClose  onClick={() => AddToCart(variationsId, 0, 'Product has been removed')}/>
                      </td>
                    </tr>
                    )}) : <>
                    <tr className={classes.NoBorder}>
                    <td  colSpan={5}>
                    <p>No Products found</p>
                   
                    </td>
                    
                  </tr>
                  <tr>
                     <td colSpan={5}>

                     <Button
                      onClick={() => Router.push({ pathname: '/products' })}
                    >
                      Go to Products
                    </Button>
                    </td>
                    </tr>
                    </>
                  }
                   
                  </table>
                </div>
  )
}

export default withSnackbar(CartData)
