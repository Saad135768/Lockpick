import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  ProductsHolder: {
    transition: 'background 0.3s, border-radius 0.3s, opacity 0.3s',
    backgroundPosition: 'center ',
    backgroundSize: 'cover',
    backgroundRepeat:'no-repeat',
    background: "url('../../static/images/products/bg.png')",
    
   
    '@media (min-width:1440px)': {
      backgroundSize: 'cover',
      margin: '0 auto',
      padding: '0 !important',
      width: '100% !important',
      paddingLeft: 0,
      paddingRight: 0,
      maxWidth: '1280px !important',
      '& .MuiContainer-maxWidthLg': {
        margin: '0 auto',
        padding: '0 !important',
        paddingLeft: 0,
        paddingRight: 0,
        maxWidth: '1280px !important',
      },
    },
    

  },
  
  CustomeTitle:{
background:'#3680d6',
padding:'15px 25px',
'@media (max-width:767px)': {
  padding:'15px 15px',
},
'& h3': {
  color:'#fff',
  fontSize: 30,
  fontFamily:'Poppins-SemiBold',
  textTransform: 'uppercase',
  margin: 0,
  '@media (max-width:767px)': {
    textAlign:'center',
    fontSize: 24,
    },
},
  },
  FormHolder: {
    margin:'50px 0',
    '@media (max-width:767px)': {
      margin:'20px 0',
    },
    '& img': {
      width: '100%',
      display: 'block',
      margin: '0 auto',
    },
    '& h2': {
      textAlign: 'center',
      color: '#fba62f',
      fontSize:'45px',
      fontFamily:'Poppins-SemiBold',
      lineHeight:'45px',
      '@media (max-width:767px)': {
        fontSize:'27px',
        lineHeight:'35px',
      },
      '& span': {
        color: '#fff',
        margin: '0 10px',
        '@media (max-width:767px)': {
          margin: '0 4px',
        },
      },
    },
    '& p': {
    lineHeight: '30px',
     fontSize: 25,
     margin:'60px 0',
     fontFamily:'Poppins-Light',
     lineHeight:'38px',
     color:'#fff',
     '@media (max-width:767px)': {
      textAlign:'center',
      fontSize: 18,
      },
    },
},

ProductsMainImge:{

},
}))

export default useStyles
