import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  FailedPayment: {
    margin: '0 0',
    overflow:'hidden',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    minHeight:'100vh',
    '& h2': {
      fontSize: 40,
      marginTop:40,
      marginLeft:150,
      fontFamily:'Poppins-SemiBold',
      textTransform:'uppercase',
      color: '#ed505d',
    },
    '& p': {
      lineHeight: '35px',
      fontSize: 20,
      fontFamily:'Poppins-Regular',
marginBottom:30,
      color: '#fff',
      marginLeft:40,
      '@media (max-width:767px)': {
        textAlign: 'center',
        fontSize: 18,
      },
    },
  },

  FailedPaymentButtons:{
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
  FailedPaymentPrint:{
    '& button': {
      fontSize: 17,
      marginTop:20,
      fontFamily:'Poppins-Regular',
      background:'#ed505d',
      textTransform:'capitalize',
      border:'2px solid #ed505d',
      padding: '15px 15px',
width:200,
      color: '#fff',
      '&:hover': {
        background:'#ed515d',
color:'#fff',
border:'2px solid #fff',

          },
  },
  },
  FailedPaymentContinue:{
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
      transition:'0.3s',
      border:'2px solid #74767c',
      '&:hover': {
        background:'transparent',
color:'#fff',
border:'2px solid #fff',

          },
        },
  },
  FailedPaymentHolder:{
    position:'relative',
    borderTop:'40px solid #ed505d',
    borderBottom:'20px solid #ed505d',
paddingBottom:30,
  },
  FailedPaymentWhite:{
width:50,
borderRadius:50,
height:50,
background:'#fff',
textAlign:'center',
display:'blocl',
margin:'10px auto',

  },
  FailedPaymentRed:{
    width:50,
    borderRadius:50,
    height:50,
    background:'#ed505d',
    textAlign:'center',
    display:'blocl',
    margin:'10px auto',
  },
  FailedPaymentAlert:{
    height:205,
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
