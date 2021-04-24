import React, { useState, useEffect } from 'react'
import { Container, Grid, Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core'
import Loader from 'react-loader-spinner'
import useStyles from './style'
import CheckoutSummary from './components/CheckoutSummary'
import Button from '../../common/Button'
import PaymentMethod from './components/PaymentMethod'
import EditShipping from './components/EditShipping'
import EditDelivery from './components/EditDelivery'
import EditPayment from './components/EditPayment'
import ShippingDetails from './components/ShippingDetails'
import DeliveryMethod from './components/DeliveryDetails'
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

  const { data } = useQuery(GET_CURRENT_CUSTOMER, { fetchPolicy: 'no-cache' })

  // Those are the states that toggle between components [shipping details, deleivery and payments methods]
  const [View, setView] = useState(true)
  const [view2, setView2] = useState()
  const [view3, setView3] = useState()

  const [checkoutValues, setcheckoutValues] = useState()
  const [paymentMethod, setPaymentMethod] = useState('cash')
  const [shippingMethod, setShippingMethod] = useState()
  const [promoCode, setPromocode] = useState()

  // Accordions state
  const [expandShippingAccordion, setExpandShippingAccordion] = useState(true)
  const [expandDeleiveryAccordion, setExpandDeleiveryAccordion] = useState(true)
  const [expandPaymentAccordion, setExpandPaymentAccordion] = useState(true)
  const [expandlastAccordion, setExpandlastAccordion] = useState()

  const setCart = useStore((state) => state.setCart)

  const email = R.pathOr('', ['getCurrentCustomer', 'email'], data)
  const address = R.pathOr({}, ['getCurrentCustomer', 'address', '0'], data)
  const checkIfHasAddress = Object.values(address).some((address) => !R.isNil(address))

  useEffect(() => {
    if (checkIfHasAddress) setView(false)
    if (data) {
      const name = data?.getCurrentCustomer?.name
      const phone = data?.getCurrentCustomer?.phone
      setcheckoutValues({ name, phone, ...data?.getCurrentCustomer?.address[0] })
    }
  }, [data])


  // Create order mutation
  const [createOrder, { loading }] = useMutation(CREATE_ORDER)

  const CreateOrder = async () => {
    try {
      const orderFields = {
        shipping: R.omit(['name', 'phone', 'address1'], checkoutValues),
        billing: R.omit(['name', 'phone', 'address1'], checkoutValues),
        paymentMethod,
        shippingMethod,
        // promoCode,
        shippingCost: 0
      }
      if (!shippingMethod || !paymentMethod) return props.enqueueSnackbar('please be sure to fill in all required fields', { variant: 'warning' })
      const res = await createOrder({ variables: { ...orderFields } })
      if (paymentMethod === 'cash') {
        props.enqueueSnackbar('Your order has been created successfully', { variant: 'success' })
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


  const classes = useStyles()

  return (
    <div className={classes.CheckoutHolder}>
      <Container>
        <Grid container justify='center'>
          <Grid item lg={11} md={11} sm={12} xs={12}>
            <Grid container spacing={4}>
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
                      Log out
                    </h4>
                  </div>
                </div>

                <div className={classes.ShippingDetails}>
                  <div className={classes.root}>
                    <Accordion expanded={expandShippingAccordion} onChange={() => setExpandShippingAccordion(!expandShippingAccordion)}>
                      <AccordionSummary
                        aria-controls='panel1bh-content'
                        id='panel1bh-header'
                      >
                        <Typography className={classes.heading}>
                          <h5>
                            <em> {!View ? <AiOutlineCheck /> : 1} </em> Shipping Details
                          </h5>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        {View ? (
                          <ShippingDetails
                            checkoutValues={checkoutValues}
                            setView={setView}
                            setcheckoutValues={setcheckoutValues}
                            setExpandDeleiveryAccordion={setExpandDeleiveryAccordion}
                          />
                        ) : (
                          <EditShipping
                            setView={setView}
                            checkoutValues={checkoutValues}
                          />
                        )}
                      </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expandDeleiveryAccordion} onChange={() => setExpandDeleiveryAccordion(!expandDeleiveryAccordion)}>
                      <AccordionSummary
                        aria-controls='panel2bh-content'
                        id='panel2bh-header'
                      >
                        <h5>
                          <em>{view2 ? <AiOutlineCheck /> : 2}</em> Delivery Method
                        </h5>
                      </AccordionSummary>
                      {
                        view2 ? (<EditDelivery
                          shippingMethod={shippingMethod}
                          setView2={setView2}
                        />) : (
                          <DeliveryMethod
                            shippingMethod={shippingMethod}
                            setShippingMethod={setShippingMethod}
                            setView2={setView2}
                            setExpandPaymentAccordion={setExpandPaymentAccordion}
                            setExpandlastAccordion={setExpandlastAccordion}
                          />
                        )
                      }

                    </Accordion>
                    <Accordion expanded={expandPaymentAccordion} onChange={() => setExpandPaymentAccordion(!expandPaymentAccordion)}>
                      <AccordionSummary
                        aria-controls='panel3bh-content'
                        id='panel3bh-header'
                      >
                        <h5>
                          <em> {!view3 ? <AiOutlineCheck /> : 3} </em> Payment
                        </h5>
                      </AccordionSummary>
                      {view3 ? <PaymentMethod
                        setPaymentMethod={setPaymentMethod}
                        setExpandlastAccordion={setExpandlastAccordion}
                        setView3={setView3}
                      /> : <EditPayment
                        paymentMethod={paymentMethod}
                        setView3={setView3}
                      />
                      }
                    </Accordion>

                    <Accordion expanded={expandlastAccordion} onChange={() => setExpandlastAccordion(!expandlastAccordion)}>
                      <AccordionSummary
                        aria-controls='panel4bh-content'
                        id='panel4bh-header'
                      >
                        <h5>
                          <em> 4</em> Place Order
                        </h5>
                      </AccordionSummary>
                      <AccordionDetails>
                        <a>
                          <Button onClick={CreateOrder}>{!loading ? 'Proceed to payment' : <Loader
                            type="Oval"
                            color="#fff"
                            height={30}
                            width={30}
                          />}</Button>
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
                <CheckoutSummary setPromocode={setPromocode} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default withSnackbar(CheckoutModule)
