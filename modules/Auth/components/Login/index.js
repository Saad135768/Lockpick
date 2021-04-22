import React from 'react'
import useStyles from './style'
import { useMutation } from '@apollo/react-hooks'
import Cookies from 'js-cookie'
import Button from '../../../../common/Button'
import Dialog from '@material-ui/core/Dialog'
import { DialogTitle } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { withSnackbar } from 'notistack'
import { LOGIN_MUTATION } from '../../data'
import useStore from './../../../../store';

const CustomizedDialogs = (props) => {
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
  })
  const openModal = useStore((state) => state.openModal)
  const setOpenModal = useStore((state) => state.setOpenModal)
  const [login] = useMutation(LOGIN_MUTATION)
  const customerLogin = async ({ password, username }) => {
    try {
      const res = await login({
        variables: {
          username: username,
          password,
          accountType: 'customer',
        },
      })
      const token = res.data.login
      if (token) {
        props.enqueueSnackbar('Welcome back!', { variant: 'success' })
        Cookies.set('token', token)
        window.location = '/'
      }
    } catch (error) {
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
      >
        <form onSubmit={handleSubmit(customerLogin)}>
          <div>
            <img alt="logo-footer" src="../../static/images/login-logo.png" />
            <DialogTitle id="form-dialog-title">
              <h3> Welcome Back </h3>
            </DialogTitle>
            <input
              name='username'
              className={classes.LoginInput}
              placeholder="Email"
              type='email'
              ref={register({
                required: 'This field is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email',
                },
              })}
            />
            {errors.username && (<p className={classes.errorMsg}>{errors.username.message}</p>)}
            <input
              name='password'
              className={classes.LoginInput}
              placeholder="Password"
              type='Password'
              ref={register({
                required: 'This field is required',
                minLength: {
                  value: 6,
                  message: 'Password must be atleast 6 characters',
                },
              })}
            />
            {errors.password && (<p className={classes.errorMsg}>{errors.password.message}</p>)}
            <Button> LOG IN </Button>
            <div className={classes.register}>
              <h2 onClick={() => setOpenModal(2)}>Register</h2>
            </div>
          </div>
        </form>
      </Dialog>
    </div>
  )
}

export default withSnackbar(CustomizedDialogs)
