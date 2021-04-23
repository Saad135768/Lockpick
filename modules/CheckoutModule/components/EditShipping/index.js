import React, {useState,  useEffect } from 'react'
import useStyles from '../../../CheckoutModule/style'

const EditShipping = ({ setView, data, setProfileData, profileData, ...props }) => {

  // useEffect(() => {
  //   setProfileData
  // }, [data, profileData])
  const name = data?.getCurrentCustomer?.name
  const phone = data?.getCurrentCustomer?.phone
  const {
    city,
    state,
    country,
    address1,
    street,
    postalCode,
  } = data?.getCurrentCustomer?.address[0]

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
        <h5> Name: {name} </h5>
        <h5> Phone: {phone} </h5>
        <h5>
          
          Address: {AddressChecker(street)}
          {AddressChecker(address1)}
          {AddressChecker(state)}
          {AddressChecker(city)}
          {AddressChecker(country)}
          {AddressChecker(postalCode)}
        </h5>
      </div>
    </div>
  )
}

export default EditShipping
