import React from 'react'
import useStyles from './style'
import Button from '../../../../common/Button'
import Dialog from '@material-ui/core/Dialog'
import { withSnackbar } from 'notistack'
import { DialogTitle } from '@material-ui/core'
import useStore from '../../../../store'
import Cookies from 'js-cookie'
import { useForm } from 'react-hook-form'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { GET_CURRENT_CUSTOMER } from '../../data'
import { EDIT_CUSTOMER } from './../../../../commonData/'


const CustomizedDialogs = (props) => {
  const { register, handleSubmit, errors, formState } = useForm({ mode: 'onBlur' })
  const { isDirty } = formState
  const { data } = useQuery(GET_CURRENT_CUSTOMER, { fetchPolicy: 'no-cache'})
  const openModal = useStore((state) => state.openModal)
  const setOpenModal = useStore((state) => state.setOpenModal)

  const [editCustomer] = useMutation(EDIT_CUSTOMER)

  const EditCustomer = async ({ name, phone, ...values }) => {
    try{
      if(isDirty) {
        await editCustomer({ variables: { name, phone, address: {...values} }})
        props.enqueueSnackbar('Your data has been updated', { variant: 'success' })
        setOpenModal()
      }
    } catch (error) {
    if (error?.graphQLErrors) {
      props.enqueueSnackbar(error.graphQLErrors[0].message, {
        variant: 'error',
      })
    } else props.enqueueSnackbar('something went wrong', { variant: 'error' })
  }
  }
  const classes = useStyles()
  return (
    <div>
      <Dialog
        className={classes.root}
        onClose={() => setOpenModal()}
        aria-labelledby="customized-dialog-title"
        open={openModal}
      >
        <form onSubmit={handleSubmit(EditCustomer)}>
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
              <Button onClick={() => setOpenModal(4)}>Account Information</Button>
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
                defaultValue={data?.getCurrentCustomer?.name}
               ref={register({ required: 'This field is required' })}
              />
              {errors.name && ( 
               <p className={classes.errorMsg}>{errors.name.message}</p> 
              )} 

              <input
                name="email"
                className={classes.LoginInput}
                placeholder="* Email"
                type="email"
                disabled
                defaultValue={data?.getCurrentCustomer?.email}
               ref={register({ required: 'This field is required' })}
              />
              {errors.email && ( 
               <p className={classes.errorMsg}>{errors.email.message}</p> 
              )} 
              {/* <input
                name="password"
                className={classes.LoginInput}
                placeholder="* password"
                type="password"
                ref={register({ required: 'This field is required' })}
              /> 
              {errors.password && ( 
               <p className={classes.errorMsg}>{errors.password.message}</p> 
              )}  */}

              <input
                name="phone"
                className={classes.LoginInput}
                placeholder="* Phone"
                type="tel"
                defaultValue={data?.getCurrentCustomer?.phone}
               ref={register({ required: 'This field is required' })}
              />
              {errors.phone && ( 
               <p className={classes.errorMsg}>{errors.phone.message}</p> 
              )} 
              <input
                name="country"
                className={classes.LoginInput}
                placeholder="* Country"
                type="text"
                defaultValue={data?.getCurrentCustomer?.address[0]?.country}
               ref={register({ required: 'This field is required' })}
              />
              {errors.country && ( 
                 <p className={classes.errorMsg}>{errors.country.message}</p> 
              )} 

              <input
                name="city"
                className={classes.LoginInput}
                placeholder="* Region/City"
                type="text"
                defaultValue={data?.getCurrentCustomer?.address[0]?.city}
                ref={register({ required: 'This field is required' })}
              />
              {errors.city && (
                <p className={classes.errorMsg}>{errors.city.message}</p>
              )}

              <input
                name="state"
                className={classes.LoginInput}
                placeholder="* State"
                type="text"
                defaultValue={data?.getCurrentCustomer?.address[0].state}
                ref={register({ required: 'This field is required' })}
              />
              {errors.state && (
                <p className={classes.errorMsg}>{errors.state.message}</p>
              )}
              <input
                name="street"
                className={classes.LoginInput}
                placeholder="* Street"
                type="text"
                defaultValue={data?.getCurrentCustomer?.address[0].street}
                ref={register({ required: 'This field is required' })}
              />
              {errors.street && (
                <p className={classes.errorMsg}>{errors.street.message}</p>
              )}
              <input
                name="postalCode"
                className={classes.LoginInput}
                placeholder="* PostalCode"
                type="text"
                defaultValue={data?.getCurrentCustomer?.address[0].postalCode}
                ref={register({ required: 'This field is required' })}
              />
              {errors.postalCode && (
                <p className={classes.errorMsg}>{errors.postalCode.message}</p>
              )}
               <div className={classes.SaveBtn}>
               <Button type='submit'>Save </Button>
               </div>

            </div>
          </div>
        </form>
      </Dialog>
    </div>
  )
}

export default withSnackbar(CustomizedDialogs)
