import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  SingleProductContent: {
color: '#fff',


'& h1': {
  color: '#fba62f',
  fontFamily: 'Poppins-Bold',
},
'& h2': {
  fontFamily: 'Poppins-SemiBold',
  fontSize: 20,
},
'& h3': {
  fontFamily: 'Poppins-Bold',
  fontSize: 30,
  color: '#fba62f',
},
'& p , h5': {
  fontSize: 18,
},
'& h5': {
  margin: 0,
},
'& p span': {
  color: '#3680d6',
},
'& h4': {
  fontSize: 18,
  color: '#fba62f',

},
' & h6': {
  color:'#3680d6',
  fontSize: 18,
  margin: 0,
},

  },
  AboutHolder: {
    margin:'100px 0',
    '& img': {
     
    },
    
},

SingleProductHead:{
  display:'flex',
  width: '100%',
  marginBottom: 30,
  color:'#fff',
  justifyContent:'space-between',
  '& h4': {
    fontFamily: 'Poppins-Regular',
    color:'#fba530',
    marginTop: 10,
    '& svg': {
      width: 25,
      marginLeft: 5,
      height: 25,
      cursor: 'pointer',
      position: 'relative',
      top: 8,
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
    AddToCartBtn: {
      marginBottom:10,
      marginTop:30,
      width:'80%',
      '& button': {
        width:'80%',
        textTransform:'capitalize',
      },
    },
    BuyNowBtn: {
      marginBottom:10,
      marginTop:30,
      width:'80%',
      '& button': {
        color:'#fff',
        textTransform:'capitalize',
        width:'80%',
      },
    },
}))

export default useStyles
