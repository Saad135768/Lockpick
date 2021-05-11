import React, { useEffect, useState } from 'react'
import { GET_PAYPAL_TOKEN, PAYPAL } from '../../data'
import { useMutation } from '@apollo/react-hooks'
import { useRouter } from 'next/router'

const PayPal = ({ orderId, ...props }) => {
    const query = useRouter().query
    // const { orderId } = query
    const [isPayPalRendered, setIsPayPalRendered] = useState()
    const [token, setToken] = useState()
    const [getPayPalToken] = useMutation(GET_PAYPAL_TOKEN)
    const [payPal] = useMutation(PAYPAL)
    console.log('paypal rendered')
    const GetPayPalToken = async () => {
        try{
           const res = await getPayPalToken({ variables: { orderId, redirectUrl: 'http://localhost:3000/order', redirectUrlCancel: 'http://localhost:3000' } })
           const paypalToken = res.data.GetPayPalToken.token
           setToken(paypalToken)
           return paypalToken
        }catch(error){
            console.log('error getPayPalToken',error)
        }
    }

    const PayPal = async () => {
        try{
           const res = await payPal({ variables: { token } })
           console.log({ res })
        }catch(error){
            console.log('paypal error ', error)
        }
    }

    useEffect(() => {
        setIsPayPalRendered(true)
        
        if (isPayPalRendered) {
            console.log('innnn')
        paypal.Buttons({
          createOrder: async function() {
              return await GetPayPalToken()
          },
          onApprove: function(data) {
              console.log('data on Approve', data)
                PayPal()
            },
          onCancel: function(data, actions) {
              console.log('user cancelled-', data)
          },
          onError: function(data, actions) {
              console.log('error occured-s', data)
          }
      }).render('#paypal-button-container')
    }
      }, [isPayPalRendered])

    //   useEffect(() => {
    //       console.log('seconde useEffect')
    //     setIsPayPalRendered(true)
    //   }, [])
    return (
         isPayPalRendered ?  <div id="paypal-button-container"></div> : <div></div>
        )
}

export default PayPal
