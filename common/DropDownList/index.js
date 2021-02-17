import React, { forwardRef } from 'react'
import { InputLabel, Select, MenuItem, FormControl } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { propOr } from 'ramda'
import useStyles from './style'

const DropDownList = forwardRef(({ ...props }) => {
  const classes = useStyles()
  const [itemValue, setItemValue] = React.useState('')

  const handleChange = (event) => {
    setItemValue(event.target.value)
  }

  return (
    <div ref={props.ref} className={classes.dropdownHolder}>
      <FormControl variant="outlined" error={props.error}>
        {props.InputLabel && (
          <InputLabel id="demo-simple-select-outlined-label">
            {props.InputLabel}
          </InputLabel>
        )}
        <Select
          IconComponent={ExpandMoreIcon}
          anchororigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformorigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          className={classes.SelectHolder}
          value={itemValue}
          onChange={handleChange}
          name={props.name}
          {...props}
        >
          {propOr([], ['list'], props).map((obj) => (
            <MenuItem value={obj.value} key={obj.value}>
              {obj.text}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
})

export default DropDownList
