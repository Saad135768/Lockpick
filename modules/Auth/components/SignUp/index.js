import React, { useRef } from 'react'
import useStyles from './style'
import Button from '../../../../common/Button'
import Dialog from '@material-ui/core/Dialog'
import Cookies from 'js-cookie'
import { useMutation } from '@apollo/react-hooks'
import { useForm } from 'react-hook-form'
import { withSnackbar } from 'notistack'
import { REGISTER_MUTATION } from '../../data'
import { FaUserPlus } from 'react-icons/fa'
import useStore from '../../../../store'
import { states, countries } from '../../../../constants'

const CustomizedDialogs = props => {
  const openModal = useStore(state => state.openModal)
  const setOpenModal = useStore(state => state.setOpenModal)

  const { register, handleSubmit, errors, watch } = useForm({ mode: 'onBlur' })

  const [Register] = useMutation(REGISTER_MUTATION)

  const addCustomer = async ({
    name,
    email,
    password,
    phone,
    country,
    city,
    street,
    postalCode,
    state,
  }) => {
    try {
      const res = await Register({
        variables: {
          username: email,
          email,
          name,
          password,
          phone,
          address: {
            country,
            city,
            address1: street,
            street,
            state,
            postalCode,
            state,
          },
          sendPin: false,
          verificationStrategy: 'email',
          type: 'user',
        },
      })
      const token = res.data.addCustomerAccount.token
      if (token) {
        props.enqueueSnackbar(`Welcome ${name}`, { variant: 'success' })
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

  const pass = useRef({})
  const mail = useRef({})
  pass.current = watch('password')
  mail.current = watch('email')

  const classes = useStyles()

  return (
    <div>
      <Dialog
        className={classes.root}
        onClose={() => setOpenModal()}
        aria-labelledby="customized-dialog-title"
        open={openModal}
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
                <h2>* Required Inputs</h2>
              </div>
              <div className={classes.LoginNow}>
                {!Cookies.get('token') && (
                  <h3 onClick={() => setOpenModal(1)}> Sign in</h3>
                )}
              </div>
            </div>
            <div className={classes.Right}>
              <input
                name="name"
                className={classes.LoginInput}
                placeholder="* Full Name"
                type="text"
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
                ref={register({ required: 'This field is required' })}
              />
              {errors.email && (
                <p className={classes.errorMsg}>{errors.email.message}</p>
              )}
              <input
                name="confirmEmail"
                className={classes.LoginInput}
                placeholder="* Confirm Email"
                type="email"
                
                ref={register({ required: 'This field is required', validate: (value) => value === mail.current || 'Email fields Must match', })}
              />
              {errors.email && (
                <p className={classes.errorMsg}>{errors.email.message}</p>
              )}
              <input
                name="password"
                className={classes.LoginInput}
                placeholder="* Password"
                type="password"
                ref={register({ required: 'This field is required' })}
              />
              {errors.password && (
                <p className={classes.errorMsg}>{errors.password.message}</p>
              )}
              <input
                name="confirmPassword"
                className={classes.LoginInput}
                placeholder="* Confirm password"
                type="password"
                ref={register({ required: 'This field is required', validate: (value) => value === pass.current || 'Passwords Must match', })}
              />
              {errors.password && (
                <p className={classes.errorMsg}>{errors.password.message}</p>
              )}
              <input
                name="phone"
                className={classes.LoginInput}
                placeholder="* Phone"
                type="tel"
                ref={register({ required: 'This field is required' })}
              />
              {errors.phone && (
                <p className={classes.errorMsg}>{errors.phone.message}</p>
              )}
             <select 
                  className={classes.LoginInput}
                  ref={register({ required: 'This field is required' })}
                  name='country'
                >
                <option value="" selected disabled hidden>
                  *Country
                </option>
                  {countries.map((state) => <option value={state.code} key={state.code}>{state.name}</option>)}
                </select>
              {errors.country && (
                <p className={classes.errorMsg}>{errors.country.message}</p>
              )}
              <select 
                  className={classes.LoginInput}
                  ref={register({ required: 'This field is required' })}
                  name='state'
                >
                <option value="" selected disabled hidden>
                  *State
                </option>
                  {states.map((state) => <option value={state.code} key={state.code}>{state.name}</option>)}
                </select>
              {errors.state && (
                <p className={classes.errorMsg}>{errors.state.message}</p>
              )}
              <input
                name="city"
                className={classes.LoginInput}
                placeholder="* Region/City"
                type="text"
                ref={register({ required: 'This field is required' })}
              />
              {errors.city && (
                <p className={classes.errorMsg}>{errors.city.message}</p>
              )}

           
              <input
                name="street"
                className={classes.LoginInput}
                placeholder="* Street"
                type="text"
                ref={register({ required: 'This field is required' })}
              />
              {errors.street && (
                <p className={classes.errorMsg}>{errors.street.message}</p>
              )}
              <input
                name="postalCode"
                className={classes.LoginInput}
                placeholder="* Zip / Postal Code"
                type="text"
                ref={register({ required: 'This field is required' })}
              />
              {errors.postalCode && (
                <p className={classes.errorMsg}>{errors.postalCode.message}</p>
              )}
            </div>
          </div>
        </form>
      </Dialog>
    </div>
  )
}

export default withSnackbar(CustomizedDialogs)
