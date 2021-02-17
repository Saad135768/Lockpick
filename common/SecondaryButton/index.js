import { forwardRef } from 'react'
import useStyles from './style'

const Button = forwardRef(({ children, ...props }, ref) => {
  const classes = useStyles()
  return (
    <div ref={ref}>
      <button className={classes.BasicButton} {...props}>
        {children}
      </button>
    </div>
  )
})
export default Button
