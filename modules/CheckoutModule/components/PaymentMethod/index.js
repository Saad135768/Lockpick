import React, { useState } from "react"
import useStyles from "../../../CheckoutModule/style"
import Grid from "@material-ui/core/Grid"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import Link from "next/link"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormControl from "@material-ui/core/FormControl"
import RadioGroup from "@material-ui/core/RadioGroup"
import Radio from "@material-ui/core/Radio"

const PaymentMethod = () => {
  const classes = useStyles()
  const [value1, setValue2] = React.useState("paybal")

  const handleChange1 = (event) => {
    setValue2(event.target.value)
  }
  const [expanded, setExpanded] = React.useState(false)

  const handleChangeSteps = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }
  return (
    <div>
     
     <AccordionDetails>
                        <div className={classes.DeliveryMethod}>
                          <FormControl component="fieldset">
                            <RadioGroup
                              aria-label="gender"
                              name="gender1"
                              value={value1}
                              onChange={handleChange1}
                            >
                              <Grid container spacing={2}>
                                <Grid item lg={6} md={6}>
                                  <FormControlLabel
                                    value="visa"
                                    control={<Radio />}
                                    label="Credit/Debit Cards"
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
                                  />
                                </Grid>
                                <Grid item lg={6} md={6}>
                                  <div className={classes.SecondPayment}>
                                    <div>
                                      <img src="../../static/images/checkout/paypal-logo.png" />
                                    </div>
                                  </div>
                                </Grid>
                              </Grid>
                            </RadioGroup>
                          </FormControl>
                          <div className={classes.SecondPaymentNote}>
                            <img src="../../static/images/checkout/note.png" />
                          </div>
                        </div>
                      </AccordionDetails>           
    </div>
  )
}

export default PaymentMethod
