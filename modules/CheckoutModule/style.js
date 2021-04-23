import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  CheckoutHolder:{
 

  '& .MuiAccordionDetails-root': {
    paddingTop: 0,
    paddingBottom: 0,
  },
    '& .EditDelivery h6 , .EditDelivery p': {
color:'#8d8d8e',
margin:0,
fontSize:18,
    },
    '& .EditDelivery .MuiGrid-spacing-xs-2 > .MuiGrid-item': {
paddingBottom:0,
    },
    
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
    marginBottom: 0,
    padding: '0 20px',
    marginTop: 20,
    '& h4': {
      borderBottom: '1px solid',
      fontFamily: 'Poppins-SemiBold',
      margin: '15px 0',
      cursor: 'pointer',
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
    borderBottom: '1px solid #3780d5',
   paddingBottom: 0,
    '& button': {
      textTransform:'uppercase',
      marginTop: 0,
      transition: '0.1s', 
fontSize: 18,
padding:'15px 0',
borderRadius:'0',
color:'#fff',
    },
    '& h5': {
      fontSize: 22,
      color: '#fba530',
      fontFamily:'Poppins-SemiBold',
      margin: '30px 0',
      marginBottom: 28,
    '& em': {
      fontStyle: 'normal',
      marginRight: 10,
    },
    },
    '& span': {
      fontSize: 18,
      color: '#8d8d8e',
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
    color: '#8d8d8e',
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

root:{

'& .MuiAccordionDetails-root a': {
  width: '100%',
  marginBottom: 20,
  marginTop: 0,

},
  '& .MuiAccordionSummary-content.Mui-expanded ': {
      marginBottom:0,
  },
  '& .MuiAccordion-root:before ': {
    background:'#3780d5',
    opacity: 1,

  },
  '& .MuiPaper-root ': {
    backgroundColor: 'transparent',
    boxShadow: 'none !important',
},

},

ReturnPolicy:{
  '& p': {
    fontSize:16,
    color:'#fff',
    marginTop: 40,
    fontFamily: 'Poppins-Regular',
  },
},
EditBtn :{
  background:'transparent',
  border:0,
  textAlign: 'right',
    margin: 0,
    padding: 0,
    textDecoration: 'underline',
    position: 'absolute',
    top: 40,
    right:0,
    marginTop: 0,
     cursor:'pointer',
  '&:focus': {
    background:'transparent',
    border:0,
    color:'#fba530',
    outline:0,
  },
},

SaveBtn :{
  textTransform: 'uppercase',
  background:'transparent',
  border:0,
  textAlign: 'right',
    margin: 0,
    marginTop: 0,
    padding: 0,
    textDecoration: 'underline',
    position: 'absolute',
    cursor:'pointer',
    right:0,
    top: 40,
  '&:focus': {
    background:'transparent',
    border:0,
    color:'#fba530',
    outline:0,
  },
},

SHippingEdit:{
  width:'100%',
'& h6': {
  color:'#8d8d8e',
margin:0,
fontSize:18,
},

},
errorMsg: {
  color: 'red',
  fontWeight: 'bold',
}

}))

export default useStyles
