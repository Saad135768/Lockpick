import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  QuickCart:{
    '& .MuiPaper-root': {
      background: '#2b333d',
      height: '100vh !important',
    },
  },
  QuickCartTitle :{
    width:'100%',
  },
    list: {
      width: 400,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      background:'#2b323c',
      padding:0,
      '& .MuiList-padding': {
        padding: '0',
      },
    },
    QuickText:{
      width: '100%',
    },
    fullList: {
      width: 'auto',
    },
    CartHolder:{
      marginTop:0,
      height: '100%',

      marginBottom:20,
      '@media (max-width:768px)': {
        marginTop:30,
        marginBottom:50,
        '& .MuiGrid-spacing-xs-8': {
          flexDirection: 'column-reverse',
          width:'100%',
          margin: 0,
        },
      },
      '@media (max-width:767px)': {
        marginTop:0,
        height:'auto',
        marginBottom:40,
        '& .MuiGrid-spacing-xs-8': {
          flexDirection: 'column-reverse',
          width:'100%',
          margin: 0,
        },
        '& .MuiGrid-spacing-xs-8 > .MuiGrid-item': {
          padding: 10,
  
        },
      },
      '& hr': {
        background: '#3679d6',
        height: 1,
        border: 0,
        margin: 0,
      },
        },
    QuickTableTitle:{
  display:'flex',
  padding: '15px 20px',
  paddingBottom: 0,
  background: '#2d2a2b',
  justifyContent:'space-between',
  '& h2': {
    textTransform: 'uppercase',
    textAlign: 'center',
    marginTop: 0,
  },
  '& h4': {
    fontFamily: 'Poppins-Regular',
    color:'#fba530',
    textTransform: 'uppercase',
    marginTop: 0,
    '& svg': {
      width: 30,
      height: 30,
      cursor: 'pointer',
      position: 'relative',
      top: 3,
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
    promocode:{
      display: 'flex',
      '& svg ,path': {
        color: '#fba530',
        stroke: '#fba530',
        fontSize: 23,
      },
  
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
  
    CartTable2: {
      '&  input[type="text"]': {
        padding: '5px !important',
        marginBottom: 5,
      },
      '& .CartSub p': {
        marginTop: 5,
      },
      '& .MuiList-padding': {
        paddingTop: 0,
        paddingBottom: 0,
      },
      '& .ItemLink': {
        cursor: 'pointer',
        width:'200px',
        marginRight: 10,
      },

      height: '85vh',
      '& img': {
        width: 'auto',
        height: '120px !important',
        width:  '120px !important',
        objectFit: 'contain', 
        marginRight: 20,

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
    fontSize: '16px !important',
    textAlign: 'left',
    padding: 0,
    padding: '15px 0 !important',
    paddingBottom: 20,
    '@media (max-width:767px)': {
      paddingBottom: 30,
  
    },
           },
           '& table': {
             padding: 20,
            width: '100%',
            borderSpacing: 0,
            '& svg': {
              width: 20,
              height: 20,
              borderRadius: 50,
              border: '1px solid #3679d6',
              cursor: 'pointer',
            },
               },
               '@media (max-width:767px)': {
                margin: 0,
        height:'auto',
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
              '& .TotalPrice': {
                display: 'none',
              },
    },
  
}));

export default useStyles;
