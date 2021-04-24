import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  CartHolder:{
        '& .ItemLink': {
       width: 280,
       '@media (max-width:768px)': {
width:'100%',

        },
        },
        '& .TotalPrice': {
          width: 255,
          paddingLeft: 10,
          '@media (max-width:768px)': {
   width:'100% !important',
   paddingLeft: 0,

           },
           },

    marginTop:100,
    marginBottom:140,
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
      marginTop:30,
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
  CartTableTitle:{
display:'flex',
justifyContent:'space-between',
'& h2': {
  color: '#fba530',
  fontFamily: 'Poppins-Bold',
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
  },
  CartTable: {
    '& img': {
      width: 'auto',
      height: 165,
      width:165,
      objectFit: 'contain', 
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

  CartInputs:{
    marginTop: 40,
    
    '& .note': {
      marginTop: 10,
      '& svg': {
        marginTop: 2,
        fontSize: 18,
      },
  
    },
  },
}))

export default useStyles
