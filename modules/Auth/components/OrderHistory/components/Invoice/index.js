import React, { Fragment, useRef } from 'react'
import useStyles from './style'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { pathOr, propOr } from 'ramda'
import ReactToPrint from 'react-to-print'

const Invoice = ({ invoice, invoiceId, ...props }) => {
  const ref = useRef()
  const AddressChecker = address => {
    if (address) return `${address}, `
  }

  const date = propOr(0, ['shippingDate'], invoice)
  const shippingCost = pathOr(0, ['totals', 'shipping'], invoice)
  const subtotal = pathOr([], ['variations'], invoice).reduce((a, b) => {
    return propOr(0, ['total'], b) + a
  }, 0)

  const classes = useStyles()
  return (
    <>
      <ReactToPrint
        trigger={() => (
          <button className={classes.btn_print}>Print this out!</button>
        )}
        content={() => ref.current}
      />
      <Container ref={ref}>
        <div className={classes.Invoice}>
          <h5 className={classes.InvoiceText}> INVOICE</h5>
          <Grid
            container
            spacing={8}
            direction="row"
            justify="center"
            alignItems="center"
          >

            <Grid item sm={6}>
              <div className={classes.InvoiceInfoLeft}>
                <h2> lock-pick.us</h2>
                <h3>

                  Address line 1:
                     <span>
                    LOCK PICK 3301 W.MACARTHUR BLVD. <br /> SANTA ANA, CA
                      92704 - USA
                    </span>
                </h3>
                <h3>

                  Address line 2: <span> - </span>
                </h3>
                <h3>
                  WEBSITE:
                    <a href="https://lock-pick.us/">https://lock-pick.us/</a>
                </h3>
                <h3>
                  E-MAIL:
                    <a href="mailto:Info@Lock-Pick.US" target="_blank">
                    Info @Lock - Pick.US
                    </a>
                </h3>
              </div>
            </Grid>
            <Grid item sm={6}>
              <div className={classes.InvoiceInfoRight}>
                <h4> order #{invoice?.orderId} </h4>
                <h3>
                  STATUS: <span>{invoice?.status} </span>
                </h3>
                <h3>
                  Date:
                    <span>
                    {!!date
                      ? new Date(+date).toLocaleString('en-us', {
                        day: 'numeric',
                        month: 'numeric',
                        year: 'numeric',
                      })
                      : '-'}
                  </span>
                </h3>
                <h3>
                  PAYMENT METHOD: <span>{invoice?.paymentMethod} </span>
                </h3>
                <h3>
                  SHIPPING METHOD: <span>{invoice?.shippingMethod} </span>
                </h3>
                {/* <h5>
                  
                  CARRIER : <span> </span>
                </h5> */}
                {/* <h5>
                  
                  TRACKING Number : <span> </span>
                </h5> */}
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={8}>
            <Grid item sm={6} lg={6} md={6}>
              <div className={classes.InvoiceBill}>
                <h2>Bill to: {invoice?.customerName}</h2>
                {/* <h3> Customer </h3> */}
                <h3>

                  Address line 1:
                    {AddressChecker(invoice?.shipping?.street)}
                  {AddressChecker(invoice?.shipping?.state)}
                  {AddressChecker(invoice?.shipping?.city)}
                  {AddressChecker(invoice?.shipping?.country)}
                  {AddressChecker(invoice?.shipping?.postalCode)}
                </h3>
                <h3> Address line 2: - </h3>
                <h3> Address line 3: - </h3>
                <h3> phone: {invoice?.customerPhone} </h3>
                <h3> Company: - </h3>
              </div>
            </Grid>
            <Grid item sm={6} md={4}>
              <div className={classes.InvoiceBill}>
                <h2>Ship to: {invoice?.customerName}</h2>
                {/* <h3> Customer </h3> */}
                <h3>

                  Address line 1: {AddressChecker(invoice?.billing?.street)}
                  {AddressChecker(invoice?.billing?.state)}
                  {AddressChecker(invoice?.billing?.city)}
                  {AddressChecker(invoice?.billing?.country)}
                  {AddressChecker(invoice?.billing?.postalCode)}
                </h3>
                <h3> Address line 2: - </h3>
                <h3> Address line 3: - </h3>
                <h3> phone: {invoice?.customerPhone} </h3>
                <h3> Company: - </h3>
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
              {pathOr([], ['variations'], invoice).map(v => {
                const name = pathOr(
                  '-', ['variation', 'product', 'name', 'en'], v)
                const code = pathOr(
                  '-', ['variation', 'product', 'productCode'], v)
                const quantity = pathOr('-', ['quantity'], v)
                const total = propOr(0, ['total'], v)
                const unitPrice = total / quantity
                return (
                  <Fragment key={v.variation.product._id}>
                    <tr>
                      <td className={classes.productName}>
                        {name}
                        <h3>
                          Code : <span>{code} </span>
                        </h3>
                      </td>
                      <td className={classes.Center}>{quantity}</td>
                      <td className={classes.Center}>
                        $
                          {unitPrice
                          .toFixed(2)
                          .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                      </td>
                      <td className={classes.Center}>
                        $
                          {total
                          .toFixed(2)
                          .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                      </td>
                    </tr>
                  </Fragment>
                )
              })}
            </table>
          </Grid>
          <Grid container spacing={2}>
            <Grid item md={7}></Grid>

            <Grid item md={5}>
              <div className={classes.RestTable}>
                <Grid container spacing={2}>
                  <Grid item md={7}>
                    <h3> Subtotal</h3>
                  </Grid>
                  <Grid item md={5}>
                    <h3>

                      ${subtotal
                        .toFixed(2)
                        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                    </h3>
                  </Grid>
                  <Grid item md={7}>
                    <h3> Taxes:</h3>
                  </Grid>
                  <Grid item md={5}>
                    <h3> $00,000,00</h3>
                  </Grid>
                  <Grid item md={7}>
                    <h3> Tax: 0%</h3>
                  </Grid>
                  <Grid item md={5}>
                    <h3> $00,000,00</h3>
                  </Grid>
                  <Grid item md={7}>
                    <h3> Shipping Cost:</h3>
                  </Grid>
                  <Grid item md={5}>
                    <h3>

                      ${shippingCost
                        ?.toFixed(2)
                        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                    </h3>
                  </Grid>
                </Grid>
              </div>

              <div className={classes.TotalCost}>
                <hr />
                <h5>
                  Total cost:
                    <b>
                    ${(+subtotal + +shippingCost)
                      ?.toFixed(2)
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                  </b>
                </h5>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  )
}

export default Invoice
