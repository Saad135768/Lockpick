import { Container, Grid } from '@material-ui/core'
import useStyles from './style'
import Button from '../../../../common/Button'
import { propOr } from 'ramda'
import Link from 'next/link'
import { useRouter } from 'next/router'

const SuccessPayment = () => {
  const router = useRouter().query
  const { orderId } = router
  const _id = propOr('', ['_id'], router)

  const classes = useStyles()
  return (
    <div className={classes.SuccessPayment}>
      <Container>
        <Grid container justify="center">
          <Grid item md={5} sm={9} xs={12}>
            <div className={classes.SuccessPaymentHolder}>
              <div className={classes.SuccessPaymentAlert}>
                <div className={classes.SuccessPaymentWhite}></div>
                <div className={classes.SuccessPaymentWhite}></div>
                <div className={classes.SuccessPaymentGreen}></div>
              </div>

              <h2> Success!</h2>

              <p>
                {' '}
                We are delighted to inform you <br />
                that we recived your payment. <br />
                You will receive email shortly.
              </p>
              <p>Your order id is: {orderId}</p>
              <div className={classes.SuccessPaymentButtons}>
                <div className={classes.SuccessPaymentContinue}>
                  <Link href="/products">
                    <a>
                      <Button> Continue Shopping</Button>
                    </a>
                  </Link>
                </div>
                <div className={classes.SuccessPaymentPrint}>
                  <Link href={`/invoice/${_id}`}>
                    <a>
                      <Button> Invoice</Button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default SuccessPayment
