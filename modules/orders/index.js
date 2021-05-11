import React from 'react'
import { useRouter } from 'next/router'
import FailedPayment from './components/FailedPayment'
import SuccessPayment from './components/SuccessPayment'

const Order = () => {
    const query = useRouter().query
    const { status } = query
    return (
        <>
         {status === 'failed' ? 
         <FailedPayment /> : 
         <SuccessPayment /> 
         }
        </>
    )
}

export default Order