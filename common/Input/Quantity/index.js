import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import useStyles from './style'

const InputNumberCircle = (props) => {
  const classes = useStyles()
  return (
    <div className={classes.inputContainer}>
      <div
        onClick={async (e) => {
          await props.handleQuantity('minus', e)
          if (!props.NotHandleCart) props.handleChangeCart()
        }}
      >
        <RemoveIcon className={classes.icon} />
      </div>
      <div className={classes.input}>
        <input
          min={1}
          max={props.max}
          onChange={(e) => props.onChange(e)}
          disabled={props.disabled}
          value={props.value}
          type={'number'}
        />
      </div>
      <div
        onClick={async (e) => {
          await props.handleQuantity('plus', e)
          if (!props.NotHandleCart) props.handleChangeCart()
        }}
        disabled={props.disabled}
      >
        <AddIcon className={classes.icon} />
      </div>
    </div>
  )
}
export default InputNumberCircle
