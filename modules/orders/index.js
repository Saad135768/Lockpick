import React from 'react'
import { useRouter } from 'next/router'
import SuccessPayment from '../../modules/SuccessPayment'
import FailedPayment from '../../modules/FailedPayment'

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