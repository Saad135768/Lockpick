import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  dropdownHolder: {
    '& .MuiFormControl-root': {
      width: '100% !important',
      '& input:valid:focus + fieldset': {
        border: '1px solid #465FED',
      },
      '& input:valid:hover + fieldset': {
        border: '1px solid #465FED',
      },
    },
    '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
      borderColor: '#F0508C',
    },
  },
  SelectHolder: {
    width: '100%',
    '& .MuiSelect-select': {
      width: '100%',
      fontSize: '18px',
      textIndent: '3px',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#E5E5E5',
      borderRadius: '7px',
    },
    '& .MuiSelect-outlined.MuiSelect-outlined': {
      padding: '13.5px 14px',

    },

    '& input#outlined-secondary::placeholder': {
      opacity: 1,
      color: '#DCDCDC',
      fontSize: 40,
    },
    '@media (max-width:767px)': {
      '& .MuiSelect-select': {
        fontSize: '12px',
      },
    },
  },

}))

export default useStyles
