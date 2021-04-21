import React, { useState } from "react"
import useStyles from "../../../CheckoutModule/style"
import Grid from "@material-ui/core/Grid"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import Link from "next/link"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormControl from "@material-ui/core/FormControl"
import RadioGroup from "@material-ui/core/RadioGroup"
import Radio from "@material-ui/core/Radio"

const DeliveryMethod = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState("Expedited")
  const handleChange = (event) => {
    setValue(event.target.value)
  }


  return (
    <div>
     
     <AccordionDetails>
                        <div className={classes.DeliveryMethod}>
                          <FormControl component="fieldset">
                            <RadioGroup
                              aria-label="gender"
                              name="gender1"
                              value={value}
                              onChange={handleChange}
                            >
                              <Grid container spacing={2}>
                                <Grid item lg={9} md={9}>
                                  <FormControlLabel
                                    value="Expedited"
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
                                    value="male"
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
                        </div>
                      </AccordionDetails>         
    </div>
  )
}

export default DeliveryMethod
