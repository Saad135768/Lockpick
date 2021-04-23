import { useForm, Controller } from 'react-hook-form'
import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'

import useStyles from "../../../CheckoutModule/style"

const EditDelivery = ({ save }) => {

  const { handleSubmit } = useForm({
 
  })

  const editdelivery = () => {
    save(true)
  }
  
  const classes = useStyles()

  return (
    
           <div className={`${classes.SHippingEdit} EditDelivery`}>

    <form autoComplete="off" noValidate onSubmit={handleSubmit(editdelivery)}>
      <div className={classes.ShippingEditContent}>
        <button  className={classes.SaveBtn} type="submit"> Save </button>
        <Grid container spacing={2}>
                   <Grid item lg={9} md={9} xs={12}>
                   <h6> Expedited Ground Shipping </h6>

                     </Grid>
                     <Grid item lg={3} md={3} xs={12}>
                     <h6> $ 0,00000 </h6>

                     </Grid>
                     <Grid item lg={12} md={12} xs={12}>
                     <p> Est. Delivery Time 2-4 business days</p>

                     </Grid>
                     </Grid>

       </div>
    </form>
    </div>

  )
}

export default EditDelivery
