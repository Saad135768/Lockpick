import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  Invoice:{
background:'#fff',
'& h4,h2,h5': {
  fontSize:17,

},
padding:'80px 30px',
margin:80,

  '& table': {
    borderCollapse: 'collapse',
    width: '100%',
},
'& td, th': {
  border: '1px solid #fff',
  textAlign: 'left',
  padding: 8,
  fontFamily:'Poppins-SemiBold',
},
'& tr th': {
  backgroundColor: '#eee',
  textAlign:'center',
},

  },
  OrderHistoryHolder:{
    fontFamily: 'Poppins-Regular',


},
productName:{
  textTransform:'uppercase',
  // '& h4': {
  //   fontSize: 16,
  //   textTransform: 'uppercase',
  //   fontFamily: 'Poppins-SemiBold',
  //  },
 
},

productTitle:{
width:300,
},
RestTable:{
  textAlign: 'right',
},

InvoiceInfoLeft: {
  '& h2': {
    fontFamily:'Poppins-SemiBold',
  },
    '& h4': {
    margin:0,
   },
   '& a': {
    color:'blue',
    textDecoration:'underline',
    marginLeft: 30


   },
   
},
InvoiceInfoRight: {
  '& h4': {
    fontFamily:'Poppins-SemiBold',
fontSize:24,
margin:0,

  },
  '& h5': {
    margin:0,
    textTransform:'uppercase',

   },

},
InvoiceText:{
  textAlign: 'right',
  fontSize: 30,
  fontFamily: 'Poppins-SemiBold',
  margin: 0,
  marginRight: 50,
},

InvoiceBill:{
  '& h2': {
    fontFamily:'Poppins-SemiBold',
fontSize:24,
margin:0,
  },
  '& h4': {
    margin:'15px 0',

   },
margin:'50px 0',
},
Center:{
  textAlign: 'center !important',
},

RestTable:{
  '& h3': {
    margin:'0 0',
    fontFamily:'Poppins-SemiBold',

   },
   '& h4': {
    margin:'0 0',

   },
},
TotalCost:{
  '& h5': {
    margin:'30px 0',
marginLeft:40,
   },
   '& b': {
    fontFamily:'Poppins-SemiBold',
    fontSize:24,
    marginLeft:10,

   },
   '& hr': {
    margin:'30px 0',
   },
},
}))

export default useStyles
