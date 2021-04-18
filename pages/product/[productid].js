import SingleProduct from '../../modules/SingleProductModule'
import { SINGLE_PRODUCT_QUERY } from '../../modules/SingleProductModule/data'

const Product = (props) => { 
    return ( <SingleProduct {...props} />)
}

Product.getInitialProps = async (ctx) => {
  try{
  const variables = ctx.query.productid ? { _id: ctx.query.productid } : {}
  const Prod = await ctx.apolloClient.query({
    query: SINGLE_PRODUCT_QUERY,
    variables,
    fetchPolicy:'no-cache'
  })
  return {
    productId: ctx.query.productid,
    product: Prod.data.getProductWithVariations,
    productError: Prod.errors,
  }
  }
  catch(error) {
    console.log('error', error)
  }
  
  }
export default Product