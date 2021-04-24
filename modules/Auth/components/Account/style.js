import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({

  Logout:{
    marginTop: 32,
textAlign: 'right',
textTransform:'uppercase',
margin: '10px 0',
'& h2': {
  marginTop: 0,
  fontSize: 18,
  cursor: 'pointer',
},
  },
  errorMsg: {
    color: 'red',
    fontWeight: '600',
    marginTop: 0,
    marginLeft: 20,
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
      color: '#2b333d',
      '@media (max-width:767px)': {
        marginBottom: 0,
      },
    },
  
zIndex:'2000 !important',

    '& .MuiDialog-paperWidthSm': {
      width:'800px',
      borderRadius: '25px',
      maxWidth:'800px',
      padding: 0,
      '& button': {
        background: '#397399',
        color: '#FFF',
        width:'100%',
        textTransform: 'capitalize',
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
    '& .NotActive': {
border: '1px solid #FFA62F',
cursor: 'pointer',
opacity: 0.3,
outline: '0',
padding: '8px 28px',
    },
    '& .ButtonHolder': {
      marginTop: 10,
      marginBottom: 20,
      '@media (max-width:767px)': {
        marginTop: 10,
        marginBottom: 15,
      },
    },
    background: '#fba631',
    width:'45%',
    '@media (max-width:767px)': {
      width:'100%',
      },
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    padding: 25,
    '& img': {
      width: '90%',
       margin:'0 auto',
       display:'block',
          },
   
  },
  Right:{
    width:'55%',
    padding:'10px',
    marginTop: 15,
    display: 'flex',
    alignIems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    background:'#fff',
    '@media (max-width:767px)': {
      width:'100%',
      },
  },
  SaveBtn: {
    '& button': {
      width:'80% !important',
      marginBottom:20,
      marginLeft: 20,
      fontFamily:'Poppins-Regular !important',
      border: 0,
      '@media (max-width:767px)': {
        width:'90% !important',
        marginLeft: 10,
      },
    },
  },
}))

export default useStyles
