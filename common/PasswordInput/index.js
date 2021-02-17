import { forwardRef, useState } from 'react'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import Visibility from '@material-ui/icons/VisibilityOutlined'
import VisibilityOff from '@material-ui/icons/VisibilityOffOutlined'
import useStyles from './style'

const PasswordInput = forwardRef((props, ref) => {
  const [values, setValues] = useState()
  const classes = useStyles()

  const handleClickShowPassword = () => {
    setValues(!values)
  }

  return (
    <div
      ref={ref}
      className={classes.InputContainer}
    >
      <OutlinedInput
        id="outlined-adornment-password"
        type={values ? 'text' : 'password'}
        className={classes.BasicInput}
        {...props}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {values ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
    </div>
  )
})
export default PasswordInput
