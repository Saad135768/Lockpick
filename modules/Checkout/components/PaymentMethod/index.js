import React from 'react'
import useStyles from '../../../Checkout/style'
import Grid from '@material-ui/core/Grid'
import Button from '../../../../common/Button'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'

const PaymentMethod = ({
  setPaymentMethod,
  paymentMethod,
  setExpandlastAccordion,
  setView3,
  ...props
}) => {
  const classes = useStyles()
  return (
    <div>
      {/* <button className={classes.SaveBtn} onClick={() => setView3()}>
        Save
      </button> */}
      <AccordionDetails>
        <div className={classes.DeliveryMethod}>
          <FormControl component="fieldset">
            <RadioGroup 
              aria-label="gender" 
              name="gender1"
              onChange={(e) => setPaymentMethod(e.target.value)}
              defaultValue={paymentMethod}
            >
              <Grid container spacing={2}>
                <Grid item lg={6} md={6}>
                  <FormControlLabel
                    value="Credit/Debit Cards"
                    control={<Radio />}
                    label="Credit/Debit Cards"
                  />
                </Grid>
                <Grid item lg={6} md={6}>
                  <div className={classes.PaymentWays}>
                    <div>
                      <img src="https://image.devteam9260.workers.dev/?width=200&image=https://m2k-static.s3-eu-west-1.amazonaws.com/lock-pick/master.png" alt='image of master card' />
                    </div>
                    <div>
                      <img src="https://image.devteam9260.workers.dev/?width=200&image=https://m2k-static.s3-eu-west-1.amazonaws.com/lock-pick/visa.png" alt='image of visa card'/>
                    </div>
                    <div>
                      <h4> and More </h4>
                    </div>
                  </div>
                </Grid>
                <hr />
                <Grid item lg={6} md={6}>
                  <FormControlLabel
                    value="paypal"
                    control={<Radio />}
                    label="PayPal"
                  />
                </Grid>
                <Grid item lg={6} md={6}>
                  <div className={classes.SecondPayment}>
                    <div>
                      <img src="https://image.devteam9260.workers.dev/?width=170&image=https://m2k-static.s3-eu-west-1.amazonaws.com/lock-pick/paypal-logo.png" alt='image of paypal logo'/>
                    </div>
                  </div>
                </Grid>
                <hr />
                <Grid item lg={6} md={6}>
                  <FormControlLabel
                    value="cash"
                    control={<Radio />}
                    label="cash"
                  />
                </Grid>
              </Grid>
            </RadioGroup>
          </FormControl>
          <div className={classes.SecondPaymentNote}>
            <img src="https://image.devteam9260.workers.dev/?width=1000&image=https://m2k-static.s3-eu-west-1.amazonaws.com/lock-pick/note.png" alt='image of a note' />
          </div>
          <div className={classes.ContinueBtn}>
              <Button
                onClick={() => {
                  setExpandlastAccordion(true)
                  setView3()
                }}
              >
                Continue
              </Button>
          </div>
        </div>
      </AccordionDetails>
    </div>
  )
}

export default PaymentMethod
