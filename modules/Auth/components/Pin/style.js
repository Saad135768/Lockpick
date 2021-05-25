import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  errorMsg: {
    color: 'red',
    fontWeight: '600',
    marginTop: 0,
  },
  register: {
    textAlign: 'right',
    textTransform: 'uppercase',
    marginTop: 20,
    '& h2': {
      fontSize: '20px',
      marginBottom: 0,
      cursor: 'pointer',
    },
  },
  LoginInput: {
    border: 0,
    borderRadius: '8px',
    height: '50px',
    background: '#fff',
    marginBottom: 20,
    width: '100%',
    transition: '0.3s',
    fontSize: 17,
    paddingLeft: '40px',
    zIndex: 99,
    fontFamily: 'Poppins-Regular',
    position: 'relative',
    outline: 0,
    '&::placeholder ': {
      color: '#397399',
      fontFamily: 'Poppins-Light',
      background: ' transparent',
    },
    '&:focus': {
      transition: '0.3s',
      fontFamily: 'Poppins-Light',
    },
  },
  '.pass':{
    marginBottom: 0
  },
  forgotPass: {
    cursor: 'pointer',
  },
  closeButton: {
    position: 'absolute',
    right: 0,
    top: 0,
    color: 'red',
  },
  root: {
    '& img': {
      width: '90%',
      margin: '0 auto',
      display: 'block',
    },
    '& h3': {
      fontFamily: 'Poppins-SemiBold',
      textAlign: 'center',
      color: '#2b333d',
    },
    zIndex: '2000 !important',

    '& .MuiDialog-paperWidthSm': {
      background: '#fba631',
      width: '400px',
      borderRadius: '25px',

      maxWidth: '400px',
      padding: 20,
      '& button': {
        background: '#397399',
        color: '#FFF',
        width: '100%',
        fontSize: 19,
        fontFamily: 'Poppins-Regular',
        borderRadius: 8,
        padding: 10,
      },
    },
  },
}))

export default useStyles
