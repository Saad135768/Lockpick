import { useForm, Controller } from 'react-hook-form'
import React, { useState } from 'react'

import useStyles from "../../../CheckoutModule/style"

const EditShipping = ({ save }) => {

  const { handleSubmit } = useForm({
 
  })

  const editShipping = () => {
    save(true)
  }
  const classes = useStyles()

  return (
    <div className={classes.SHippingEdit}>
    <form autoComplete="off" noValidate onSubmit={handleSubmit(editShipping)}>
      <div className={classes.ShippingEditContent}>
        <button type="submit"> Save </button>
        <h5> Name </h5>
        <h5> Address</h5>
        <h5> Phone</h5>

       </div>
    </form>
    </div>

  )
}

export default EditShipping
