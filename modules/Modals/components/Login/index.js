import React, { useState, useEffect } from 'react'
import useStyles from './style'
import { useMutation } from '@apollo/react-hooks'
import Cookies from 'js-cookie'
import Input from '../../../../common/Input'
import Button from '../../../../common/Button'
import Modal from '@material-ui/core/Modal'
import { DialogTitle } from '@material-ui/core'
import { useForm, Controller } from 'react-hook-form'
import { withSnackbar } from 'notistack'
import { LOGIN_MUTATION } from '../../data'

const CustomizedDialogs = (props) => {
  const [open, setOpen] = useState()
  const { register, handleSubmit, errors, control, watch } = useForm({
    mode: 'onBlur',
  })
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

// const validationSchema = [
//   {
//     name: 'username',
//     validations: {
//       required: 'Required',
//       pattern: {
//         value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//         message: 'Invalid email',
//       },
//     },
//   },
//   {
//     name: 'password',
//     validations: {
//         required: 'Required',
//         minLength: {
//           value: 6,
//           message: 'Password must be atleast 6 characters',
//         },
//       }
// },
// ]

//   useEffect(() => {
//     validationSchema.map(({ name, validations }) => register(name, validations))
//   }, [register])
  const classes = useStyles()

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={() => setOpen(true)}>
        Login
      </Button>

      <form onSubmit={handleSubmit(customerLogin)}>
      <Modal
        className={classes.root}
        onClose={() => setOpen(false)}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <div>
        <img alt="logo-footer" src="../../static/images/login-logo.png" />
        <DialogTitle id="form-dialog-title">
          <h3> Welcome Back </h3>
        </DialogTitle>
        <Controller
          control={control}
          name='username'
          as={
          <Input 
          className={classes.LoginInput} 
          placeholder="Email"
          type='email'
          ref={register}
        />}
        />
           {errors.username && ( <p className={classes.errorMsg}>{errors.username.message}</p> )}
         <Controller
          control={control}
          name='password'
          ref={register({ 
              required: 'This field is required', })}
          as={<Input 
          className={classes.LoginInput} 
          placeholder="Password"
          type='Password'
        />}
        />
        {errors.password && ( <p className={classes.errorMsg}>{errors.password.message}</p> )}
          <Button type='submit'> LOG IN </Button>
        <div className={classes.register}>
          <a href="#">
            <h2>Register</h2>
          </a>
        </div>
        <div></div>
        </div>
      </Modal>
        </form>
    </div>
  )
}

export default withSnackbar(CustomizedDialogs)
