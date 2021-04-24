import React, { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container'
import useStyles from './style'
import Grid from '@material-ui/core/Grid'
import CheckoutSummary from './components/CheckoutSummary'
import Button from '../../common/Button'
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import Typography from '@material-ui/core/Typography'
import PaymentMethod from './components/PaymentMethod'
import DeliveryMethod from './components/DeliveryMethod'
import EditShipping from './components/EditShipping/'
import ShippingDetails from './components/ShippingDetails/'
import Cookies from 'js-cookie'
import { AiOutlineCheck } from 'react-icons/ai'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { GET_CURRENT_CUSTOMER } from './../Auth/data'
import { CREATE_ORDER } from './data'
import * as R from 'ramda'
import { withSnackbar } from 'notistack'
import Router from 'next/router'
import useStore from '../../store'

const CheckoutModule = (props) => {
  const { data } = useQuery(GET_CURRENT_CUSTOMER, { fetchPolicy: 'no-cache'})

  // // Protected Route
  // useEffect(() => {
  //   if(!R.pathOr(true, ['getCurrentCustomer','cart', 'variations'], data)) Router.push('/')
  // }, [data])

  const [View, setView] = useState(true)
  const [checkoutValues, setcheckoutValues] = useState()
  const [paymentMethod, setPaymentMethod] = useState('cash')
  const [shippingMethod, setShippingMethod] = useState('normal')
  const [promoCode, setPromocode] = useState()

  const setCart = useStore((state) => state.setCart)

  const email = data?.getCurrentCustomer?.email
  
  const [createOrder] = useMutation(CREATE_ORDER)

  const CreateOrder = async () => {
    try{
      const orderFields = {
        shipping: R.omit(['name', 'phone', 'address1'], checkoutValues),
        billing: R.omit(['name', 'phone', 'address1'], checkoutValues),
        paymentMethod,
        shippingMethod,
        promoCode,
        shippingCost: 0
      }
      const res = await createOrder({ variables: {...orderFields} }) 
      if(paymentMethod === 'cash') {
              props.enqueueSnackbar('Your order has been created successfully', { variant: 'success'})
              setCart([])
              Router.push({ pathname: `/order/${res.data.addOrder._id}` })
 }
    }
    catch (error) {
      if (error?.graphQLErrors) {
        props.enqueueSnackbar(error.graphQLErrors[0].message, {
          variant: 'error',
        })
      } else props.enqueueSnackbar('something went wrong', { variant: 'error' })
    }
  }

  const address = R.pathOr({}, ['getCurrentCustomer', 'address', '0'], data)
  const checkIfHasAddress = Object.values(address).some((address) => !R.isNil(address))

  useEffect(() => {
    if(checkIfHasAddress) setView(false) 
    if(data) {
      const name = data?.getCurrentCustomer?.name
      const phone = data?.getCurrentCustomer?.phone
      setcheckoutValues({ name, phone, ...data?.getCurrentCustomer?.address[0]  })
    }
  }, [data])
  

  const classes = useStyles()

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
                    <h3> Logged as {email}</h3>
                  </div>
                  <div>
                    <h4
                      onClick={() => {
                        Cookies.remove('token')
                        window.location = '/'
                      }}
                    >
                      {' '}
                      Log out{' '}
                    </h4>
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
                            <em> {(checkoutValues || checkIfHasAddress) ?  <AiOutlineCheck /> : 1} </em> Shipping Details
                          </h5>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        {View ? (
                          <ShippingDetails 
                            data={data}
                            checkoutValues={checkoutValues}
                            setView={setView} 
                            setcheckoutValues={setcheckoutValues}
                            setPromocode={setPromocode}
                          />
                        ) : (
                          <EditShipping 
                            setView={setView} 
                            // data={data}
                            checkoutValues={checkoutValues}
                          />
                        )}
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                      >
                        <h5>
                          <em>{shippingMethod ? <AiOutlineCheck /> : 2}</em> Delivery Method
                        </h5>
                      </AccordionSummary>
                      <DeliveryMethod shippingMethod={shippingMethod} setShippingMethod={setShippingMethod} />
                    </Accordion>
                    <Accordion>
                      <AccordionSummary
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                      >
                        <h5>
                          <em> {paymentMethod ? <AiOutlineCheck /> : 3} </em> Payment
                        </h5>
                      </AccordionSummary>
                      <PaymentMethod setPaymentMethod={setPaymentMethod} />
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
                        <a>
                            <Button onClick={CreateOrder}> Pay Now</Button>
                            </a>
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

export default withSnackbar(CheckoutModule)
