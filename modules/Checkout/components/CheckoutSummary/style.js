import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  OrderSummaryHolder: {
    '& .CartProductInfo': {
      width: '100%',
    },
    '& td.ItemName': {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'Poppins-Regular',
      fontSize: '15px',
      '@media (max-width:767px)': {
        paddingTop: 0,
        paddingBottom: 10,
      },
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
      color: '#3680d6',
      '&:hover': {
        color: '#3191ff',
      },
    },

    '& td.imageTable ': {
      borderBottom: 0,
      '@media (max-width:767px)': {
        paddingTop: 10,
        paddingBottom: 10,
      },
    },

    '& td.imageTable img': {
      width: '85px !important',
      height: '85px !important',
      objectFit: 'contain',
      marginTop: 0,
      marginRight: 5,
      '@media (min-width:900px) and (max-width:1300px)': {
        width: '70px !important',
        height: '70px !important',
      },
    },

    '& .ItemName , .TotalPrice': {
      borderBottom: 0,
      fontFamily: 'Poppins-Regular',

      fontSize: '16px',
      color: '#fff',
    },
    '& .NumericInput , .CartSub , .RemoveItem , .total , .CartInputs , .ItemPrice , td_total': {
      display: 'none !important',
      borderBottom: 0,
    },

    '& h4': {
      fontFamily: 'Poppins-Regular',
      color: '#fba530',
      marginTop: 20,
      '& svg': {
        width: 25,
        height: 25,
        cursor: 'pointer',
        position: 'relative',
        top: 8,
        left: 8,
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

    '& .ItemLink': {
      marginTop: '0 !important',
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
    '@media (min-width:800px) and (max-width:1300px)': {
      padding: 20,
    },

    '& .ItemLink ': {
      maxWidth: 165,
      '@media (min-width:900px) and (max-width:1000px)': {
        maxWidth: 137,
      },
      '@media (min-width:1000px) and (max-width:1280px)': {
        maxWidth: 150,
      },
      '@media (max-width:767px)': {
        maxWidth: '100%',
        width: '100%',
        textAlign: 'center',
      },
    },
    '& .TotalPrice ': {
      maxWidth: 100,
      textAlign: 'right',
      '@media (max-width:767px)': {
        maxWidth: '100%',
        width: '100%',
        paddingBottom: 20,
        paddingTop: 0,

        textAlign: 'center',
      },
    },
    '& .EditCart h4': {
      color: '#fba530',
      borderBottom: '1px solid #fba530',

      '&:hover': {
        color: '#FF7700',
        transition: '0.3s',
      },
    },
    '& .EditCart h3': {
      color: '#fba530',
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
    },
    '& p': {
      display: 'inline-block',
    },
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
    color: '#fba530',
  },
  totalText: {
    '& h3': {
      color: '#fba530',
      fontFamily: 'Poppins-SemiBold',
      fontSize: 24,
      marginTop: 15,
    },
  },

  promocode: {
    borderTop: '1px solid #3780d5',
    borderBottom: '1px solid #3780d5',
    padding: '20px 0',
    display: 'flex',
    justifyContent: 'space-between',

    marginTop: 10,

    '& input': {
      background: 'transparent',
      border: 0,
      marginLeft: 0,
      outline: 0,
      fontSize: 17,
      color: '#fba530',
    },
    '& input::placeholder': {
      color: '#fba530',
      fontSize: 17,
    },
    '& input::-ms-input-placeholder': {
      color: '#fba530',
      fontSize: 17,
    },
    '& input::-webkit-input-placeholder': {
      color: '#fba530',
      fontSize: 17,
    },
    '& button': {
      width: 160,
      fontSize: 15,
      marginTop: 0,
      textTransform: 'capitalize',
      padding: '8px 6px',
      cursor: 'pointer',
      fontFamily: 'Poppins-Regular',
      borderRadius: 13,
      outline: 0,
      border: 0,
      background: '#52c65e',
      color: '#FFFFFF',
      '&:hover':{
        background: '#3680d6',
        color: '#fff',
      },
    }
  },
  originalPrice: {
    display: 'inline-block',
    textDecoration: 'line-through',
    margin: '0 15px',
  },
  ContinueShopping: {
    textAlign: 'right',
    '& h4': {
      fontSize: 18,
      '@media (max-width:767px)': {
        marginTop: 0,
      },
    },
  },

  promoAdd:{
background:'#52c65e !important',
display: 'flex',
justifyContent: 'space-around',
padding: '7px 9px  !important',

'& svg': {
  width: 20,
  height: 20,
  background: '#fff',
  color: '#52c65e',
  borderRadius: 50,
  marginRight: 0,
  position: 'relative',
  top: 1,
},
  },
}))

export default useStyles
