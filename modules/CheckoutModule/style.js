import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  CartHolder:{
    marginTop:100,
    marginBottom:140,
    '@media (max-width:768px)': {
      marginTop:30,
      marginBottom:50,
      '& .MuiGrid-spacing-xs-8': {
        flexDirection: 'column-reverse',
        width:'100%',
        margin: 0,
      },
    },
    '@media (max-width:767px)': {
      marginTop:30,
      marginBottom:40,
      '& .MuiGrid-spacing-xs-8': {
        flexDirection: 'column-reverse',
        width:'100%',
        margin: 0,
      },
      '& .MuiGrid-spacing-xs-8 > .MuiGrid-item': {
        padding: 10,

      },
    },
    '& hr': {
      background: '#3679d6',
      height: 1,
      border: 0,
      margin: 0,
    },
      },
      CheckoutLogged:{
        display:'flex',
        justifyContent:'space-between',
    background: '#4c505a',
    color: '#fff',
    marginBottom: 20,
    padding: '0 20px',
    marginTop: 20,
    '& h4': {
      borderBottom: '1px solid',
      fontFamily: 'Poppins-SemiBold',
      margin: '15px 0',
    },
    '& h3': {
      margin: '15px 0',
    },
      },

      CheckoutTitle:{
'& h2': {
  color: '#fba530',
  fontFamily: 'Poppins-SemiBold',
  fontSize: '40px',
  textTransform: 'uppercase',
  margin: 8,
},

  },




  CartInputs:{
    marginTop: 40,
    
    '& .note': {
      marginTop: 10,
      '& svg': {
        marginTop: 2,
        fontSize: 18,
      },
  
    },
  },
  ShippingDetails:{
    
    '& button': {
      marginTop: 30,
fontSize: 20,
padding:'15px 0',
borderRadius:'0',
width:'100%',
color:'#fff',
    },
    '& h5': {
      fontSize: 25,
      color: '#fba530',
      fontFamily:'Poppins-SemiBold',
      margin: '30px 0',
    },
    '& span': {
      fontSize: 18,
      color: '#58595e',
      fontFamily: 'Poppins-Regular',
      marginBottom: 0,
    },
  },
  CheckoutInput: {
    border: '2px solid #474c56',
    borderRadius: '1px',
    display: 'block',
    height: '50px',
    background:'transparent',
    marginBottom :30,
    width: '100%',
    marginTop:10,

    transition: '0.3s',
    fontSize: 16,
    paddingLeft: '20px',
    zIndex: 99,
    fontFamily: 'Poppins-Light',
    position: 'relative',
    outline: 0,
    '&::placeholder ': {
      color: '#fff',
      fontFamily: 'Poppins-Light',
      background:' transparent',
    },
    '&:focus': {
      transition: '0.3s',
      fontFamily: 'Poppins-Light',
      color: '#fff',
      border:'1px solid #fba62f',
    },
  },
  DeliveryMethod:{
    '& fieldset.MuiFormControl-root ': {
      color: '#fff',
      width: '100%',
      padding:'25px 7px',
      border:'1px solid #474c56',
    },
    '& label.MuiFormControlLabel-root' :{

      marginLeft:10,
    },
    '&  span.MuiTypography-root ': {
      color: '#fff',
      marginLeft: 10,
  },
  '&  .MuiRadio-colorSecondary.Mui-checked  span': {
    color: '#3780d5 !important',
  },
  '& p ': {
    color: '#fff',
    marginLeft: 10,
    color: '#58595e',
    marginLeft: 62,
    marginTop: 0,
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
},

'& h3 ': {
  marginTop: 10,
  fontFamily: 'Poppins-Regular',
  fontSize: 18,
  marginBottom: 0,
},
  '& hr ': {
    width: '100%',
    marginBottom: 15,
    background:'#474c56',
},
  },

  PaymentWays:{
    display:'flex',
    justifyContent:'space-around',
alignItems:'center',
    '& img ': {
      width: 65,
      position: 'relative',
      bottom: 7,
      objectFit: 'cover',
      margin: 0,
      margin: '0 4px',
  },
  '& h4 ': {
    fontFamily: 'Poppins-Regular',
    position: 'relative',
    bottom: 7,
},

  },
  SecondPayment:{
    '& img ': {
      marginLeft:30,
  },
  },

  SecondPaymentNote: {
    marginTop: 30,

  '& img ': {
    width:'100%',
},
},
}))

export default useStyles
