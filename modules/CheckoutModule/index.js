import React, { useState } from "react"
import Container from "@material-ui/core/Container"
import useStyles from "./style"
import Grid from "@material-ui/core/Grid"
import CheckoutSummary from "./components/CheckoutSummary"
import Button from "../../common/Button"
import Link from "next/link"
import Accordion from "@material-ui/core/Accordion"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import Typography from "@material-ui/core/Typography"
import PaymentMethod from "./components/PaymentMethod"
import DeliveryMethod from "./components/DeliveryMethod"
import EditShipping from './components/EditShipping/'
import ShippingDetails from './components/ShippingDetails/'
import Cookies from 'js-cookie'

const CheckoutModule = () => {
  const classes = useStyles()

  const [View, setView] = useState(true)

  return (
    <div className={classes.CheckoutHolder}>
      <Container>
        <Grid container justify="center">
          <Grid item lg={11} md={11} sm={12} xs={12}>
            <Grid container spacing={8}>
              <Grid item lg={7} md={7} sm={12} xs={12}>
                <div className={`${classes.CheckoutTitle} CheckoutTitle`}>
                  <div>
                    <h2>Checkout </h2>
                  </div>
                </div>
                <div className={classes.CheckoutLogged}>
                  <div>
                    <h3> Logged as username@email.com</h3>
                  </div>
                  <div>
                    <h4 onClick={() => {
                  Cookies.remove('token')
                  window.location = '/'
                  }}> Log out </h4>
                  </div>
                </div>

                <div className={classes.ShippingDetails}>
                  <div className={classes.root}>
                    
                    <Accordion>
                      <AccordionSummary
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                      >
                        <Typography className={classes.heading}>
                          <h5>
                            
                            <em> 1</em> Shipping Details
                          </h5>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                     {View ? <ShippingDetails edit={setView} /> : <EditShipping save={setView} />}

                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                      >
                        <h5>
                          
                          <em> 2</em> Delivery Method
                        </h5>
                      </AccordionSummary>
                      <DeliveryMethod/>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                      >
                        <h5>
                          
                          <em> 3</em> Payment
                        </h5>
                      </AccordionSummary>
                     <PaymentMethod/>
                    </Accordion>

                    <Accordion>
                      <AccordionSummary
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                      >
                        <h5>
                          
                          <em> 4</em> Place Order
                        </h5>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Link as={"#"} href="#">
                          <a href="#">
                            <Button> Pay Now</Button>
                          </a>
                        </Link>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </div>

                <div className={classes.ReturnPolicy}>
                  <p> Return Policy </p>
                </div>
              </Grid>
              <Grid item lg={5} md={5} sm={12} xs={12}>
                <CheckoutSummary />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default CheckoutModule
