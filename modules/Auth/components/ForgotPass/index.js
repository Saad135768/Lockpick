import React, { useRef } from 'react'
import useStyles from './style'
import { useMutation } from '@apollo/react-hooks'
import Button from '../../../../common/Button'
import Dialog from '@material-ui/core/Dialog'
import { DialogTitle } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { withSnackbar } from 'notistack'
import { FORGOT_PASSWORD } from '../../data'
import useStore from '../../../../store'

const CustomizedDialogs = ({ setUsername ,...props }) => {
  const { register, handleSubmit, errors, watch } = useForm({
    mode: 'onBlur',
  })

  const openModal = useStore((state) => state.openModal)
  const setOpenModal = useStore((state) => state.setOpenModal)
  const [forgotPassword] = useMutation(FORGOT_PASSWORD)

  const passwordMatch = useRef({})
  passwordMatch.current = watch('password')

  const ForgotPass = async ({ username }) => {
    try {
       await forgotPassword({
        variables: {
          username,
          accountType: 'customer',
          verificationStrategy: 'email',
        },
      })
      setUsername(username)
      props.enqueueSnackbar('A pin has been sent to your email', { variant: 'success' })
      setOpenModal(7)
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
        <form onSubmit={handleSubmit(ForgotPass)}>
          <div>
          <img alt='logo' src='https://image.devteam9260.workers.dev/?width=300&image=https://hbs-static.s3.eu-west-1.amazonaws.com/product/5fc5fa160412b572360a4771/a3e86233-735b-4504-ace9-6d8a409e74c0.png' />
            <DialogTitle id="form-dialog-title">
              <h3> Enter your username </h3>
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
            <Button> LOG IN </Button>
          </div>
        </form>
      </Dialog>
    </div>
  )
}

export default withSnackbar(CustomizedDialogs)
