import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  ProductSliderDataHolder: {
    '@media (max-width:767px)': {
    marginTop:0,
    },
    '& h1': {
      color: '#FFA62F',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 37,
    textTransform: 'uppercase',
    marginBottom:0,
    marginTop: 0,
    '@media (max-width:1024px)': {
      fontSize: 27,
    },
    },
    '& h4': {
      color: '#fff',
    fontSize: 19,
    height:60,
    overflow: 'auto',
    marginTop:0,
    marginBottom:0,
    '@media (max-width:767px)': {
      fontSize: 19,
    },
    },
    '& h2': {
      color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: '37px !important' ,
    textAlign:'left !important;',
    marginTop:0,
    marginBottom:30,
    '@media (max-width:1024px)': {
      marginBottom:10,
      fontSize: 27,
    },

    },
    
    '& h5': {
      color: '#fff',
    fontSize: 16,
    marginTop:0,
    marginBottom:0,
    '@media (max-width:768px)': {
      fontSize: 16,
    },
    },
    '& h3': {
      color: '#FFA62F',
    fontSize: 19,
    marginTop:0,
    marginBottom:0,
    '@media (max-width:768px)': {
      fontSize: 16,
    },
    },
    '& h6': {
      color: '#fff',
    fontSize: 19,
    marginTop:10,
    height: 90,
    overflow: 'auto',
    marginBottom:30,
    '@media (max-width:768px)': {
      fontSize: 16,
      marginBottom:0,
    },
    },
    
    '& em': {
      color: '#fba62f',
      fontStyle: 'normal',
      fontSize: 21,
      display: 'block',
      paddingBottom: 30,
      height: 60,
     overflow: 'auto',
     marginTop: 20,
     marginBottom: 25,
  },
    '& button': {
      width: '100%',
      marginTop:'20px',
      marginBottom: 20,
    
    },
    
    '@media (max-width:1024px)': {
      '& button': {
        fontSize:'24px',
        padding:15,
      },
    },

  },
  NumericInput: {
    '& input[type="text"]': {
      width: '100%',
      padding:'11px',
      color:'#fff',
      borderRadius: '13px !important',
      paddingLeft:'0 !important',
      paddingRight:'0 !important',
      fontSize:24,
      outline: 0,
      border: '2px solid #fba62f !important',
      fontFamily: 'Poppins-SemiBold',
      background:'transparent',
    },
    '& span.react-numeric-input': {
      width: '100%',
      background:'transparent',
      fontSize:24,
      marginBottom: 15,
    },
    '& b': {
      width: '100%',
      background:'transparent !important',
      border: '0 !important',
      cursor: 'pointer !important',
    },
    '& i': {
      background: '#fba62f !important',
    },
    '& b:first-of-type': {
      width: '90px !important',
      '& i:first-of-type': {
        background: '#fba62f !important',
          width: '22px !important',
          height:'5px !important',
          margin:'0 0 0 -9px !important',
      },
      '& i:last-of-type': {
        background: '#fba62f !important',
         height:'22px !important',
         width: '5px !important',
         margin:'-9px 0 0 -1px !important',
      },
    },
    '& b:last-of-type': {
      width: '90px !important',
      '& i:last-of-type': {
        background: '#fba62f !important',
         height:'5px !important',
         width: '25px !important',
         margin:'-1px 0 0 -6px !important',

      },
    },
  },

}))

export default useStyles
