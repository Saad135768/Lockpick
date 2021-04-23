import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  OrderSummaryHolder: {


'& td.ItemName': {
  display: 'flex',
  justifyContent:'space-between',
},
'& p.ItemPrice': {
  marginTop: 0,
},

'& .ForCheckoutQuantity': {
  display: 'block',
  marginTop: 6,
},
'& .ForCheckoutMoreDetails': {
  display: 'block',
  marginTop: 6,
  color:'#3680d6',
},

    '& td.imageTable ': {
      borderBottom: 0,

  },

      '& td.imageTable img': {
    width:'85px !important',
    height: '85px !important',
    objectFit: 'contain',
    marginTop: 0,

},


'& .ItemName , .TotalPrice': {
  borderBottom: 0,
  fontSize: '14px !important',
  color: '#fff',
},
'& .NumericInput , .CartSub , .RemoveItem , .total , .CartInputs , .TotalPrice , td_total' : {
      display: 'none !important',
      borderBottom: 0,

  },

    '& h4': {
      fontFamily: 'Poppins-Regular',
      color:'#fba530',
      marginTop: 20,
      '& svg': {
        width: 25,
        height: 25,
        cursor: 'pointer',
        position: 'relative',
        top: 8,
      },
    },

 
    '& h3 ': {
      fontSize: 18,
    },
    '& h3 , p': {
      marginBottom: 0,
    },
    '&  p , h4': {
      marginTop: 22,
    },
    '& h2': {
      color: '#fba530',
      fontFamily: 'Poppins-Bold',
    },
    '& img': {
      width: '100%',
      marginTop: 40,
    },

    '& button': {
      textTransform: 'capitalize',
      width: '100%',
      fontSize: 23,
      marginTop: 20,

    },
  },

  OrderSummaryContent: {
    background: '#4c515b',
    padding: 25,
    marginTop: 12,
    '& .EditCart h4': {
color:'#fba530',
borderBottom:'1px solid #fba530',
    },
    '& .EditCart h3': {
      color:'#fba530',
          },

    marginTop: 9,
    paddingBottom: 30,

  },

  OrderSummaryFlex: {
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    '& h4': {
      cursor: 'pointer',
    }
  },
  OrderSummaryInformation: {
    textAlign: 'center',
    marginTop: 15,
    color: '#fff',
    '& p': {
      margin: 0,
    },
  },

  totalPrice: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    marginTop: '16px !important',
    color:'#fba530',
  },
  totalText: {
    '& h3': {
      color:'#fba530',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    marginTop: 15,

    },
  },
  
  promocode:{
    borderTop:'1px solid #3780d5',
    borderBottom:'1px solid #3780d5',
    padding:'20px 0',
    display: 'flex',
    marginTop:10,

  '& input': {
    background: 'transparent',
    border: 0,
    marginLeft: 10,
    outline: 0,
    fontSize:18,
    color: '#fba530',

  },
  '& input::placeholder': {
    color: '#fba530',
    fontSize:18,
  },
  '& input::-ms-input-placeholder': {
    color: '#fba530',
    fontSize:18,

  },
  '& input::-webkit-input-placeholder': {
    color: '#fba530',
    fontSize:18,
  },
  },
  
  ContinueShopping:{
    textAlign: 'right',
    '& h4': {
      fontSize:18,
    },
  },

}));

export default useStyles;
