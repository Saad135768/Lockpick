import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  InputContainer: {
    display: 'flex',
    '& .MuiFormControl-root': {
      '& input:valid:focus + fieldset': {
        border: '1px solid #465FED',
      },
      '& input:valid:hover + fieldset': {
        border: '1px solid #465FED',
      },
      '& input:invalid:hover + fieldset': {
        border: '1px solid #F0508C',
      },
    },
  },
  telInput: {
    display: 'flex',
    '& .MuiOutlinedInput-notchedOutline': {
      borderLeft: 0,
      borderRadius: '0px 7px 7px 0px !important',
    },
    '& .MuiFormControl-root': {
      '& input:valid:focus + fieldset': {
        borderLeft: 0,
        border: '1px solid #465FED',
      },
      '& input:valid:hover + fieldset': {
        borderLeft: 0,
        border: '1px solid #465FED',
      },
      '& input:invalid:hover + fieldset': {
        borderLeft: 0,
        border: '1px solid #F0508C',
      },
    },

    '& input#outlined-secondary::placeholder': {
      opacity: 1,
      color: '#DCDCDC',
      fontSize: 18,
    },
  },
  BasicInput: {
    width: '100%',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#E5E5E5',
      borderRadius: '7px',
    },
    '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
      borderColor: '#F0508C',
    },
    '& .MuiOutlinedInput-input': {
      padding: '14px 14px',
    },
    '& input:read-only': {
      background: '#F2F2F2',
    },
    '&::placeholder input#pin': {
      color: '#000000',
      background: '#F2F2F2',
    },
    '&:focus': {
      color: '#000000',
    },
  },
  tel: {
    backgroundColor: '#E4EDF7',
    color: '#0E4C8D',
    borderRadius: '7px 0px 0px 7px',
    padding: '10px 23px',
    fontSize: 18,
  },
}))

export default useStyles
