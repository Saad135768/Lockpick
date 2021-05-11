import React from 'react'
import useStyles from '../../../Checkout/style'
import Grid from '@material-ui/core/Grid'
import Button from '../../../../common/Button'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import { useForm } from 'react-hook-form'
import { withSnackbar } from 'notistack'
import { useMutation } from '@apollo/react-hooks'
import { EDIT_CUSTOMER } from './../../../../commonData'
import { states, countries } from '../../../../constants'

const ShippingDetails = ({
  setView,
  setcheckoutValues,
  checkoutValues,
  setExpandDeleiveryAccordion,
  FedEx,
  ...props
}) => {
  const { handleSubmit, errors, register } = useForm({ mode: 'onBlur' })
  const classes = useStyles()

  const [editCustomer] = useMutation(EDIT_CUSTOMER, { fetchPolicy: 'no-cache' })

  const EditCustomer = async ({ name, phone, ...values }) => {
    try {
      await editCustomer({ variables: { name, phone, address: { ...values } } })
      setcheckoutValues({ name, phone, ...values })
      await FedEx()
      props.enqueueSnackbar('Your data has been updated', { variant: 'success' })
      setView()
      setExpandDeleiveryAccordion(true)
    } 
    catch (error) {
      if (error?.graphQLErrors) {
        props.enqueueSnackbar(error.graphQLErrors.message, { variant: 'error' })
      } 
      else props.enqueueSnackbar('something went wrong', { variant: 'error' })
    }
  }

  return (
    <div className={classes.schoolinfoHolder}>

      <AccordionDetails>
        <form onSubmit={handleSubmit(EditCustomer)}>
          <div className={classes.ShippingDetailsInfo}>
            <span> *Full Name</span>
            <input
              ref={register({ required: 'This field is required' })}
              name="name"
              className={classes.CheckoutInput}
              placeholder="Full Name"
              type="text"
              defaultValue={checkoutValues?.name}
            />
            {errors.name && (
              <p className={classes.errorMsg}>{errors.name.message}</p>
            )}

            <span> *Phone</span>
            <input
              ref={register({ required: 'This field is required' })}
              name="phone"
              className={classes.CheckoutInput}
              placeholder="Phone"
              type="text"
              defaultValue={checkoutValues?.phone}
            />
            {errors.phone && (
              <p className={classes.errorMsg}>{errors.phone.message}</p>
            )}

            <span>*Street</span>
            <input
              ref={register({ required: 'This field is required' })}
              name="street"
              className={classes.CheckoutInput}
              placeholder="Street"
              type="text"
              defaultValue={checkoutValues?.street}
            />
            {errors.address && (
              <p className={classes.errorMsg}>{errors.address.message}</p>
            )}
            <Grid container spacing={3}>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <span> *Country</span>
                <select 
                  className={`${classes.CheckoutInput} select`}
                  ref={register({ required: 'This field is required' })}
                  name='country'
                  defaultValue={checkoutValues?.country}
                >
                <option value="" selected={!!!checkoutValues?.country} disabled hidden>
                  *Country
                </option>
                  {countries.map((state) => <option value={state.code}>{state.name}</option>)}
                </select>
                {errors.country && (
                  <p className={classes.errorMsg}>{errors.country.message}</p>
                )}
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
              <span> *State</span>
                <select 
                  className={`${classes.CheckoutInput} select`}
                  ref={register({ required: 'This field is required' })}
                  name='state'
                  defaultValue={checkoutValues?.state}
                >
                <option value="" selected={!!!checkoutValues?.state} disabled hidden>
                  *State
                </option>
                  {states.map((state) => <option value={state.code}>{state.name}</option>)}
                </select>
                {errors.state && (
                  <p className={classes.errorMsg}>{errors.state.message}</p>
                )}
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
              <span> *City</span>
                <input
                  ref={register({ required: 'This field is required' })}
                  name="city"
                  className={classes.CheckoutInput}
                  placeholder="City"
                  type="text"
                  defaultValue={checkoutValues?.city}
                />
                {errors.city && (
                  <p className={classes.errorMsg}>{errors.city.message}</p>
                )}
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <span> *Zip / Postal Code"</span>
                <input
                  ref={register({ required: 'This field is required' })}
                  name="postalCode"
                  className={classes.CheckoutInput}
                  placeholder="Zip / Postal Code"
                  type="text"
                  defaultValue={
                    checkoutValues?.postalCode
                  }
                />
                {errors.zipCode && (
                  <p className={classes.errorMsg}>{errors.zipCode.message}</p>
                )}
              </Grid>
            </Grid>
            <div className={classes.ContinueBtn}>
            <Button> Continue</Button>

            </div>
          </div>
        </form>
      </AccordionDetails>
    </div>
  )
}

export default withSnackbar(ShippingDetails)
