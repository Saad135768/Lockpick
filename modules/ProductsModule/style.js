import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  ProductsHolder: {
  },
  
  FormHolder: {
    margin:'50px 0',
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
      '& span': {
        color: '#fff',
        margin: '0 10px',
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
