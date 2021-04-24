import React from 'react'
import useStyles from '../../../CheckoutModule/style'
import Grid from '@material-ui/core/Grid'
import Button from '../../../../common/Button'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'

const PaymentMethod = ({ setPaymentMethod, setExpandAccordions, ...props }) => {
  const classes = useStyles()
  return (
    <div>
      <AccordionDetails>
        <div className={classes.DeliveryMethod}>
          <FormControl component="fieldset">
            <RadioGroup aria-label="gender" name="gender1">
              <Grid container spacing={2}>
                <Grid item lg={6} md={6}>
                  <FormControlLabel
                    value="visa"
                    control={<Radio />}
                    label="Credit/Debit Cards"
                    disabled
                  />
                </Grid>
                <Grid item lg={6} md={6}>
                  <div className={classes.PaymentWays}>
                    <div>
                      <img src="../../static/images/checkout/master.png" />
                    </div>
                    <div>
                      <img src="../../static/images/checkout/visa.png" />
                    </div>
                    <div>
                      <h4> and More </h4>
                    </div>
                  </div>
                </Grid>
                <hr />
                <Grid item lg={6} md={6}>
                  <FormControlLabel
                    value="paybal"
                    control={<Radio />}
                    label="Paybal"
                    disabled
                  />
                </Grid>
                <Grid item lg={6} md={6}>
                  <div className={classes.SecondPayment}>
                    <div>
                      <img src="../../static/images/checkout/paypal-logo.png" />
                    </div>
                  </div>
                </Grid>
                <hr />
                <Grid item lg={6} md={6}>
                  <FormControlLabel
                    value="cash"
                    control={<Radio />}
                    label="cash"
                    checked
                  />
                </Grid>
              </Grid>
            </RadioGroup>
          </FormControl>
          <div className={classes.SecondPaymentNote}>
            <img src="../../static/images/checkout/note.png" />
          </div>
          <div className={classes.ContinueBtn}>
            <div>
            <Button onClick={() => setExpandAccordions('panel-4')}> Continue</Button>
            </div>
            </div>
        </div>
      </AccordionDetails>
    </div>
  )
}

export default PaymentMethod
