import React from 'react'
import useStyles from './style'
import Input from '../../../../common/Input'
import Button from '../../../../common/Button'
import Dialog from '@material-ui/core/Dialog'
import Cookies from 'js-cookie'
import { useMutation } from '@apollo/react-hooks'
import { useForm, Controller } from 'react-hook-form'
import { withSnackbar } from 'notistack'
import { REGISTER_MUTATION } from '../../data'

const CustomizedDialogs = () => {
  const [open, setOpen] = React.useState(false)
  const { register, handleSubmit, errors, control, watch } = useForm({
    mode: 'onBlur',
  })

  const [Register] = useMutation(REGISTER_MUTATION)

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
      // console.log(`res`, res)
      const token = res.data.res.data.addCustomerAccount.token
      if (token) {
        props.enqueueSnackbar('Welcome back!', { variant: 'success' })
        Cookies.set('token', token)
        window.location = '/'
      }
    } catch (error) {
      if (error.graphQLErrors) {
        props.enqueueSnackbar(error.graphQLErrors[0].message, {
          variant: 'error',
        })
      } else props.enqueueSnackbar('something went wrong', { variant: 'error' })
    }
  }
  // console.log(`watch()`, watch())
  const classes = useStyles()

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={() => setOpen(true)}>
        Sign Up
      </Button>
      <form onSubmit={handleSubmit(addCustomer)}>
        <Dialog
          className={classes.root}
          onClose={() => setOpen(false)}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <div className={classes.LeftRight}>
            <div className={classes.Left}>
              <img
                alt="logo-footer"
                src="../../static/images/register-logo.png"
              />

              <Button type="submit">REGISTER</Button>
              <div className={classes.register}>
                <a href="#">
                  <h2>* Required Inputs</h2>
                </a>
              </div>

              <div></div>
            </div>
            <div className={classes.Right}>
              <Controller
                control={control}
                name="name"
                as={
                  <Input
                    className={classes.LoginInput}
                    placeholder="* Full Name"
                    type="text"
                  />
                }
              />
              {errors.name && (
                <p className={classes.errorMsg}>{errors.name.message}</p>
              )}
              <Controller
                control={control}
                name="country"
                as={
                  <Input
                    className={classes.LoginInput}
                    placeholder="* Country"
                    type="text"
                  />
                }
              />
              {errors.country && (
                <p className={classes.errorMsg}>{errors.country.message}</p>
              )}
              <Controller
                control={control}
                name="city"
                as={
                  <Input
                    className={classes.LoginInput}
                    placeholder="* Region/City"
                    type="text"
                  />
                }
              />
              {errors.city && (
                <p className={classes.errorMsg}>{errors.city.message}</p>
              )}
              <Controller
                control={control}
                name="address"
                as={
                  <Input
                    className={classes.LoginInput}
                    placeholder="* Address"
                    type="text"
                  />
                }
              />
              {errors.address && (
                <p className={classes.errorMsg}>{errors.address.message}</p>
              )}
              <Controller
                control={control}
                name="email"
                as={
                  <Input
                    className={classes.LoginInput}
                    placeholder="* Email"
                    type="email"
                  />
                }
              />
              {errors.email && (
                <p className={classes.errorMsg}>{errors.email.message}</p>
              )}

              <Controller
                control={control}
                name="phone"
                as={
                  <Input
                    className={classes.LoginInput}
                    placeholder="* Phone"
                    type="tel"
                  />
                }
              />
              {errors.phone && (
                <p className={classes.errorMsg}>{errors.phone.message}</p>
              )}
              <input type='submit'value='submit' />
            </div>
          </div>
        </Dialog>
      </form>
    </div>
  )
}

export default withSnackbar(CustomizedDialogs)
