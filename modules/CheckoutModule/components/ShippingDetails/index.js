import React, { useState } from 'react'
import useStyles from '../../../CheckoutModule/style'
import Grid from '@material-ui/core/Grid'
import Button from '../../../../common/Button'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

const ShippingDetails = ({ setView, setcheckoutValues, setPromocode, ...props }) => {
  const { handleSubmit, errors, register, formState, watch } = useForm({ mode: 'onBlur' })
  const { isSubmitSuccessful  } = formState
  const classes = useStyles()
  isSubmitSuccessful && setView() 
  return (
    <div className={classes.schoolinfoHolder}>
        <button className={classes.EditBtn} type='button' onClick={() =>  setView()}>
          Save
        </button>

        <AccordionDetails>
      <form onSubmit={handleSubmit((values) => setcheckoutValues(values))}>
          <div className={classes.ShippingDetailsInfo}>
            <span> *Full Name</span>
            <input
              ref={register({ required: 'This field is required' })}
              // name="name"
              className={classes.CheckoutInput}
              placeholder="Full Name"
              type="text"
            />
            {errors.name && (
              <p className={classes.errorMsg}>{errors.name.message}</p>
            )}
            {/* <span> *LAST Name</span>
          <input
          ref={register({ required: 'This field is required' })}
            name="name"
            className={classes.CheckoutInput}
            placeholder="Last Name"
            type="text"
          /> */}
            <span> *Phone</span>
            <input
              ref={register({ required: 'This field is required' })}
              name="phone"
              className={classes.CheckoutInput}
              placeholder="Phone"
              type="text"
            />
            {errors.phone && (
              <p className={classes.errorMsg}>{errors.phone.message}</p>
            )}

            <span> *Address</span>
            <input
              ref={register({ required: 'This field is required' })}
              name="street"
              className={classes.CheckoutInput}
              placeholder="Address"
              type="text"
            />
            {errors.address && (
              <p className={classes.errorMsg}>{errors.address.message}</p>
            )}
            <Grid container spacing={3}>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <span> *Country</span>
                <input
                  ref={register({ required: 'This field is required' })}
                  name="country"
                  className={classes.CheckoutInput}
                  placeholder="Country"
                  type="text"
                />
                {errors.country && (
                  <p className={classes.errorMsg}>{errors.country.message}</p>
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
                />
                {errors.city && (
                  <p className={classes.errorMsg}>{errors.city.message}</p>
                )}
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <span> *State</span>
                <input
                  ref={register({ required: 'This field is required' })}
                  name="state"
                  className={classes.CheckoutInput}
                  placeholder="State"
                  type="text"
                />
                {errors.state && (
                  <p className={classes.errorMsg}>{errors.state.message}</p>
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

export default ShippingDetails
