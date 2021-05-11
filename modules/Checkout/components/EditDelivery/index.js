import React from 'react'
import Grid from '@material-ui/core/Grid'
import useStyles from '../../../Checkout/style'

const EditDelivery = ({ setView2, shippingMethod }) => {

  const editdelivery = () => {
    setView2(false)
  }

  const classes = useStyles()

  return (
    <div className={`${classes.SHippingEdit} EditDelivery`}>
        <div className={classes.ShippingEditContent}>
          <button className={classes.SaveBtn} onClick={editdelivery}>
            Edit
          </button>
          <Grid container spacing={2}>
            <Grid item lg={9} md={9} xs={12}>
              <h6>{ shippingMethod === 'normal' ? 'Expedited Ground Shipping' : '3 day Shipping' }</h6>
            </Grid>
            <Grid item lg={3} md={3} xs={12}>
              <h6> ${shippingRate.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} </h6>
            </Grid>
            <Grid item lg={12} md={12} xs={12}>
              <p>{shippingMethod === 'normal'&& 'Est. Delivery Time 2-4 business days' }</p>
            </Grid>
          </Grid>
        </div>
    </div>
  )
}

export default EditDelivery
