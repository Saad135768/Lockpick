import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({

  SingleProductButtons: {
 
'& button': {
  width: '100%',
  fontFamily: 'Poppins-Bold',
  fontSize: 19,
  textTransform: 'capitalize',
},
  },

  SingleProductContent: {
color: '#fff !important',

fontFmily: 'Poppins-Regular',

'& h1': {
  color: '#fba62f',
  fontFamily: 'Poppins-Bold',
  marginBottom: 10,
},
'& h2': {
  fontFamily: 'Poppins-SemiBold',
  fontSize: 20,
},
'& h3': {
  fontFamily: 'Poppins-Bold',
  fontSize: 30,
  color: '#fba62f',
  marginBottom: 0,
},
'& p , h5': {
  fontSize: 18,
  fontFamily: 'Poppins-Regular',
  '& p span': {
    background: 'unset !important',
    color: '#fff !important',
  },
},
'& h5': {
  margin: 0,
},
'& p span': {
  color: '#3680d6',
  fontFamily: 'Poppins-Regular',
},
'& h4': {
  fontSize: 18,
  color: '#fba62f',
  marginBottom: 0,
  fontFamily: 'Poppins-Regular',

},
' & h6': {
  color:'#3680d6',
  fontSize: 18,
  margin: 0,
},

  },
  AboutHolder: {
    fontWeight: 'inherit !important',
    margin:'100px 0',
    '& img': {
     
    },
    '@media (max-width: 767px)': {
      margin:'70px 0',
      '& .MuiGrid-spacing-xs-8': {
  width:'100%',
      },
    },
},

SingleProductHead:{
  '@media (max-width: 1024px)': {
    paddingLeft:40,
   },
  '& h2': {
    fontSize: 16,
  },
  '& nav': {
    color: '#fff',
  },
  display:'flex',
  width: '100%',
  marginBottom: 30,
  color:'#fff',
  justifyContent:'space-between',
  '@media (max-width: 768px)': {
    display: 'block',
    marginLeft: 0,
  },
  '& h4': {
    fontFamily: 'Poppins-Regular',
    color:'#fba530',
    marginTop: 5,
    '@media (max-width: 1024px)': {
      paddingRight:40,
     },
     '@media (max-width:768px)': {
      paddingRight:0,
     },

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
        width: 130,
        background:'transparent',
        fontSize:21,
        marginBottom: 30,
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
      '& button': {
        textTransform:'capitalize',
      },
    },
    BuyNowBtn: {
      marginBottom:10,
      marginTop:15,
      '& button': {
        color:'#fff',
        textTransform:'capitalize',
      },
    },

    SingleProductSlider: {
      '&  .image-gallery-thumbnail': {
        height: 65,
        width: 65,
        cursor: 'pointer',
      },
      '& img.image-gallery-thumbnail-image': {
        height: 50,
        width: 50,
      },
      '& button.image-gallery-thumbnail': {
        marginBottom: 10,
      },
    },

    SingleProductListContent:{
      marginLeft:50,
      '@media (max-width:768px)': {
        marginLeft:0,
      },
    },
    SingleProductList:{
      borderTop: '1px solid #4672d3',
      paddingBottom: 30,
      paddingTop: 30,

      '&  ul': {
        padding:0,
        margin: 0,
        listStyle: 'none',

      },
      '& h3': {
        color: '#fba62f',
        fontFamily: 'Poppins-Bold',
        fontSize: 38,
        textTransform:'uppercase',
        marginBottom: 0,
        margin: 0,

      },
      '& li': {
        color: '#fff',
        fontSize: 23,
        fontFamily: 'Poppins-Regular',

        '&::before': {
          content:'""',
          background: '#fba62f',
          display: 'inline-block',
          width: '10px',
          height:'10px',
          marginLeft: '0',
          marginRight: 5,
          borderRadius: 50,

        },
      },
    },

    SingleProductOverview:{
      '& h3': {
        color: '#fba62f',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 30,
        marginBottom: 0,
        marginLeft:50,

      },
      '& p': {
        color: '#fff',
        fontSize: 20,
        marginBottom: 0,
        fontWeight: 'bold',
        marginTop:15,
        marginBottom:30,

      },
    },
    SingleProductOverviewHolder:{
      '@media (max-width: 1024px)': {
       paddingLeft:40,
      },
      '@media (max-width:768px)': {
        paddingLeft:0,
       },

      '&  ul': {
        padding:0,
        margin: 0,
        listStyle: 'none',

      },
      '& li': {
        color: '#fff',
        fontSize: 23,
        fontFamily: 'Poppins-Regular',

        '&::before': {
          content:'""',
          background: '#fba62f',
          display: 'inline-block',
          width: '10px',
          height:'10px',
          marginRight:10,
          marginLeft: '0',
          borderRadius: 50,

        },
      },
      '& ol li': {
        listStyle: 'unset',
        '&::before': {
          content:'""',
          background: 'none',
          display: 'inline-block',
          width: '10px',
          height:'10px',
          marginLeft: '0',
          borderRadius: 50,

        },
      },
      '& hr': {
        borderBottom: 0,
        borderTop: '1px solid #4672d3',

      },
      '& a': {
        textDecoration: 'underline',
        color: '#2775e5 !important',
      },
      '& strong': {
        fontWeight: 'bold',
      },
    },
}))

export default useStyles
