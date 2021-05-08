import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  FormHolder: {
    '&     .MuiInputBase-root.MuiInput-root.MuiInput-underline.MuiInputBase-formControl.MuiInput-formControl': {

padding:8,
borderRadius:5,
marginTop:4,
paddingLeft:13,
border:'1px solid #c4c4c4',
    },
    width: '100%',
    background: '#fff',
    padding: '20px 40px',

    margin: '50px 40px',
    '& img': {
   
    },
    '& h6': {
      fontSize:16,
      marginTop:10,

    },
    '& h4': {
      marginTop:10,
      fontSize:18,
      fontFamily:'Poppins-SemiBold',
color:'#2B313B',
    },
    '& h2': {
      margin:0,
      fontSize:24,
      fontFamily:'Poppins-SemiBold',
      color:'#2B313B',
      },
      '& .MuiFormControl-root': {
        width:'100%',
        },
        '& button': {
          width:'50%',
          margin:'30px auto',
          textAlign:'center',
          display:'block',
          fontSize:22,
          marginBottom:15,
          },
  },
  AboutHolder: {},

  AboutMainImge: {
    maxHeight: 380,
    '@media (max-width:767px)': {
    
    },
  
    
  },
  ProductItemHolder:{
width:'100%',
    display:'flex',
    background: '#f5f7fd',
    marginBottom: 15,
    padding: '8px 25px',
    justifyContent:'space-between',
    paddingBottom: 0,

 
  },
  FormTotal:{
textAlign:'right',
'& h3': {
  marginTop: 6,
  marginBottom: 0,
  fontFamily:'Poppins-Regular',
fontSize:17,
  },

  '& h3 b': {
    marginBottom: 0,
    fontFamily:'Poppins-SemiBold',
fontSize:17,
marginLeft:20,
    },
  },

  FormContent:{
    '& img': {
      width:'100%',
      },
      
      '&  .MuiPaper-elevation1': {
boxShadow:'none',
      },

      '&  .MuiFormControl-root': {
width:'100%',
height:'27px',
marginBottom:40,
padding:0,
      },

          
      
      '& fieldset.MuiOutlinedInput-notchedOutline': {
top:0,

      },
      '& .MuiAccordionDetails-root': {
        display: 'inherit',
        padding: '8px 16px 16px',
        marginBottom: 13,
      },

  },

  FormTitle:{
    marginRight:20,
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    color:'#2B313B',
    marginTop: 0,
    width:'40%',
  },
  PaymentMethod:{
    '& h3': {
      fontFamily: 'Poppins-SemiBold',
      fontSize: 18,
      color:'#2B313B',
      },
  },
  formControl:{
    marginBottom: '60px !important',
  },
}))

export default useStyles
