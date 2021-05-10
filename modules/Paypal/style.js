import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  FormHolder: {
    '& .MuiAccordion-root:before': {
      borderBottom: 0,
    },
    '& .MuiPickersMonth-monthSelected': {
      color: '#fba62f',
    },
   
    '& .MuiInputBase-root.MuiInput-root.MuiInput-underline.MuiInputBase-formControl.MuiInput-formControl': {
      padding: 8,
      borderRadius: 5,
      paddingLeft: 13,
      border: '0.5px solid #8f90928c',
      marginTop: 0,
      border: '1px solid #c4c4c4',
      height: 40,
    },
    width: '100%',
    background: '#fff',
    padding: '20px 30px',
    borderRadius: 0,

    margin: '0px 00px',
    '& img': {},
    '& h6': {
      fontSize: 16,
      marginTop: 10,
    },
    '& h4': {
      marginTop: 10,
      fontSize: 20,
      fontFamily: 'Poppins-SemiBold',
      color: '#2B313B',
    },
    '& h2': {
      margin: 0,
      fontSize: 26,
      fontFamily: 'Poppins-SemiBold',
      color: '#2B313B',
    },
    '& .MuiFormControl-root': {
      width: '100%',
    },
    '& button': {
      width: '50%',
      margin: '10px auto',
      textAlign: 'center',
      display: 'block',
      fontSize: 22,
      marginBottom: 15,
    },
  },
  AboutHolder: {
    margin:'100px 0',
    '& h5': {
      textAlign: 'center',
      fontSize: 19,
      margin: 0,
      fontFamily: 'Poppins-Regular',
      color: '#3780d5',
    },

    '& .PaymentMethod h3': {
      marginTop: '35px',
    },
  },

  AboutMainImge: {
    maxHeight: 380,
    '@media (max-width:767px)': {},
  },
  ProductItemHolder: {
    width: '100%',
    display: 'flex',
    background: '#f5f7fd',
    marginBottom: 15,
    padding: '8px 25px',
    justifyContent: 'space-between',
    paddingBottom: 0,
  },
  FormTotal: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#fba530',
    marginTop: 50,
    textAlign: 'right',
    '& h2': {
      color: '#fba530',
      fontSize: 24,
      marginTop: 15,
      fontFamily: 'Poppins-SemiBold',
    },

    '&  b': {
      marginBottom: 0,
      fontFamily: 'Poppins-SemiBold',
      fontSize: 17,
      marginLeft: 20,
    },
  },

  FormContent: {
    '& .MuiAccordion-root:before': {
      borderBottom: 0,
    },
    '& img': {
      width: '50%',
      marginTop: 15,
      imageRendering: '-webkit-optimize-contrast',
    },

    '&  .MuiPaper-elevation1': {
      boxShadow: 'none',
    },

    '&  .MuiFormControl-root': {
      width: '100%',
      height: '27px',
      marginBottom: 40,
      padding: 0,
    },

    '& fieldset.MuiOutlinedInput-notchedOutline': {
      top: 0,
    },
    '& .MuiAccordionDetails-root': {
      display: 'inherit',
      padding: '8px 16px 16px',
      marginBottom: 13,
    },
  },

  FormTitle: {
    marginRight: 20,
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    color: '#2B313B',
    marginBottom: 10,
    width: '100%',
  },
  PaymentMethod: {
    '& h3': {
      fontFamily: 'Poppins-SemiBold',
      fontSize: 20,
      color: '#2B313B',
    },
    '& h1': {
      fontFamily: 'Poppins-SemiBold',
      fontSize: 22,
      color: '#2B313B',
    },
  },
  formControl: {
    marginBottom: '60px !important',
  },
  LoginInput: {
    border: '0.5px solid #8f90928c',
    borderRadius: 5,
    display: 'block',
    height: '40px',
    marginBottom :10,
    width: '100%',
    transition: '0.3s',
    fontSize: 16,
    paddingLeft: '20px',
    fontFamily: 'Poppins-Light',
    position: 'relative',
    marginTop: 0,
    '&::placeholder ': {
      color: '#397399',
      fontFamily: 'Poppins-Light',
    },
    '&:focus': {
      transition: '0.3s',
      fontFamily: 'Poppins-Light',
      border: '1px solid #3680d6',
      outline:0,

    },
    '@media (max-width:767px)': {
      width:'100%',
  
      },
  },
  errorMsg: {
    color: 'red',
    fontWeight: '400',
    marginTop: 0,
    marginBottom: 3,
    fontSize:14,
    marginLeft: 0,
  },
  PaymentSummary:{
    background:'#4c515b',
    height:'100%',
    padding:30,
    '& h4': {
      color: '#fba530',
      fontSize: 22,
      marginTop: 5,
      margin:0,
      fontFamily: 'Poppins-SemiBold',
    },
  },

  PaymentSummaryTable:{
    marginTop:30,
    display:'flex',
    justifyContent: 'space-between',
    borderBottom: '1px solid #828282',
    paddingBottom: 25,
    '& img': {
      width:'50px !important',
      height: '50px !important',
      objectFit: 'cover',
      marginTop: 0,
      marginRight:5,
    },
    '& p': {
      color:'#fff',
      margin: 0,

    },
  },
  SecuirtyHolder:{
display:'flex',
justifyContent: 'space-between',

  },
  ProductName:{
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': 1,
    '-webkit-box-orient': 'vertical',
    maxWidth: 165,
  },

  DatePickerHolder:{
    '&  input.MuiInputBase-input.MuiInput-input': {

      '&::placeholder ': {
        color: '#397399',
        fontFamily: 'Poppins-Light',
      },

    },
  
  },
  RightHolder:{
    width:'50%',
    marginLeft:15,
  },
LeftHolder:{
  width:'50%',
  
},
}))

export default useStyles
