import { forwardRef } from 'react'
import useStyles from './style'

const Button = forwardRef(({ children, ...props }, ref) => {
  const classes = useStyles()
  return (
    <div>
      <button className={classes.BasicButton} {...props}>
        {children}
      </button>
    </div>
  )
})
export default Button
