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
        <h5> Name: {checkoutValues?.name} </h5>
        <h5> Phone: {checkoutValues?.phone} </h5>
        <h5>
          
          Address: {AddressChecker(checkoutValues?.street)}
          {AddressChecker(checkoutValues?.address1)}
          {AddressChecker(checkoutValues?.state)}
          {AddressChecker(checkoutValues?.city)}
          {AddressChecker(checkoutValues?.country)}
          {AddressChecker(checkoutValues?.postalCode)}
        </h5>
      </div>
    </div>
  )
}

export default EditShipping
