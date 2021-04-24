import Orders from '../../modules/orders'
import { GET_ORDER } from '../../modules/CheckoutModule/data'

const Order = (props) => { 
    return ( <Orders {...props} />)
}

Order.getInitialProps = async (ctx) => {
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
export default Order