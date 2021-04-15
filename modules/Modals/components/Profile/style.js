import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  errorMsg: {
    color: 'red',
    fontWeight: '600',
    marginTop: 0,
  },
  register:{
textAlign: 'right',
textTransform:'uppercase',
margin: '10px 0',


  },
  LoginInput: {
    border: 0,
    borderRadius: '8px',
    height: '50px',
    background:'#fff',
    marginBottom :20,
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
      background:' transparent',
    },
    '&:focus': {
      transition: '0.3s',
      fontFamily: 'Poppins-Light',
    },
  },
  closeButton: {
    position: 'absolute',
    right: 0,
    top: 0,
    color: 'red',
  },
  root: {
    '& h3': {
      fontFamily: 'Poppins-SemiBold',
      textAlign: 'center',
    },
    '& img': {
      width: '90%',
      display: 'block',
      margin:'0 auto',
    },
zIndex:'2000 !important',

    '& .MuiDialog-paperWidthSm': {
      background: '#fba631',
      width:'400px',
      borderRadius: '20px',
      maxWidth:'400px',
      padding: 20,
      '& button': {
        background: '#397399',
        color: '#FFF',
        textTransform: 'capitalize',
        width:'100%',
        fontSize: 19,
        margin: '15px 0',
        fontFamily: 'Poppins-Regular',
        borderRadius: 8,
        padding:10,
      },
    },
   
      
  },

}))

export default useStyles
