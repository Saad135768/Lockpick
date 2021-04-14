import React, { useState, useEffect } from 'react'
import useStyles from './style'
import Input from '../../../../common/Input'
import Button from '../../../../common/Button'
import Dialog from '@material-ui/core/Dialog'
import Cookies from 'js-cookie'
import { useMutation } from '@apollo/react-hooks'
import { useForm } from 'react-hook-form'
import { withSnackbar } from 'notistack'
import { REGISTER_MUTATION } from '../../data'

const CustomizedDialogs = (props) => {
  const [open, setOpen] = useState(false)
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
  })

  const [Register] = useMutation(REGISTER_MUTATION)

  
    useEffect(() => {
      ['name', 'password', 'email', 'phone', 'country', 'city', 'address'].map((name) => register(name, { required: 'Required' }))
    }, [register])
  
  const addCustomer = async ({
    name,
    email,
    password,
    phone,
    country,
    city,
    address,
  }) => {
    try {
      const res = await Register({
        variables: {
          username: email,
          email,
          name,
          password,
          phone,
          address: { country, city, address1: address },
          sendPin: false,
          verificationStrategy: 'email',
          type: 'user',
        },
      })
      const token = res.data.res.data.addCustomerAccount.token
      if (token) {
        props.enqueueSnackbar('Welcome back!', { variant: 'success' })
        Cookies.set('token', token)
        window.location = '/'
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
      <Button variant="outlined" color="primary" onClick={() => setOpen(true)}>
        Sign Up
      </Button>
        <Dialog
          className={classes.root}
          onClose={() => setOpen(false)}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
      <form onSubmit={handleSubmit(addCustomer)}>
          <div className={classes.LeftRight}>
            <div className={classes.Left}>
              <img
                alt="logo-footer"
                src="../../static/images/register-logo.png"
              />

              <Button>REGISTER</Button>
              <div className={classes.register}>
                <a href="#">
                  <h2>* Required Inputs</h2>
                </a>
              </div>

            </div>
            <div className={classes.Right}>
                
                  <Input
                  name="name"
                    className={classes.LoginInput}
                    placeholder="* Full Name"
                    type="text"
                    ref={register}
              />
              {errors.name && (
                <p className={classes.errorMsg}>{errors.name.message}</p>
              )}
                
                  <Input
                  name="country"
                    className={classes.LoginInput}
                    placeholder="* Country"
                    type="text"
                    ref={register}
              />
              {errors.country && (
                <p className={classes.errorMsg}>{errors.country.message}</p>
              )}
                
                  <Input
                  name="city"
                    className={classes.LoginInput}
                    placeholder="* Region/City"
                    type="text"
                    ref={register}
              />
              {errors.city && (
                <p className={classes.errorMsg}>{errors.city.message}</p>
              )}
                
                  <Input
                  name="address"
                    className={classes.LoginInput}
                    placeholder="* Address"
                    type="text"
                    ref={register}
              />
              {errors.address && (
                <p className={classes.errorMsg}>{errors.address.message}</p>
              )}
                
                  <Input
                  name="email"
                    className={classes.LoginInput}
                    placeholder="* Email"
                    type="email"
                    ref={register}
              />
              {errors.email && (
                <p className={classes.errorMsg}>{errors.email.message}</p>
              )}

                
                  <Input
                  name="phone"
                    className={classes.LoginInput}
                    placeholder="* Phone"
                    type="tel"
                    ref={register}
              />
              {errors.phone && (
                <p className={classes.errorMsg}>{errors.phone.message}</p>
              )}
            </div>
          </div>
      </form>
        </Dialog>
    </div>
  )
}

export default withSnackbar(CustomizedDialogs)
