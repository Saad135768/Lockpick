import { Container, Grid } from '@material-ui/core'
import useStyles from './style'
import Button from '../../common/Button'
import Link from 'next/link'

const FailedPayment = () => {
  const classes = useStyles()

  return (
    <div className={classes.FailedPayment}>
      <Container>
        <Grid container justify="center">
          <Grid item lg={5} md={5} sm={9} xs={12}>
            <div className={classes.FailedPaymentHolder}>
              <div className={classes.FailedPaymentAlert}>
                <div className={classes.FailedPaymentRed} />

                <div className={classes.FailedPaymentWhite} />

                <div className={classes.FailedPaymentWhite} />
              </div>

              <h2> Error!</h2>

              <p>
                {' '}
                Unfortunately we have an issue <br />
                with your payment, try again later.
              </p>

              <div className={classes.FailedPaymentButtons}>
                <div className={classes.FailedPaymentContinue}>
                  <Link as={'/products'} href="/products">
                    <a href="/products">
                      <Button> Continue Shopping</Button>
                    </a>
                  </Link>
                </div>
                <div className={classes.FailedPaymentPrint}>
                  <Link href="/checkout">
                    <a>
                      <Button> Try Again </Button>
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

export default FailedPayment
