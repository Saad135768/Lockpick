import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  btn_print: {
    width: 250,
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    marginTop: 100,
    color:'#2B313B',
    textTransform: 'Uppercase',
    padding: '10px 20px',
    borderRadius:12,
    cursor: 'pointer',
    // borderRadius: 10,
    '& svg': {
      fontSize: 25,
      position:'relative',
    top:4,
      marginRight:10,
    },
    outline: 0,
    border: 0,
    background: '#FFA62F',
    '&:hover':{
      background: '#3680d6',
      color: '#fff',
    },
    position: 'absolute',
   
    cursor: 'pointer',
  
  },
  Invoice: {
    background: '#fff',
    '& h4,h2,h5': {
      fontSize: 17,
    },
    padding: '160px 0px',

    '& table': {
      borderCollapse: 'collapse',
      width: '100%',
    },
    '& td, th': {
      border: '1px solid #fff',
      textAlign: 'left',
      padding: 8,
      fontFamily: 'Poppins-SemiBold',
    },
    '& tr th': {
      backgroundColor: '#eee',
      textAlign: 'center',
    },
  },
  OrderHistoryHolder: {
    fontFamily: 'Poppins-Regular',
  },
  productName: {
    textTransform: 'uppercase',
    // '& h4': {
    //   fontSize: 16,
    //   textTransform: 'uppercase',
    //   fontFamily: 'Poppins-SemiBold',
    //  },
  },

  productTitle: {
    width: 450,
  },
  RestTable: {
    textAlign: 'right',
  },

  InvoiceInfoLeft: {
    '& h2': {
      fontFamily: 'Poppins-SemiBold',
    },
    '& h3': {
      margin: 0,
      fontSize: 17,
      '& b': {
        fontFamily: 'Poppins-SemiBold',
      },
    },
   
    '& h4': {
      margin: 0,
    },
    '& a': {
      color: 'blue',
      textDecoration: 'underline',
      marginLeft: 30,
    },
  },
  InvoiceInfoRight: {
    '& h4': {
      fontFamily: 'Poppins-SemiBold',
      fontSize: 24,
      margin: 0,
    },
    '& h3': {
      margin: 0,
      fontSize: 17,
      textTransform: 'uppercase',

    },
    '& h5': {
      margin: 0,
      textTransform: 'uppercase',
    },
  },
  InvoiceText: {
    textAlign: 'right',
    fontSize: '30px !important',
    fontFamily: 'Poppins-SemiBold',
    margin: 0,
    marginBottom: 0,
    marginRight: 120,
  },

  InvoiceBill: {
    '& h2': {
      fontFamily: 'Poppins-SemiBold',
      fontSize: 24,
      margin: 0,
    },
    '& h3': {
      fontSize: 17,
    },
    '& h4': {
      margin: '15px 0',
    },
    margin: '90px 0',
  },
  Center: {
    textAlign: 'center !important',
  },

  RestTable: {
    marginTop: 30,
    '& h3': {
      margin: '0 0',
      fontFamily: 'Poppins-SemiBold',
    },
    '& h4': {
      margin: '0 0',
    },
  },
  TotalCost: {
    '& h5': {
      margin: '30px 0',
      marginLeft: 40,
      fontSize: 20,
    },
    '& b': {
      fontFamily: 'Poppins-SemiBold',
      fontSize: 24,
      marginLeft: 10,
    },
    '& hr': {
      margin: '30px 0',
    },
  },
  InvoiceHolder:{
    margin:'0 auto',

  },
  AddressWidth:{
    maxWidth: 240,
  },
  GotoHomePage:{
    '& button': {
      fontSize: 20,
      padding:10,
    },
    '& svg': {
      fontSize: 25,
      position:'relative',
    top:4,
      marginRight:10,
    },
  },
}))

export default useStyles
