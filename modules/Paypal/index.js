import React, { useState } from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import useStyles from './style'
import Button from '../../common/Button'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import PayPal from './../Checkout/components/PayPal'
import { useForm } from 'react-hook-form'
import { useMutation } from '@apollo/react-hooks'
import { PAY_WITH_PAYPAL } from '../Checkout/data'
import { withSnackbar } from 'notistack'
import { pathOr } from 'ramda'
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers"
import DateFnsUtils from "@date-io/date-fns";

import "react-datepicker/dist/react-datepicker.css"
const Paypal = (props) => {
console.log({ props })
  const { register, handleSubmit, errors } = useForm({ mode: 'onBlur' })

  const total = pathOr(0, ['order', 'getOrder', 'totals', 'total'], props)
  const orderId = pathOr('', ['order', 'getOrder', 'orderId'], props)
  
  const [payWithPaypal] = useMutation(PAY_WITH_PAYPAL)

  const PayWithPayPal = async ({ firstName, lastName, expiryDate, cvv, cardNumber, ...values }) => {
    try{
      const res = await payWithPaypal({ variables: {
        orderId,
        firstName,
        lastName,
        expiryDate,
        cvv,
        cardNumber,
      }})
      props.enqueueSnackbar('Your order has been created successfully', { variant: 'success' })
      setCart([])
      Router.push({ pathname: `/success` })
      console.log({ res })
    }
    catch(error){
      if (error?.graphQLErrors) {
        props.enqueueSnackbar(error.graphQLErrors[0].message, {
          variant: 'error',
        })
      } else props.enqueueSnackbar('something went wrong', { variant: 'error' })
    }
  }

 
  const classes = useStyles()
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <div className={classes.AboutHolder}>
      <Container>
        <Grid
          container
          direction="row"
          justify="center"
          spacing={0}
          alignItems="left"
        >
                    <Grid item md={4} xs={12}>

<div className={classes.PaymentSummary}>
<h4> Payment Summary</h4>

<div className={classes.PaymentSummaryTable}>
                  <img src={'../../static/images/products/6.png'}/>
                    <div>
                    <p className={classes.ProductName} > Product Name Here  </p>
                    <p className={classes.Quantity} > Quantity :1 </p>

                    </div>
                    <p className={classes.ProductPrice}>  $14,385.00  </p>
                  </div>
                  <div className={classes.PaymentSummaryTable}>
                  <img src={'../../static/images/products/6.png'}/>
                    <div>
                    <p className={classes.ProductName} > Product Name Here  </p>
                    <p className={classes.Quantity} > Quantity :1 </p>

                    </div>
                    <p className={classes.ProductPrice}>  $14,385.00  </p>
                  </div>
                  <div className={classes.FormTotal}>
                    <div>
                    <h2>
                    Total: 
                  </h2>
                      </div>
               
                  <div>
                  <b> {total}$</b>
                  </div>
                </div>
</div>
</Grid>
          <Grid item md={5} xs={12}>
         
              <form onSubmit={handleSubmit(PayWithPayPal)}>
              <div className={classes.FormHolder}>
          
               
                <div className={classes.PaymentMethod}>
                  <h1> Payment Method</h1>
                </div>
                <div className={classes.FormContent}>
               
                      <img src="../../static/images/checkout/visa2.png" />
                   
                      <div className={classes.PaymentMethod}>
                        <h3> Credit Card</h3>
                      </div>
                      <div className={classes.SecuirtyHolder}>

                      <div className={classes.LeftHolder}>

                        <div className={classes.FormTitle}>First Name</div>
                        <input
                          name="firstName"
                          className={classes.LoginInput}
                          placeholder="First Name"
                          ref={register({ required: 'This field is required' })}
                        />
                        {errors.firstName && ( 
                        <p className={classes.errorMsg}>{errors.firstName.message}</p> 
                        )} 
                      </div>

                      <div className={classes.RightHolder}>

                        <div className={classes.FormTitle}>Last Name</div>
                        <input
                          name="lastName"
                          className={classes.LoginInput}
                          placeholder="Last Name"
                          ref={register({ required: 'This field is required' })}
                        />
                        {errors.lastName && ( 
                        <p className={classes.errorMsg}>{errors.lastName.message}</p> 
                        )} 
                      </div>
                      </div>

                      <div>
                        <div className={classes.FormTitle}>
                          Credit Card Number
                        </div>
                        <input
                          name="cardNumber"
                          className={classes.LoginInput}
                          placeholder="Card Number"
                          ref={register({ required: 'This field is required' })}
                        />
                        {errors.cardNumber && ( 
                        <p className={classes.errorMsg}>{errors.cardNumber.message}</p> 
                        )} 
                      </div>
                      <div className={classes.SecuirtyHolder}>

                      <div className={classes.LeftHolder}>
                        <div className={classes.FormTitle}>Security Code </div>
                        <input
                          name="cvv"
                          className={classes.LoginInput}
                          placeholder="cvv"
                          type='password'
                          ref={register({ required: 'This field is required' })}
                        />
                        {errors.cvv && ( 
                        <p className={classes.errorMsg}>{errors.cvv.message}</p> 
                        )} 
                      </div>
                      <div className={classes.RightHolder}>
                        <div className={classes.FormTitle}>
                          Expiration Date
                        </div>
                        <div className={classes.DatePickerHolder}>

                        <MuiPickersUtilsProvider utils={DateFnsUtils}>


                        <DatePicker
        variant="inline"
        openTo="year"
        views={["year", "month"]}
        value={selectedDate}
        onChange={handleDateChange}
        format="MM/yyyy"
        minDate={new Date("2022-01-01")}
        maxDate={new Date("2030-01-01")}

      />
                        </MuiPickersUtilsProvider>
                        </div>

                        {/* <input
                          name="expiryDate"
                          className={classes.LoginInput}
                          placeholder="MM/YYYY"
                          ref={register({ required: 'This field is required', pattern: {
                            message: 'Invalid Expiration Date',
                            value: '^\d{2}\/\d{2}$',
                          } })}
                        /> */}
                        {errors.expiryDate && ( 
                        <p className={classes.errorMsg}>{errors.expiryDate.message}</p> 
                        )} 
                      </div>
                      </div>
                      <Button> Submit</Button>
                </div>
              </div>
                </form>
            </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default withSnackbar(Paypal)
