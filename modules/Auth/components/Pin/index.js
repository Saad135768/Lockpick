import React, { useState } from 'react'
import useStyles from './style'
import { useMutation } from '@apollo/react-hooks'
import Button from '../../../../common/Button'
import Dialog from '@material-ui/core/Dialog'
import { DialogTitle } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { withSnackbar } from 'notistack'
import { VERIFY_PIN } from '../../data'
import useStore from '../../../../store'

const CustomizedDialogs = ({ username, setPin, ...props }) => {
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
  })

  const openModal = useStore((state) => state.openModal)
  const setOpenModal = useStore((state) => state.setOpenModal)
  const [verifyPin] = useMutation(VERIFY_PIN)

  const VerifyPin = async ({ pin }) => {
    try {
     const res = await verifyPin({ variables: { username, pin, verificationStrategy: 'email' } })
     setPin(res.data.verifyPin) 
     setOpenModal(8)
  
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
        // disableBackdropClick
        // disableEscapeKeyDown
      >
        <form onSubmit={handleSubmit(VerifyPin)}>
          <div>
          <img alt='logo' src='https://image.devteam9260.workers.dev/?width=300&image=https://hbs-static.s3.eu-west-1.amazonaws.com/product/5fc5fa160412b572360a4771/a3e86233-735b-4504-ace9-6d8a409e74c0.png' />
            <DialogTitle id="form-dialog-title">
              <h3> Enter Pin code </h3>
            </DialogTitle>
            <input
              name='pin'
              className={classes.LoginInput}
              placeholder="Pin"
              ref={register({
                required: 'This field is required',
             
              })}
            />
          {errors.pin && (
              <p className={classes.errorMsg}>{errors.pin.message}</p>
            )}
            <Button> Submit </Button>
          </div>
        </form>
      </Dialog>
    </div>
  )
}

export default withSnackbar(CustomizedDialogs)
