import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({

  CartTableTitle:{
display:'flex',
justifyContent:'space-between',
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
  },
  CartTable: {
    '& img': {
      width: 'auto',
      height: 165,
      width:165,
      objectFit: 'cover', 
      cursor: 'pointer',
    },
    '& p': {
      margin: 0,
    },


    fontFamily: 'Poppins-Bold',
    color:'#fba530',
    '& td': {
      borderBottom: '1px solid #3679d6',

    },
    '& td, th': {
  fontSize: 21,
  textAlign: 'left',
  textAlign: 'left',
  padding: 0,
  margin: 0,
  verticalAlign: 'top',
  padding: '30px 0',
  paddingBottom: 20,
  '@media (max-width:767px)': {
    paddingBottom: 30,

  },
         },
         '& table': {
          width: '100%',
          borderSpacing: 0,
          '& svg': {
            width: 25,
            height: 25,
            borderRadius: 50,
            border: '1px solid #3679d6',
            cursor: 'pointer',
          },
             },
             '@media (max-width:767px)': {
              margin: 0,
      
              '&  table, thead, tbody, th, td, tr ': {
                display: 'block',
              },
              '& thead tr': {
                position: 'absolute',
                top: '-9999px',
                left: '-9999px',
      
              },
              '& tr': {
                margin: '30px 0',
                padding: '15px',
                border: '1px solid #ffffff17',
              },
              '& td': {
                border: 'none',
                borderBottom: '1px solid #3679d6',
                position: 'relative',
                textAlign: 'center',
              },
              '& td:before': {
                position: 'absolute',
                left: '6px',
                paddingRight: '10px',
                textAlign: 'left',
                whiteSpace: 'nowrap',
                color: '#989EA5',
              },
              '& td:nth-of-type(1):before': {
                content: '" "',
                color: '#989EA5',
              },
              '& td:nth-of-type(2):before': {
                content: '""',
              },
              '& td:nth-of-type(3):before': {
                content: '" "',
              },
              '& td:nth-of-type(4):before': {
                content: '" "',
              },
              '& td:nth-of-type(6):before': {
                content: '""',
              },
              '& td:nth-of-type(4)': {
                borderBottom: '0',
              },
      
            },
  },

  NumericInput: {
    '& input[type="text"]': {
      width: '100%',
      padding: 6,
      color:'#fff',
      borderRadius: '0 !important',
      paddingLeft:'0 !important',
      paddingRight:'0 !important',
      fontSize:'24px !impoertant',
      outline: 0,
      border: '1px solid #fff !important',
      fontFamily: 'Poppins-SemiBold',
      background:'transparent',
    },
    '& span.react-numeric-input': {
      width: 100,
      background:'transparent',
      fontSize:21,
      marginBottom: 0,
      marginTop: 25,
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
      width: '40px !important',
      '& i:first-of-type': {
        background: '#000 !important',
          width: '12px !important',
          height:'2px !important',
          margin:'0 0 0 -5px !important',
      },
      '& i:last-of-type': {
        background: '#000 !important',
         height:'12px !important',
         width: '2px !important',
         margin:'-5px 0 0 0 !important',
      },
    },
    '& b:last-of-type': {
      width: '40px !important',
      '& i:last-of-type': {
        background: '#000 !important',
         height:'2px !important',
         width: '12px !important',
         margin:'1px 0 0 -10px !important',

      },
    },
  },
  CartInputs:{
    margin: '15px 40px',
    '& .note': {
      marginTop: 10,
      '& svg': {
        marginTop: 2,
        fontSize: 18,
      },
    },
    '& tr': {
      border:'0 !important',
    },
    '& td': {
      border:'0 !important',
    },
  },
td_total: {
  border:'0 !important',
  textAlign: 'center !important',
  '& p': {
    fontSize: 20,
  },
},
  ViewCart:{
      
    '& button': {
    color: '#2B313B',
    width: '100%',
    border: '1px solid #FFA62F',
    cursor: 'pointer',
    outline: 0,
    padding: '5px 28px',
    fontSize: '25px',
    background: '#FFA62F',
    transition: 'all .3s ease',
    fontFamily: 'Poppins-SemiBold',
    borderRadius: 13,
    textTransform: 'uppercase',
    '&:hover': {
      color: '#FFA62F',
      background: '#2B313B',

    },
  },
  },
  NoBorder: {
    '& td': {
        borderBottom:'0 !important',
    },
    '& p': {
        borderBottom:'0 !important',
        marginBottom: '0',
        position: 'relative',
        top: '10px',

    },
    },
    imageTable:{

    },
    ForCheckoutQuantity:{
      display:'none',
    },
    ForCheckoutMoreDetails:{
      display:'none',

    },
}))

export default useStyles
