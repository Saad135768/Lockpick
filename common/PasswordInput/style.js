import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  InputContainer: {
    display: 'flex',
    '& .MuiOutlinedInput-root': {
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
    '& .MuiInputAdornment-root': {
      '& button': {
        margin: '0 !important',
        '& svg': {
          fontSize: '24px',
          color: '#d8dbe2',
        },
      },
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
      '&:hover': {
        borderColor: '#F0508C',
      },
    },
    '& .MuiOutlinedInput-input': {
      padding: '13.5px 14px',
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
    '&:hover': {
      borderColor: '#F0508C !important',
    },
  },
  tel: {
    backgroundColor: '#E4EDF7',
    color: '#0E4C8D',
    borderRadius: '7px 0px 0px 7px',
    padding: '10px 23px',
  },
}))

export default useStyles
