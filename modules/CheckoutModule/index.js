import React, { useState } from 'react'
import Container from "@material-ui/core/Container"
import useStyles from "./style"
import Grid from "@material-ui/core/Grid"
import OrderSummary from "./components/OrderSummary"
import { GrNotes } from "react-icons/gr"
import Button from "../../common/Button"
import Link from "next/link"
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
const CartModule = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState('Expedited');
  const [value1, setValue2] = React.useState('paybal');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleChange1 = (event) => {
    setValue2(event.target.value);
  };
  return (
    <div className={classes.CartHolder}>
      <Container>
        <Grid container justify="center">
          <Grid item lg={11} md={11} sm={12} xs={12}>
            <Grid container spacing={8}>
              <Grid item lg={7} md={7} sm={12} xs={12}>
              <div className={`${classes.CheckoutTitle} CheckoutTitle`}>
                    <div>
                      <h2>Checkout  </h2>
                    </div>
                    
                  </div>
                  <div className={classes.CheckoutLogged}>

                  <div>
                  <h3> Logged as username@email.com</h3>
                  </div>
                  <div>
                  <h4> Log out </h4>
                  </div>

                  </div>
                  <div className={classes.ShippingDetails}>
                    <h5>  1 Shipping Details</h5>
        
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
      <hr/>

<div className={classes.DeliveryMethod}>
  
      <h5>  2 Delivery Method</h5>

      <FormControl component="fieldset">
  <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
  

    <Grid container spacing={2}>
    <Grid  item lg={10} md={10}>
    <FormControlLabel value="Expedited" control={<Radio />} label="Expedited Ground Shipping" />
    <p> Est. Delivery Time 2-4 business days</p>
    </Grid>
    <Grid  item lg={2} md={2}>
    <h3> $ 0,00000 </h3>

</Grid>
<hr/>
<Grid  item lg={10} md={10}>
<FormControlLabel value="male" control={<Radio />} label="3 day Shipping" />
    </Grid>
    <Grid  item lg={2} md={2}>
    <h3> $ 0,00000 </h3>

</Grid>
</Grid>


  </RadioGroup>
</FormControl>

                    </div>


                    <div className={classes.DeliveryMethod}>
  
      <h5>  3 Payment</h5>

      <FormControl component="fieldset">
  <RadioGroup aria-label="gender" name="gender1" value={value1} onChange={handleChange1}>
  

    <Grid container spacing={2}>
    <Grid  item lg={6} md={6}>
    <FormControlLabel value="visa" control={<Radio />} label="Credit/Debit Cards" />
    </Grid>
    <Grid  item lg={6} md={6}>
    <div className={classes.PaymentWays}>

      <div> <img src="../../static/images/checkout/master.png"/></div>
      <div> <img src="../../static/images/checkout/visa.png"/></div>
    <div><h4> and More </h4></div>
    </div>

</Grid>
<hr/>
<Grid  item lg={6} md={6}>
<FormControlLabel value="paybal" control={<Radio />} label="Paybal" />
    </Grid>
    <Grid  item lg={6} md={6}>
    <div className={classes.SecondPayment}>

    <div> <img src="../../static/images/checkout/paypal-logo.png"/></div>

</div>

</Grid>
</Grid>


  </RadioGroup>
</FormControl>
<div className={classes.SecondPaymentNote}>

<img src="../../static/images/checkout/note.png"/>

</div>
                    </div>


</div>


    
                <div className={classes.CartInputs}>
               <div className={classes.promocode}>
               
                 <div>
                 </div>
                 </div>
                
               </div>
              </Grid>
              <Grid item lg={5} md={5} sm={12} xs={12}>
                <OrderSummary />
              </Grid>
             
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default CartModule
