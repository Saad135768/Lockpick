import React from 'react'
import useStyles from './style'
import Button from '../../../../common/Button'
import Dialog from '@material-ui/core/Dialog'
import { withSnackbar } from 'notistack'
import { DialogTitle } from '@material-ui/core'
import useStore from '../../../../store'
import Cookies from 'js-cookie'
import { useForm } from 'react-hook-form'
import { useQuery } from '@apollo/react-hooks';
import { GET_CURRENT_CUSTOMER } from '../../data'


const CustomizedDialogs = () => {
  const { data } = useQuery(GET_CURRENT_CUSTOMER)
  const openModal = useStore((state) => state.openModal)
  const setOpenModal = useStore((state) => state.setOpenModal)
  // const { register, handleSubmit, errors } = useForm({ mode: 'onBlur' })
  const classes = useStyles()

  return (
    <div>
      <Dialog
        className={classes.root}
        onClose={() => setOpenModal()}
        aria-labelledby="customized-dialog-title"
        open={openModal}
      >
        {/* <form onSubmit={handleSubmit()}> */}
          <div className={classes.LeftRight}>
            <div className={classes.Left}>
              <img
                alt="logo-footer"
                src="../../static/images/white-logo.png"
              />
              <DialogTitle id="form-dialog-title">
                <h3> Hello { data?.getCurrentCustomer?.name } </h3>
              </DialogTitle>
              <Button className="NotActive" type='button'> Order History</Button>
              <Button onClick={() => setOpenModal(4)} type='button'>Account Information</Button>
              <Button className="NotActive" onClick={() => setOpenModal(3)} type='button'>Change Password</Button>
              <div className={classes.Logout}>
                <h2 onClick={() => {
                  Cookies.remove('token')
                  window.location = '/'
                }}>LOG OUT</h2>
              </div>

            </div>
            <div className={classes.Right}>

              <input
                name="name"
                className={classes.LoginInput}
                placeholder="* Full Name"
                type="text"
                value={data?.getCurrentCustomer?.name}
                disabled
                // ref={register({ required: 'This field is required' })}
              />
              {/* {errors.name && ( */}
                {/* // <p className={classes.errorMsg}>{errors.name.message}</p> */}
              {/* )} */}

              <input
                name="email"
                className={classes.LoginInput}
                placeholder="* Email"
                type="email"
                value={data?.getCurrentCustomer?.email}
                disabled
                // ref={register({ required: 'This field is required' })}
              />
              {/* {errors.email && ( */}
                {/* // <p className={classes.errorMsg}>{errors.email.message}</p> */}
              {/* )} */}
              {/* <input
                name="password"
                className={classes.LoginInput}
                placeholder="* password"
                type="password"
                ref={register({ required: 'This field is required' })}
              /> */}
              {/* {errors.password && ( */}
                {/* // <p className={classes.errorMsg}>{errors.password.message}</p> */}
              {/* )} */}

              <input
                name="phone"
                className={classes.LoginInput}
                placeholder="* Phone"
                type="tel"
                value={data?.getCurrentCustomer?.phone}
                disabled
                // ref={register({ required: 'This field is required' })}
              />
              {/* {errors.phone && ( */}
                {/* // <p className={classes.errorMsg}>{errors.phone.message}</p> */}
              {/* )} */}
              <input
                name="country"
                className={classes.LoginInput}
                placeholder="* Country"
                type="text"
                value={data?.getCurrentCustomer?.address[0]?.country}
                disabled
                // ref={register({ required: 'This field is required' })}
              />
              {/* {/* {errors.country && ( 
                 <p className={classes.errorMsg}>{errors.country.message}</p> 
              )} */}

              <input
                name="city"
                className={classes.LoginInput}
                placeholder="* Region/City"
                type="text"
                value={data?.getCurrentCustomer?.address[0]?.city}
                disabled
                // ref={register({ required: 'This field is required' })}
              />
              {/* {errors.city && (
                <p className={classes.errorMsg}>{errors.city.message}</p>
              )} */}

              {/* <input
                name="address"
                className={classes.LoginInput}
                placeholder="* Address"
                type="text"
                value={data?.getCurrentCustomer?.name}
                disabled
                ref={register({ required: 'This field is required' })}
              /> */}
              {/* {errors.address && (
                <p className={classes.errorMsg}>{errors.address.message}</p>
              )} */}
            </div>
          </div>
        {/* </form> */}
      </Dialog>
    </div>
  )
}

export default withSnackbar(CustomizedDialogs)
