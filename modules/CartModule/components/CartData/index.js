import React, { useEffect, Fragment } from 'react'
import useStyles from './style'
import { IoIosClose } from 'react-icons/io'
import NumericInput from 'react-numeric-input'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { GET_CART, UPDATE_CART_ITEM } from './../../../../commonData'
import { pathOr } from 'ramda'
import { withSnackbar } from 'notistack'
import Button from '../../../../common/SecondaryButton'
import Router, { useRouter } from 'next/router'
import useStore from '../../../../store'

const CartData = (props) => {
  const { pathname } = useRouter()

  const [updateCartItem] = useMutation(UPDATE_CART_ITEM)
  const { data } = useQuery(GET_CART, { fetchPolicy: 'no-cache' })

  const total = useStore((state) => state.total)
  const setTotal = useStore((state) => state.setTotal)

  const cart = useStore((state) => state.cart)
  const setCart = useStore((state) => state.setCart)

  useEffect(() => {
    if (data) setCart(pathOr([], ['getCurrentCustomer', 'cart'], data))
  }, [data])


  useEffect(() => {
    const finalPrice = cart?.variations?.reduce((a, b) => {
      const discountedPrice = pathOr(1, ['variation', 'price', 'discountedPrice'], b)
      const mainPrice = pathOr(1, ['variation', 'price', 'mainPrice'], b)
      const quantity = pathOr(1, ['quantity'], b)
      const totals = a + ((discountedPrice || mainPrice) * quantity)
      return totals
    }, 0)
    setTotal(finalPrice)

  }, [cart])

  const cartLength = !!(cart?.variations?.length)

  // Add to cart mutation
  const AddToCart = async (variation, quantity, message) => {
    try {
      const res = await updateCartItem({ variables: { variation: { variation, quantity } } })
      props.enqueueSnackbar(message, { variant: 'success' })
      setCart(res.data.updateCartItem)
    }
    catch (error) {
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
        {cartLength && pathOr([], ['variations'], cart).map((variation) => {
          const name = pathOr('', ['variation', 'product', 'name', 'en'], variation)
          const quantity = pathOr(1, ['quantity'], variation)
          const stock = pathOr(1, ['variation', 'stock', '0', 'amount'], variation)
          const variationsId = pathOr('', ['variation', '_id'], variation)
          const productsId = pathOr('', ['variation', 'product', '_id'], variation)
          const discountedPrice = pathOr(0, ['variation', 'price', 'discountedPrice'], variation)
          const mainPrice = pathOr(0, ['variation', 'price', 'mainPrice'], variation)
          const img = pathOr('', ['variation', 'product', 'images', '0'], variation)
          return (
            <Fragment key={variationsId}>
              <tr key={variationsId}>
                <td className={`${classes.imageTable} imageTable`}>
                  <img src={img} onClick={() => Router.push(`/product/${productsId}`)} />
                </td>
                <td className={`${classes.ItemName} ItemName`}>
                  <div>
                    <p className={`${classes.ItemLink} ItemLink`} onClick={() => Router.push(`/product/${productsId}`)}>    {name} </p>
                    <p className={`${classes.ForCheckoutQuantity} ForCheckoutQuantity`}> Quantity :{quantity}</p>
                    <p className={`${classes.ForCheckoutMoreDetails} ForCheckoutMoreDetails`} onClick={() => Router.push(`/product/${productsId}`)}> + More Details :</p>

                  </div>
                  <div>
                    <p className={`${classes.ItemPrice} ItemPrice`}>$ {(discountedPrice || mainPrice)?.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</p>
                  </div>
                  <div
                    className={`${classes.NumericInput} NumericInput`}>
                    <NumericInput mobile max={stock} defaultValue={quantity} min={1} onChange={(e) => {
                      AddToCart(variationsId, e, 'Product has been added')
                    }} />
                  </div>
                </td>
                <td className={`${classes.TotalPrice} TotalPrice`}>$ {((discountedPrice || mainPrice) * quantity)?.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} </td>
                <td className={`${classes.RemoveItem} RemoveItem`}>
                  <IoIosClose onClick={() => AddToCart(variationsId, 0, 'Product has been removed')} />
                </td>
              </tr>

            </Fragment>
          )
        })} {(!cartLength && pathname !== '/checkout') && <>
          <tr className={classes.NoBorder}>
            <td colSpan={5}>
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
        {(cartLength && pathname !== '/cart') && <>
          <tr className={`${classes.CartSub} CartSub`}>
            <td colSpan={3} className={`${classes.td_total} td_total`}>
              <p>Subtotal</p>
              <p>$ {total?.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</p>
            </td>
          </tr>
          <tr className={`${classes.CartInputs} CartInputs`}>
            <td colSpan={3} className={classes.ViewCart}>
              <button onClick={() => Router.push('/cart')}> View cart </button>
            </td>
          </tr>
        </>
        }
      </table>
    </div>
  )
}

export default withSnackbar(CartData)
