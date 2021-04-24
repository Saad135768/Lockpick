import React from 'react'
import useStyles from '../../../CheckoutModule/style'

const EditShipping = ({ setView, data, checkoutValues, ...props }) => {

  const { name, phone, city, state, country,  address1, street, postalCode  } = checkoutValues

  const AddressChecker = address => {
    if (address) return `${address}, `
  }

  const classes = useStyles()

  return (
    <div className={classes.SHippingEdit}>
      <div className={classes.ShippingEditContent}>
        <button className={classes.SaveBtn} onClick={() => setView(true)}>
          
          Edit
        </button>
        <h6> Name: {checkoutValues?.name} </h6>
        <h6> Phone: {checkoutValues?.phone} </h6>
        <h6>
          
          Address: {AddressChecker(checkoutValues?.street)}
          {AddressChecker(checkoutValues?.state)}
          {AddressChecker(checkoutValues?.city)}
          {AddressChecker(checkoutValues?.country)}
          {AddressChecker(checkoutValues?.postalCode)}
        </h6>
      </div>
    </div>
  )
}

export default EditShipping
