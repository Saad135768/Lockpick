import { forwardRef } from 'react'
import TextField from '@material-ui/core/TextField'
import useStyles from './style'

const Input = forwardRef((props, ref) => {
  const classes = useStyles()
  return (
    <div ref={ref} className={props.tel ? classes.telInput : classes.InputContainer}>
      {props.tel && <div className={classes.tel}> {props.tel} </div>}
      <TextField
        error={props.error}
        id="outlined-secondary"
        variant="outlined"
        autoComplete="off"
        className={classes.BasicInput}
        {...props}
      />
    </div>
  )
})
export default Input
