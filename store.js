import React, { useState, useEffect } from 'react'
import create from 'zustand'
import { useQuery } from '@apollo/react-hooks'
import { GET_CART } from './commonData'
import { withSnackbar } from 'notistack'

const Context = (props) => {

    //   const [cart, setCart] = useState([])
    const [updateCartItem] = useMutation(UPDATE_CART_ITEM)
    const { data } = useQuery(GET_CART, { fetchPolicy: 'no-cache' })

    //   useEffect(() => {
    //     if (data) setCart(pathOr([], ['getCurrentCustomer', 'cart'], data))
    //   }, [data])

    const cartLength = !!(cart?.variations?.length)

    const useStore = create(set => ({
        cart: [],
        setCart: (cart) => set((state) => ({ ...state, cart })),
        cartLength,
        AddToCart: async (variation, quantity, message) => {
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
        },
    }))
    return useStore
}
export default withSnackbar(Context)