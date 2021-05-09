import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  SuccessPayment: {
    margin: '0 0',
    overflow:'hidden',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    minHeight:'100vh',
    '& h2': {
      fontSize: 40,
      marginTop:40,
      marginLeft:140,
      fontFamily:'Poppins-SemiBold',
      textTransform:'uppercase',
      color: '#31b87e',
    },
    '& p': {
      lineHeight: '35px',
      fontSize: 20,
      fontFamily:'Poppins-Regular',
marginBottom:0,
      color: '#fff',
      marginLeft:40,
      '@media (max-width:767px)': {
        textAlign: 'center',
        fontSize: 18,
      },
    },
  },

  SuccessPaymentButtons:{
    display:'flex',
    '@media (max-width:767px)': {
      display:'block',

width:'100%',
    },
    '& button': {
      '@media (max-width:767px)': {
        width:'100% !important',

      },

    },

  },
  SuccessPaymentPrint:{
    '& button': {
      fontSize: 17,
      marginTop:20,
      fontFamily:'Poppins-Regular',
      background:'#31b87e',
      textTransform:'capitalize',
      border:'2px solid #31b87e',
      padding: '15px 15px',
width:200,
      color: '#fff',
     '& :hover': {

    },
  },
  },
  SuccessPaymentContinue:{
    '& button': {
      fontSize: 17,
      marginRight:20,
      width:200,
      padding: '15px 15px',
      marginTop:20,
      fontFamily:'Poppins-Regular',
      textTransform:'capitalize',
      color: '#8f9296',
      background:'transparent',
      border:'2px solid #74767c',

    },
  },
  SuccessPaymentHolder:{
    position:'relative',
    borderTop:'40px solid #31b87e',
    borderBottom:'20px solid #31b87e',
paddingBottom:30,
  },
  SuccessPaymentWhite:{
width:50,
borderRadius:50,
height:50,
background:'#fff',
textAlign:'center',
display:'blocl',
margin:'8px auto',

  },
  SuccessPaymentGreen:{
    width:50,
    borderRadius:50,
    height:50,
    background:'#31b87e',
    textAlign:'center',
    display:'blocl',
    margin:'8px auto',
  },
  SuccessPaymentAlert:{
    height:200,
    background:'#d7d7d7',
    width:90,
    margin:10,
    padding:10,
    borderRadius:22,
    position:'absolute',
    top: 0,
    zIndex: 9999,
    marginTop: '-90px',
    marginLeft: 30,
  },
}))

export default useStyles
