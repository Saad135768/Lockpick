import React, { useState } from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import useStyles from './style'
import Button from '../../../../common/Button'
import Loader from 'react-loader-spinner'
import PayPal from '../PayPal'
import { useForm, Controller } from 'react-hook-form'
import { useMutation, useQuery } from '@apollo/react-hooks'
import { PAY_WITH_PAYPAL } from '../../data'
import { withSnackbar } from 'notistack'
import { pathOr } from 'ramda'
import Router, { useRouter } from 'next/router'
import useStore from '../../../../store'
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers"
import DateFnsUtils from "@date-io/date-fns"
import { GET_CART } from '../../../../commonData'

const CreditCard = props => {
  const setCart = useStore(state => state.setCart)
  useQuery(GET_CART, { onCompleted: (result) => { setCart(result.getCurrentCustomer.cart)}, fetchPolicy: 'no-cache'})
  const { register, handleSubmit, errors, control } = useForm({ mode: 'onBlur' })
  const [selectedDate, setSelectedDate] = useState(
    new Date(`${new Date().getFullYear()}-08-18T21:11:54`)
  )
  const isPaypal = pathOr('', ['query', 'isPaypal'], useRouter())
  
  const shippingRate = pathOr('', ['order', 'getOrder', 'totals', 'shipping'], props)
  const subTotal = pathOr('', ['order', 'getOrder', 'totals', 'subtotal'], props)
  const orderId = pathOr('', ['order', 'getOrder', 'orderId'], props)
  const _id = pathOr('', ['orderId'], props)
  const variations = pathOr([], ['order', 'getOrder', 'variations'], props)
  
  const [payWithPaypal, { loading }] = useMutation(PAY_WITH_PAYPAL)

  const PayWithPayPal = async ({
    firstName,
    lastName,
    cvv,
    cardNumber,
    ...values
  }) => {
    const m = new Date(values.expiryDate).getMonth() + 1
    const year = new Date(values.expiryDate).getFullYear().toLocaleString().slice(-2)
    const month = m.toLocaleString().length == 1 ? `0${m}` : m
    const expiryDate = `${month}${year}`
    
    try {  
      const res = await payWithPaypal({
        variables: {
          orderId,
          firstName,
          lastName,
          expiryDate,
          cvv,
          cardNumber,
        },
      })
      props.enqueueSnackbar('Your order has been created successfully', {
        variant: 'success',
      })
      setCart([])
      Router.push({ pathname: `/order`, query: { orderId, status: 'success', _id: res.data.PayWithPaypal.order._id } })
    } catch (error) {
      if (error?.graphQLErrors) {
        props.enqueueSnackbar(error.graphQLErrors[0].message, {
          variant: 'error',
        })
        Router.push({ pathname: `/order`, query: `status=failed` })
      } else props.enqueueSnackbar('something went wrong', { variant: 'error' })
    }
  }

  const handleDateChange = (date) => {
    setSelectedDate(date)
  }
  const checkIfPaypal = (paypal, notPaypal) => (isPaypal === 'true' ? paypal : notPaypal)

  const classes = useStyles()

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
          <Grid item md={4} sm={5} xs={12}>
            <div className={classes.PaymentSummary}>
              <h4> Payment Summary</h4>
              

                {variations.map((v) => {
                  const productImg = pathOr('', ['variation', 'product', 'images', '0'], v)
                  const productName = pathOr('', ['variation', 'product', 'name', 'en'], v)
                  const mainPrice = pathOr(0, ['variation', 'price', 'mainPrice'], v)
                  const discountedPrice = pathOr(0, ['variation', 'price', 'discountedPrice'], v)
                  const quantity = pathOr('', ['quantity'], v)
                  return (
                    <>
                    <div className={classes.PaymentSummaryTable} key={v.variation._id}>
                      <img src={`https://image.devteam9260.workers.dev/?width=660&image=${productImg}`} alt="product's image"/>
                      
                      <div>
                        <p className={classes.ProductName}> {productName} </p>
                        <p className={classes.Quantity}> Quantity: {quantity} </p>
                      </div>
                      <p className={classes.ProductPrice}> ${(discountedPrice || mainPrice)?.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</p>
                      </div>
                    </>
                  )
                })}
                <div className={classes.FormTotal}>
                  <h2>
                    Total: <b>${(subTotal + +shippingRate)?.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</b>
                  </h2>
                </div>
            </div>
          </Grid>
          <Grid item md={5} sm={5} xs={12}>
            <form onSubmit={handleSubmit(PayWithPayPal)}>
              <div className={classes.FormHolder}>
                <div className={classes.PaymentMethod}>
                  <h1> Payment Method</h1>
                </div>
                {checkIfPaypal(
                <PayPal orderId={orderId} _id={_id} />,
                <div className={classes.FormContent}>
                  <img src="https://image.devteam9260.workers.dev/?width=1000&image=https://m2k-static.s3-eu-west-1.amazonaws.com/lock-pick/visa2.png" alt="image of visa card" />

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
                        <p className={classes.errorMsg}>
                          {errors.firstName.message}
                        </p>
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
                        <p className={classes.errorMsg}>
                          {errors.lastName.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <div className={classes.FormTitle}>Credit Card Number</div>
                    <input
                      name="cardNumber"
                      className={classes.LoginInput}
                      placeholder="Card Number"
                      ref={register({ required: 'This field is required' })}
                    />
                    {errors.cardNumber && (
                      <p className={classes.errorMsg}>
                        {errors.cardNumber.message}
                      </p>
                    )}
                  </div>
                  <div className={classes.SecuirtyHolder}>
                    <div className={classes.LeftHolder}>

                      <div className={classes.FormTitle}>Security Code </div>
                      <input
                        name="cvv"
                        className={classes.LoginInput}
                        placeholder="cvv"
                        type="password"
                        ref={register({ required: 'This field is required' })}
                      />
                      {errors.cvv && (
                        <p className={classes.errorMsg}>{errors.cvv.message}</p>
                      )}
                    </div>
                    <div className={classes.RightHolder}>

                      <div className={classes.FormTitle}>Expiration Date</div>
                      <div className={classes.DatePickerHolder}>
                        <MuiPickersUtilsProvider 
                          onChange={(e) => cosnole.log(e)} 
                          utils={DateFnsUtils}
                        >
                          <Controller
                            control={control}
                            name="expiryDate"
                          as={
                          <DatePicker
                            variant="inline"
                            openTo="year"
                            views={["year", "month"]}
                            format="MM/yyyy"
                            value={selectedDate}
                            onChange={handleDateChange}
                            minDate={new Date(`${new Date().getFullYear()}-01-01`)}
                            maxDate={new Date(`${(+new Date().getFullYear() + 10)}-01-01`)}
                          />}
                          />
                        </MuiPickersUtilsProvider>
                        {errors.expiryDate && (
                        <p className={classes.errorMsg}>
                          {errors.expiryDate.message}
                        </p>
                      )} 
                      </div>
                    </div>
                  </div>
                  <Button>{loading ? <Loader
                            type="Oval"
                            color="#fff"
                            height={30}
                            width={30}
                          /> : 'Submit' }</Button>
                </div>)}
              </div>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default withSnackbar(CreditCard)
