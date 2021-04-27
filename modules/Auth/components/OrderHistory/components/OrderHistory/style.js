import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  OrdePlaced:{
color:'#519fd9',
position: 'relative',
bottom: 4,
fontSize:16,
fontFamily: 'Poppins-Regular',
    fontWeight: 'bold',
  },
  OrderHistoryHolder:{
    fontFamily: 'Poppins-Regular',


},
OrderNummber:{
  display: 'flex',
  textTransform:'uppercase',
  '& h4': {
    fontSize: 16,
    textTransform: 'uppercase',
    fontFamily: 'Poppins-SemiBold',
   },
   '& span': {
    marginLeft: 10,
    fontFamily: 'Poppins-SemiBold',
color:'#707271',
marginTop: 0,
   },
},
OrderText:{
  marginLeft: 20,
},
OrderSummaryInfo:{
  padding: '15px 10px',
background:'#f5ece5',
width:'100%',
'& h4': {
margin:0,
'& svg': {
  width: 25,
  cursor: 'pointer',
  fontSize:24,
  position: 'relative',
  top: -1,
},

},
'& .MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-12.MuiGrid-grid-md-12.MuiGrid-grid-lg-12 , .MuiGrid-spacing-xs-2 > .MuiGrid-item': {
  paddingTop: 0,
  paddingBottom: 0,
},
},

  Logout:{
    marginTop: 32,
textAlign: 'right',
textTransform:'uppercase',
margin: '10px 0',

  },
  errorMsg: {
    color: 'red',
    fontWeight: '600',
    marginTop: 0,
    marginLeft: 20,
  },
  LoginInput: {
    border: 0,
    borderRadius: '8px',
    display: 'block',
    height: '50px',
    background:'#d5d6d8',
    marginLeft: 20,
    marginBottom :20,
    width: '80%',
    transition: '0.3s',
    fontSize: 16,
    paddingLeft: '40px',
    zIndex: 99,
    fontFamily: 'Poppins-Light',
    position: 'relative',
    outline: 0,
    '&::placeholder ': {
      color: '#397399',
      fontFamily: 'Poppins-Light',
      background:' transparent',
    },
    '&:focus': {
      transition: '0.3s',
      fontFamily: 'Poppins-Light',
      border:'1px solid #fba62f',
    },
    '@media (max-width:767px)': {
      width:'90%',
      marginLeft: 10,
      paddingLeft: 15,
      },
  },
  closeButton: {
    position: 'absolute',
    right: 0,
    top: 0,
    color: 'red',
  },
  root: {
    paddingLeft:0,
    '& h3': {
      color:'#2b333d',
      fontFamily: 'Poppins-SemiBold',
      textAlign: 'center',
      '@media (max-width:767px)': {
        marginBottom: 0,
      },
    },
  
zIndex:'2000 !important',

    '& .MuiDialog-paperWidthSm': {
      width:'800px',
      borderRadius: '25px',
      maxWidth:'800px',
      padding: 0,
      '& button': {
        background: '#397399',
        color: '#FFF',
        width:'100%',
        textTransform: 'capitalize',
        fontSize: 18,
        fontFamily: 'Poppins-Regular',
        borderRadius: 8,
      },
    },
   
      
  },

  LeftRight:{
    overflow:'hidden',
display:'flex',
'@media (max-width:767px)': {
  display:'block',

  },

  },

  Left:{
    zIndex: 9999,
    '& .NotActive': {
border: '1px solid #FFA62F',
cursor: 'pointer',
opacity: 0.3,
outline: '0',
padding: '8px 28px',
    },
    '& .ButtonHolder': {
      marginTop: 10,
      marginBottom: 20,
      '@media (max-width:767px)': {
        marginTop: 10,
        marginBottom: 15,
      },
    },
    background: '#fba631',
    width:'45%',
    '@media (max-width:767px)': {
      width:'100%',
      },
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    padding: 25,
    '& img': {
      width: '90%',
       margin:'0 auto',
       display:'block',
          },
   
  },
  Right:{

   
    '& .MuiAccordionSummary-content' : {
      margin: '7px 0',
    },

    '& .MuiAccordion-root.Mui-expanded' : {
     margin:0,   
    },
    
    '& .MuiAccordionDetails-root , .MuiAccordionSummary-root' : {
padding:0,

    },
    '& .MuiAccordion-root' : {
      paddingBottom: 11,  
        },

        '& .MuiAccordion-root' : {
            boxShadow:'none',
        },
        
     '& .MuiAppBar-colorPrimary' : {
      borderBottom:0,
      boxShadow:'none',
      right: 22,
      width:'110%',
      position: 'relative',
    },
    '&  button#simple-tab-0 , button#simple-tab-1' : {
      background: '#929292',
      width: '50%',
      opacity: '1',
      borderRadius:'0',
    },
    '&  button.Mui-selected': {
      background: '#929292 !important',
      color:'#fba631',
      borderBottom:'4px solid #519fd9',
    },
    
    
    '& .MuiTabs-indicator': {
      background: '#929292 !important',
      color:'#fba631',
     },
   
    
    width:'55%',
    padding:0,
    marginTop: 0,
    display: 'flex',
    alignIems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    background:'#fff',
    '@media (max-width:767px)': {
      width:'100%',
      },
      '& .MuiBox-root': {
        padding: '0 7px',
    },
    '& table': {
      width:'100%',
      },
  },

  imageTable:{
    '& img': {
      width:'100px !important',
      height: '100px !important',
      objectFit: 'contain',
      marginTop: 0,
      marginRight:5,
    },

},

OrderTableTd: {
width:'100%',
},

OrderTableHolder:{
  width: '100%',
  display: 'flex',
  justifyContent: 'space-around',
  marginTop: 0,
  '& h4': {
    margin: 0,
    color: '#6e6e6e',
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 2,
    fontSize: 16,
   },
},
OrderTableLeft:{
  '& h5': {
    fontFamily: 'Poppins-Regular',
    color: '#519fd9',
    fontSize: 16,
    marginTop: 10,
    marginBottom:0,
    textTransform: 'uppercase',
    fontFamily: 'Poppins-SemiBold',
   },
   '& svg': {
    
    top: 2,
    position: 'relative',
    marginRight: 10,
 
   },

   
},
OrderInvoice:{
  display: 'flex',
  textAlign: 'right',
  color: '#519fd9',
  justifyContent: 'flex-end',

  '& span': {
    position:'relative',
bottom:8,
  },
},
OrderTableRight:{

},

OrderItems:{
  '& h4': {
    fontSize: 16,
    textTransform: 'uppercase',
    fontFamily: 'Poppins-SemiBold',
    color:'#707271',
   },
   '& span': {
    marginLeft: 15,
   },
},

OrderTotal:{
  '& h4': {
    fontSize: 16,
    textTransform: 'uppercase',
    fontFamily: 'Poppins-SemiBold',
    color:'#707271',
   },
   '& span': {
    marginLeft: 30,
   },
},
}))

export default useStyles
