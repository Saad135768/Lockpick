import React, { useEffect, useState } from 'react'
import { GET_PAYPAL_TOKEN, PAYPAL } from '../../data'
import { useMutation } from '@apollo/react-hooks'
import Router from 'next/router'
import useStore from '../../../../store'

const PayPal = ({ orderId, _id, ...props }) => {
    const [isPaypalRendered, setIsPaypalRendered] = useState()
    const [getPayPalToken] = useMutation(GET_PAYPAL_TOKEN)
    const [payPal] = useMutation(PAYPAL)

    const setCart = useStore(state => state.setCart)

    const time = setTimeout(() => {
        setIsPaypalRendered(true)
    }, 1000)

    const GetPayPalToken = async () => {
        clearTimeout(time)
        try{
            const res = await getPayPalToken({ variables: { orderId, redirectUrl: `${window.origin}/order`, redirectUrlCancel: window.origin } })
            return res.data.GetPayPalToken.token
        }catch(error){
            console.log('error getPayPalToken ',error)
        }
    }
  
    const PayWithPayPal = async (token) => {
        try{
           const res = await payPal({ variables: { token } })
        }catch(error){
            console.log('paypal error ', error)
        }
    }

    useEffect(() => {
        paypal.Buttons({
          createOrder: async function() {
              return await GetPayPalToken()
          },
          onApprove: async function({ orderID, ...data  }, actions) {
              await PayWithPayPal(orderID)
              setCart([])
              Router.push({ pathname: '/order', query: { orderId, status: 'success', _id } })
            },
            onCancel: function(data, actions) {
                console.log('user cancelled-' , data)
                Router.push({ pathname: '/order', query: { status: 'failed', _id } })

          },
          onError: function(data, actions) {
              console.log('error occured-s', data)
          }
      }).render('#paypal-button-container')
    
      }, [isPaypalRendered])

    return ( <div id="paypal-button-container"></div> )
}

export default PayPal
