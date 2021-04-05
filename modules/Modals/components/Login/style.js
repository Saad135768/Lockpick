import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({

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
      fontFamily: 'Poppins-Regular',
      background:' transparent',
    },
    '&:focus': {
      color: 'red',
      transition: '0.3s',
      fontFamily: 'Poppins-Regular',

      border:'1px solid #fba62f',
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
zIndex:'2000 !important',

    '& .MuiDialog-paperWidthSm': {
      background: '#fba631',
      width:'400px',
      borderRadius: '8px',
      maxWidth:'400px',
      padding: 20,
      '& button': {
        background: '#397399',
        color: '#FFF',
        width:'100%',
      },
    },
   
      
  },

}))

export default useStyles
