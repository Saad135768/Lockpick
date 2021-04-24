import React from 'react'
import useStyles from '../../../CheckoutModule/style'
import Button from '../../../../common/Button'
import Grid from '@material-ui/core/Grid'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'

const DeliveryMethod = ({ setView2, setShippingMethod, shippingMethod, setExpandAccordions, ...props }) => {
  const classes = useStyles()
  const handleChange = event => {
    setShippingMethod(event.target.value)
  }

  return (
    <div>
        <div className={classes.schoolinfoHolder}>
        <button className={classes.EditBtn} onClick={() => setView2(true)}> Save </button>
      <AccordionDetails>
        <div className={classes.DeliveryMethod}>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="shipping method"
              name="shipping method"
              onChange={handleChange}
              defaultValue={shippingMethod}

            >
              <Grid container spacing={2}>
                <Grid item lg={9} md={9}>
                  <FormControlLabel
                    value="normal"
                    control={<Radio />}
                    label="Expedited Ground Shipping"
                  />
                  <p> Est. Delivery Time 2-4 business days</p>
                </Grid>
                <Grid item lg={3} md={3}>
                  <h3> $ 0,00000 </h3>
                </Grid>
                <hr />
                <Grid item lg={9} md={9}>
                  <FormControlLabel
                    value="fastShipping"
                    control={<Radio />}
                    label="3 day Shipping"
                  />
                </Grid>
                <Grid item lg={3} md={3}>
                  <h3> $ 0,00000 </h3>
                </Grid>
              </Grid>
            </RadioGroup>
          </FormControl>
          <div className={classes.ContinueBtn}>
            <div>
            <Button onClick={() => {
              setView2(true)
              setExpandAccordions('panel-3')
            }}> Continue</Button>
            </div>
              

            </div>
        </div>
      </AccordionDetails>
    </div>
    </div>
  )
}

export default DeliveryMethod