import React from 'react'
import Grid from '@material-ui/core/Grid'
import useStyles from '../../style'

const EditPayment = ({ setView3, paymentMethod }) => {

  const classes = useStyles()

  return (
    <div className={`${classes.SHippingEdit} EditDelivery`}>
        <div className={classes.ShippingEditContent}>
          <button className={classes.SaveBtn} onClick={() => setView3(true)}>
            Edit
          </button>
          <Grid container spacing={2}>
            <Grid item lg={9} md={9} xs={12}>
              <h6>your payment method is: { paymentMethod }</h6>
            </Grid>
          </Grid>
        </div>
    </div>
  )
}

export default EditPayment
