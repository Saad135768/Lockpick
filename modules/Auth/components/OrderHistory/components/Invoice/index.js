import React, { Fragment } from 'react'
import useStyles from './style'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { pathOr, propOr } from 'ramda'
import Pdf from "react-to-pdf"

const ref = React.createRef()
const options = {
  orientation: 'landscape',
  unit: 'in',
  format: [4,2]
}
const Invoice = ({ invoice, invoiceId, ...props }) => {

  const AddressChecker = address => {
    if (address) return `${address}, `
  }

  const shippingCost = pathOr(0, ['totals', 'shipping'], invoice)
  const subtotal = pathOr([], ['variations'], invoice).reduce((a,b) => {
   return propOr(0, ['total'], b) + a
  }, 0)
  
  const classes = useStyles()
  return (
    <>
    <Container >
      <Grid item md={11} xs={12}>
    {/* <Pdf targetRef={ref} filename="lock-pick_Invoice.pdf">
    {({ toPdf }) => <button onClick={toPdf}>Download as Pdf</button>}
  </Pdf> */}
        <div className={classes.Invoice} ref={ref}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item sm={12}>
          
              <h5 className={classes.InvoiceText}> INVOICE</h5>
            </Grid>

            <Grid item lg={6} sm={6} md={6}>
              <div className={classes.InvoiceInfoLeft}>
                <h2> www.website.com </h2>
                <h4> Address line 1 </h4>
                <h4> Address line 2 </h4>
                <h4>
                  WEBSITE:
                  <a href="https://www.website.com">
                    https://www.website.com
                  </a>
                </h4>
                <h4>
                  
                  E-MAIL: <a href="email@email.com"> email@email.com</a>
                </h4>
              </div>
            </Grid>
            <Grid item sm={6}>
              <div className={classes.InvoiceInfoRight}>
                <h4> order #{invoice?.orderId} </h4>
                <h5>
                  
                  STATUS: <span>{invoice?.status} </span>
                </h5>
                <h5>
                  
                  Date: <span> </span>
                </h5>
                <h5>
                  
                  PAYMENT METHOD: <span>{invoice?.paymentMethod} </span>
                </h5>
                <h5>
                  
                  SHIPPING METHOD: <span>{invoice?.shippingMethod} </span>
                </h5>
                {/* <h5>
                  
                  CARRIER : <span> </span>
                </h5> */}
                {/* <h5>
                  
                  TRACKING Number : <span> </span>
                </h5> */}
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item sm={6} lg={6} md={6}>
              <div className={classes.InvoiceBill}>
                <h2>Bill to: {invoice?.customerName}</h2>
                {/* <h4> Customer </h4> */}
                <h4> Address line 1: 
                  {AddressChecker(invoice?.shipping?.street)}
                  {AddressChecker(invoice?.shipping?.state)}
                  {AddressChecker(invoice?.shipping?.city)}
                  {AddressChecker(invoice?.shipping?.country)}
                  {AddressChecker(invoice?.shipping?.postalCode)} </h4>
                <h4> Address line 2: - </h4>
                <h4> Address line 3: - </h4>
                <h4> phone: {invoice?.customerPhone} </h4>
                <h4> Company: - </h4>
              </div>
            </Grid>
            <Grid item sm={6} md={4}>
              <div className={classes.InvoiceBill}>
                <h2>Ship to: {invoice?.customerName}</h2>
                {/* <h4> Customer </h4> */}
                <h4> Address line 1:  {AddressChecker(invoice?.billing?.street)}
                  {AddressChecker(invoice?.billing?.state)}
                  {AddressChecker(invoice?.billing?.city)}
                  {AddressChecker(invoice?.billing?.country)}
                  {AddressChecker(invoice?.billing?.postalCode)}</h4>
                <h4> Address line 2: - </h4>
                <h4> Address line 3: - </h4>
                <h4> phone: {invoice?.customerPhone}  </h4>
                <h4> Company: - </h4>
              </div>
            </Grid>
          </Grid>

          <Grid item sm={12}>
            <table>
              
              <tr>
                <th className={classes.productTitle}>Product</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Subtotal</th>
              </tr>
              {pathOr([], ['variations'], invoice).map((v) => {
                const name = pathOr('-', ['variation', 'product', 'name', 'en'], v)
                const code = pathOr('-', ['variation', 'product', 'productCode'], v)
                const quantity = pathOr('-', ['quantity'], v)
                const total = propOr(0, ['total'], v)
                const unitPrice = total / quantity
              return (
              <Fragment key={v.variation.product._id}>
              <tr>
                <td className={classes.productName}>
                  
                  {name}
                  <h4>
                    
                    Code : <span>{code} </span>
                  </h4>
                </td>
                <td className={classes.Center}>{quantity}</td>
                <td className={classes.Center}>${unitPrice.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</td>
                <td className={classes.Center}>${total.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</td>
              </tr>
              </Fragment>
              )} )}
            </table>
          </Grid>
          <Grid container spacing={2}>
            <Grid item md={7}></Grid>

            <Grid item md={5}>
              <div className={classes.RestTable}>
                <Grid container spacing={2}>
                  <Grid item md={6}>
                    <h3> Subtotal</h3>
                  </Grid>
                  <Grid item md={6}>
                    <h4> ${subtotal.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</h4>
                  </Grid>
                  <Grid item md={6}>
                    <h3> Taxes:</h3>
                  </Grid>
                  <Grid item md={6}>
                    <h4> $00,000,00</h4>
                  </Grid>
                  <Grid item md={6}>
                    <h3> Tax:  0%</h3>
                  </Grid>
                  <Grid item md={6}>
                    <h4> $00,000,00</h4>
                  </Grid>
                  <Grid item md={6}>
                    <h3> Shipping Cost:</h3>
                  </Grid>
                  <Grid item md={6}>
                    <h4> ${shippingCost?.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</h4>
                  </Grid>
                </Grid>
              </div>

              <div className={classes.TotalCost}>
                <hr />
                <h5>
                  
                  Total cost: <b> ${(+subtotal + +shippingCost)?.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</b>
                </h5>
              </div>
              
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Container>
    </>
  )
}

export default Invoice
