import React, { useEffect } from 'react'
import { GET_PAYPAL_TOKEN, PAYPAL } from '../../data'
import { useMutation } from '@apollo/react-hooks'
import Router from 'next/router'

const PayPal = ({ orderId, ...props }) => {
    const [getPayPalToken] = useMutation(GET_PAYPAL_TOKEN)
    const [payPal] = useMutation(PAYPAL)

    const GetPayPalToken = async () => {
        try{
           await getPayPalToken({ variables: { orderId, redirectUrl: `${window.origin}/order`, redirectUrlCancel: window.origin } })
        
        }catch(error){
            console.log('error getPayPalToken ',error)
        }
    }
    const PayWithPayPal = async (token) => {
        try{
           const res = await payPal({ variables: { token } })
           console.log({ res })
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
              console.log('data on Approve', data)
              console.log('actions', actions)
              await PayWithPayPal(orderID)
              Router.push({ pathname: '/orders', query: { status: 'success' } })
            },
            onCancel: function(data, actions) {
                console.log('user cancelled-' , data)
                Router.push({ pathname: '/orders', query: { status: 'failed' } })

          },
          onError: function(data, actions) {
              console.log('error occured-s', data)
          }
      }).render('#paypal-button-container')
    
      }, [orderId])

    return ( <div id="paypal-button-container"></div> )
}

export default PayPal
