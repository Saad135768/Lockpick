import React, { useRef } from 'react'
import useStyles from './style'
import { useMutation } from '@apollo/react-hooks'
import Button from '../../../../common/Button'
import Dialog from '@material-ui/core/Dialog'
import { DialogTitle } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { withSnackbar } from 'notistack'
import { RESET_PASSWORD } from '../../data'
import useStore from '../../../../store'
import Cookies from 'js-cookie'

const CustomizedDialogs = ({ pin, ...props }) => {
  const { register, handleSubmit, errors, watch } = useForm({
    mode: 'onBlur',
  })
  const passwordMatch = useRef({})
  passwordMatch.current = watch('password')
  const openModal = useStore(state => state.openModal)
  const setOpenModal = useStore(state => state.setOpenModal)
  const [resetPassword] = useMutation(RESET_PASSWORD)

  const ResetPassword = async ({ password }) => {
    try{
     const res = await resetPassword({ variables: { password, token: pin } })
      const token = res.data.resetPassword
      if (token) {
        props.enqueueSnackbar('Welcome back!', { variant: 'success' })
        Cookies.set('token', token)
        window.location = '/'
      }
    }catch (error) {
      if (error?.graphQLErrors) {
        console.log(`error`, error)
        props.enqueueSnackbar(error?.graphQLErrors[0]?.message, {
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
        aria-labelledby="customized-dialog-title"
        open={openModal}
        onClose={() => setOpenModal()}
        // disableBackdropClick
        // disableEscapeKeyDown
      >
        <form onSubmit={handleSubmit(ResetPassword)}>
          <div>
            <img
              alt="logo"
              src="https://image.devteam9260.workers.dev/?width=300&image=https://hbs-static.s3.eu-west-1.amazonaws.com/product/5fc5fa160412b572360a4771/a3e86233-735b-4504-ace9-6d8a409e74c0.png"
            />
            <DialogTitle id="form-dialog-title">
              <h3> Enter your new password</h3>
            </DialogTitle>
            <input
              name="password"
              className={classes.LoginInput}
              placeholder=" New Password"
              type="password"
              ref={register({
                required: 'This field is required',
                minLength: {
                  value: 6,
                  message: 'Password must be atleast 6 characters',
                },
              })}
            />
            {errors.password && (
              <p className={classes.errorMsg}>{errors.password.message}</p>
            )}
            <input
              name="confirmPass"
              className={classes.LoginInput}
              placeholder="Confirm Password"
              type="password"
              ref={register({
                required: 'This field is required',
                validate: value =>
                  value === passwordMatch.current || 'Passwords Must match',
              })}
            />
            {errors.confirmPass && (
              <p className={classes.errorMsg}>{errors.confirmPass.message}</p>
            )}

            <Button> Submit </Button>
          </div>
        </form>
      </Dialog>
    </div>
  )
}

export default withSnackbar(CustomizedDialogs)
