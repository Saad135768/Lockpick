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
    display: 'block',
    height: '50px',
    background:'#d5d6d8',
    marginLeft: 20,
    marginBottom :20,
    width: '80%',
    transition: '0.3s',
    fontSize: 16,
    paddingLeft: '40px',
    zIndex: 99,
    fontFamily: 'Poppins-Light',
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
      border:'1px solid #fba62f',
    },
    '@media (max-width:767px)': {
      width:'90%',
      marginLeft: 10,
      paddingLeft: 15,
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
      width:'800px',
      borderRadius: '15px',
      maxWidth:'800px',
      padding: 0,
      '& button': {
        background: '#397399',
        color: '#FFF',
        width:'100%',
        fontSize: 18,
        fontFamily: 'Poppins-Regular',
        borderRadius: 8,
      },
    },
   
      
  },

  LeftRight:{
display:'flex',
'@media (max-width:767px)': {
  display:'block',

  },

  },

  Left:{
    
    '& .ButtonHolder': {
      marginTop: 100,
      marginBottom: 60,
      '@media (max-width:767px)': {
        marginTop: 20,
        marginBottom: 30,
      },
    },
    background: '#fba631',
    width:'45%',
    '@media (max-width:767px)': {
      width:'100%',
      },
    borderTopRightRadius: 25,
    padding: 25,
    '& img': {
      width: '100%',
    },
    '& h2': {
      color: '#397399',
      textAlign: 'center',
      textTransform:'capitalize',
      fontStyle: 'italic',
      fontSize: 20,
    },
  },
  Right:{
    width:'55%',
    padding:'10px',
    marginTop: 15,
    background:'#fff',
    '@media (max-width:767px)': {
      width:'100%',
      },
  },
}))

export default useStyles
