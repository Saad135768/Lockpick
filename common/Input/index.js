import { forwardRef } from 'react'
import useStyles from './style'

const Input = forwardRef((props, ref) => {
  const classes = useStyles()
  return (
    <div ref={ref}>
      <input className={classes.BasicInput} {...props} />
    </div>
  )
})

export default Input
