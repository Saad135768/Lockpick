import React, { useRef } from 'react'
import useStyles from './style'
import Button from '../../../../common/Button'
import Dialog from '@material-ui/core/Dialog'
import { withSnackbar } from 'notistack'
import { DialogTitle } from '@material-ui/core'
import useStore from '../../../../store'
import Cookies from 'js-cookie'
import { useForm } from 'react-hook-form'
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_CURRENT_CUSTOMER, CHANGE_PASSWORD } from '../../data'


const CustomizedDialogs = (props) => {
  const { data } = useQuery(GET_CURRENT_CUSTOMER)
  const [changePassword] = useMutation(CHANGE_PASSWORD)
  const { register, handleSubmit, errors, watch, reset } = useForm({ mode: 'onBlur' })

  const openModal = useStore((state) => state.openModal)
  const setOpenModal = useStore((state) => state.setOpenModal)

  const passwordMatch = useRef({})
  passwordMatch.current = watch('password')

const ChangePassword = async ({ oldPass, password }) => {
  try{
    await changePassword({ variables: { password: oldPass, newPassword: password } })
    props.enqueueSnackbar('Your password has been changed successfully', { variant: 'success' })
    reset()
    setOpenModal()
  }
  catch (error) {
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
        <form onSubmit={handleSubmit(ChangePassword)}>
          <div className={classes.LeftRight}>
            <div className={classes.Left}>
              <img
                alt="logo-footer"
                src="../../static/images/white-logo.png"
              />
              <DialogTitle id="form-dialog-title">
                <h3> Hello { data?.getCurrentCustomer?.name} </h3>
              </DialogTitle>
              <Button className="NotActive" onClick={() => setOpenModal(5)} type="button"> Order History</Button>
              <Button className="NotActive" onClick={() => setOpenModal(4)} type="button">Account Information</Button>
              <Button onClick={() => setOpenModal(3)}>Change Password</Button>
              <div className={classes.Logout}>
                <h2 onClick={() => {
                  Cookies.remove('token')
                  window.location = '/'
                }}>LOG OUT</h2>
              </div>

            </div>
            <div className={classes.Right}>

              <input
                name="oldPass"
                className={classes.LoginInput}
                placeholder=" Old Password"
                type="password"
                ref={register({ required: 'This field is required' })}
              />
{errors.oldPass && (
                <p className={classes.errorMsg}>{errors.oldPass.message}</p>
              )}
              <input
                name="password"
                className={classes.LoginInput}
                placeholder=" New Password"
                type="password"
                ref={register({ required: 'This field is required' })}
              />
{errors.password && (
                <p className={classes.errorMsg}>{errors.password.message}</p>
              )}
              <input
                name="confirmPass"
                className={classes.LoginInput}
                placeholder="Confirm Password"
                type="password"
                ref={register({ required: 'This field is required', validate: (value) => value === passwordMatch.current || 'Passwords Must match', })}
              />
{errors.confirmPass && (
                <p className={classes.errorMsg}>{errors.confirmPass.message}</p>
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
