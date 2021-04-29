import Invoice from '../../modules/Auth/components/OrderHistory/components/Invoice'
import Head from 'next/head'
import { GET_ORDER } from '../../modules/Auth/data'

const InvoicePage = (props) => <>
    
    <Head>
        <title>Invoice </title>
    </Head>
    <Invoice {...props}/>
</>
InvoicePage.getInitialProps = async (ctx) => {
    try{
    const variables = ctx.query.invoiceId ? { _id: ctx.query.invoiceId } : {}
    const Prod = await ctx.apolloClient.query({
      query: GET_ORDER,
      variables,
      fetchPolicy:'no-cache'
    })
    return {
      invoiceId: ctx.query.invoiceId,
      invoice: Prod.data.getOrder,
      invoiceError: Prod.errors,
    }
    }
    catch(error) {
      console.log('error', error)
    }
    
    }
export default InvoicePage
