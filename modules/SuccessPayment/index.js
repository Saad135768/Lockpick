import { Container, Grid} from '@material-ui/core'

import useStyles from './style'
import Button from '../../common/Button'
import Link from 'next/link'
const SuccessPayment = () => {
  const classes = useStyles()

  return (
    <div className={classes.SuccessPayment}>
            <Container>

         <Grid container justify='center'>
          <Grid item lg={5} md={5} sm={9} xs={12}>
          <div className={classes.SuccessPaymentHolder}>
          <div className={classes.SuccessPaymentAlert}>
         <div className={classes.SuccessPaymentWhite}>

         </div>
         <div className={classes.SuccessPaymentWhite}>
           
           </div>
           <div className={classes.SuccessPaymentGreen}>
           
           </div>
            </div>

          <h2> Success!</h2>

          <p> We are delighted to inform you <br/>
          that we recived your payment. <br/>
          You will receive email shortly.
          
          </p>

          <div className={classes.SuccessPaymentButtons}>
          <div className={classes.SuccessPaymentContinue}>
<Link as={'/products'} href="/products">
  <a href="/products">
    <Button> Continue Shopping</Button>
  </a>
</Link>
</div>
<div className={classes.SuccessPaymentPrint}>

<Link as={'/'} href="/">
  <a href="/">
    <Button> Print Receipt</Button>
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
