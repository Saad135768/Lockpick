import Head from 'next/head'
import SuccessPayment from '../../modules/SuccessPayment'
import FailedPayment from '../../modules/FailedPayment'
import Orders from '../../modules/orders'
import { GET_ORDER } from '../../modules/Checkout/data'

const Order = () => <>
    <Head>
        <title> Lockpick | Order  </title>
    </Head>
<Orders />
</>


export default Order