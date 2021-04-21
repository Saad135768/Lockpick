import CancelIcon from '@material-ui/icons/Cancel'
import React, { useState } from "react"
import useStyles from "../../../CheckoutModule/style"
import Grid from "@material-ui/core/Grid"
import Button from "../../../../common/Button"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import Link from "next/link"
const ShippingDetails = ({ edit }) => {
  const classes = useStyles()


  return (
    <div className={classes.schoolinfoHolder}>
        <button onClick={() => edit(false)}> Edit </button>
    
        <AccordionDetails>
                        <div className={classes.ShippingDetailsInfo}>
                          <span> *First Name</span>
                          <input
                            name="name"
                            className={classes.CheckoutInput}
                            placeholder="Full Name"
                            type="text"
                          />
                          <span> *LAST Name</span>
                          <input
                            name="name"
                            className={classes.CheckoutInput}
                            placeholder="Last Name"
                            type="text"
                          />
                          <span> *Address</span>
                          <input
                            name="name"
                            className={classes.CheckoutInput}
                            placeholder="Address"
                            type="text"
                          />
                          <span> *City</span>
                          <input
                            name="name"
                            className={classes.CheckoutInput}
                            placeholder="Address"
                            type="text"
                          />
                          <Grid container spacing={3}>
                            <Grid item lg={6} md={6} sm={6} xs={12}>
                              <span> *Country</span>
                              <input
                                name="name"
                                className={classes.CheckoutInput}
                                placeholder="Country"
                                type="text"
                              />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xs={12}>
                              <span> *State</span>
                              <input
                                name="name"
                                className={classes.CheckoutInput}
                                placeholder="State"
                                type="text"
                              />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xs={12}>
                              <span> *Zip / Postal Code"</span>
                              <input
                                name="name"
                                className={classes.CheckoutInput}
                                placeholder="Zip / Postal Code"
                                type="text"
                              />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xs={12}>
                              <span> *Phone</span>
                              <input
                                name="name"
                                className={classes.CheckoutInput}
                                placeholder="Phone"
                                type="text"
                              />
                            </Grid>
                          </Grid>

                          <Link as={"#"} href="#">
                            <a href="#">
                              <Button> Continue</Button>
                            </a>
                          </Link>
                        </div>
                      </AccordionDetails>
    </div>
  )
}

export default ShippingDetails
