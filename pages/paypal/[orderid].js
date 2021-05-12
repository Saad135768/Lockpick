import CreditCard from '../../modules/Checkout/components/CreditCard'
import Head from 'next/head'
import { GET_ORDER } from './../../modules/Auth/data'

const Paypal = (props) => <>
    
    <Head>
        <title> Credit Card </title>
    </Head>
    <CreditCard {...props} />
</>

Paypal.getInitialProps = async (ctx) => {
    try{
    const variables = ctx.query.orderid ? { _id: ctx.query.orderid } : {}
    const Order = await ctx.apolloClient.query({
      query: GET_ORDER,
      variables,
      fetchPolicy:'no-cache'
    })
    return {
      orderId: ctx.query.orderid,
      order: Order.data,
      ordertError: Order.errors,
    }
    }
    catch(error) {
      console.log('error', error)
    }
    
    }
export default Paypal
