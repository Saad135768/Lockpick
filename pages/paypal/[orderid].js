import CreditCard from '../../modules/Checkout/components/CreditCard'
import Head from 'next/head'
import { GET_ORDER } from './../../modules/Auth/data'

const CreditCardPage = (props) => <>
    
    <Head>
        <title> Credit Card </title>
    </Head>
    <CreditCard {...props} />
</>

CreditCardPage.getInitialProps = async (ctx) => {
    try{
    const variables = ctx.query.orderid ? { _id: ctx.query.orderid } : {}
    const Ord = await ctx.apolloClient.query({
      query: GET_ORDER,
      variables,
      fetchPolicy:'no-cache'
    })
    return {
      orderId: ctx.query.orderid,
      order: Ord.data,
      ordertError: Ord.errors,
    }
    }
    catch(error) {
      console.log('error', error)
    }
    
    }
export default CreditCardPage
