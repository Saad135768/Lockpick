import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  MobileMenuContent: {
    '@media (min-width:768px)': {
      justifyContent: 'space-between',
      alignItems: 'center',
      marginLeft: 0,
      display: 'flex',
    },  
  ' &  .MuiAccordionSummary-expandIcon': {
    margin: 0,
    position: 'relative',
    bottom: 8,

  },

    ' & button': {
      '@media (max-width:768px)': {
        padding: '10px 15px',
      },
      '@media (max-width:414px)': {
        padding: '10px 10px',
        marginLeft: 15,
      },
      '@media (max-width:375px)': {
        padding: '10px 6px',
        marginLeft: 15,
      },
    },
 
  },
  LoginText: {
    '@media (max-width:414px)': {
      padding: '0 20px',
    },
  },
  Logo: {
    marginLeft: '0',
  
    ' & img': {
      width: '100%',
      
      '@media (max-width:1024px)': {
        width: '100%',
      },

      '@media (max-width:768px)': {
        width: '80%',
        padding: '0px 60px',
        paddingLeft: 0,
        margin: '14px 0',
      },
      '@media (max-width:767px)': {
        width: '200px',
        padding: 0,
        paddingLeft: 0,
        margin: '15px 0',
        textAlign: 'center',
        margin: '15px auto',
        display: 'block',
        marginBottom: 30,
        paddingRight: 20,

      },
      
    },
  },

  CartIconHolder: {
    position: "relative", 
    zIndex: 9,
    '& svg': {
      zIndex: 99,
      position: 'relative',
    },
    '&:hover em ': {
      background: '#3780d5',
      transition: '0.3s',
    },
  },
  CartIconNumber: {
    position: "absolute",
    bottom: 37,
    background: "#315888",
    width: "26px",
    height: "26px",
    borderRadius: "50px",
    textAlign: "center",
    color: "#fff",
    fontStyle: "normal",
    lineHeight: "26px",
    right: 0,
    zIndex: 999,
    fontSize: "13px",
    '& span': {
      fontFamily: 'Poppins-SemiBold',
    },

  },

  MobileMenuHolder: {
    paddingBottom: 2,
    '& form':{
      display:'flex',
      width: '100%',

        },
    '& .MuiAccordionSummary-content':{
      margin:0,
        },
    ' & .MuiPaper-root': {
      color: '#fff',
      transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      backgroundColor: 'transparent',
      boxShadow: 'none',
    },
    ' & .MuiAccordionSummary-root': {
      padding: 0,
      margin:0,
    },
    ' & .MuiAccordionDetails-root': {
      width: "100%",
       margin: "8px auto",
        paddingBottom: "20px",
        display: 'block',
    },

    ' & h3 , .MuiAccordionSummary-content.Mui-expanded, .MuiAccordion-root.Mui-expanded': {
      margin: '0',
    },
    ' & .MuiAccordion-root:before': {
      background: 'rgba(53,128,214,0.5) !important',
    },

    ' &  svg.MuiSvgIcon-root': {
      color: '#fba62f',
      fontSize: 34,
    },

    
    position: 'relative',
    boxShadow: '0px 3px 6px #00000014',
    width: '100%',
    background:'transparent',
    zIndex: '99',
    top: '0px',
    direction: 'ltr',
    ' & .bm-burger-button': {
      position: 'absolute',
      width: '28px',
      height: '26px',
      right: '17px',
      top: '23px',
      '@media (max-width:767px)': {
        top: '16px',

      },
    },
  
    ' & span.bm-burger-bars': {
      height: '8% !important',
    },
    ' & .bm-burger-bars': {
      background: '#FFA62F',
    },
    ' & .bm-burger-bars-hover': {
      background: '#3680d6',
    },
    ' & .bm-cross-button': {
      height: '24px',
      width: '24px',
      top: '20px !important',
      right: '40px !important',

      ' & button#react-burger-cross-btn:focus': {
        outline: 0,
        background: 'transparent',
      },
      '@media (min-width:1025px)': {
        display: 'none',
      },
    },

    ' & .bm-cross': {},
    ' & .bm-menu-wrap': {
      position: 'fixed',
      height: '100%',
      width: '340px !important',
      top: '0px',
    },
    ' & .bm-menu ': {
      background: '#2b323c',
      padding: '60px 15px',
      fontSize: '1.15em',
      '& a': {
        color: '#fff',
        display: 'block',
        textTransform: 'uppercase',
        textAlign: 'left',
        marginBottom: 10,
        fontSize: 22,
      },
      '& svg': {
        fontSize: 27,
        color:'#df9128',
        marginTop: 6,
      },
        fontSize: '1.15em',
      '& ul': {
        padding: '0px',
     

      },
      '& .active': {
        paddingBottom: '2px',
        fontFamily: 'Poppins-Bold',
        color: '#fba62f',
      },
    },
    ' & .bm-morph-shape': {
      fill: '#2b323c',
    },
    ' & .bm-item-list': {
      color: '#b8b7ad',
      padding: '0',
      marginTop: '21px',
    },
    ' & .bm-item': {
      display: 'inline-block',
      padding: '0',
      outline: '0',
    },
    ' & .bm-overlay': {
      background: 'rgba(0, 0, 0, 0.3)',
      top: '0',
    },
    ' & li': {
      listStyle: 'none',
      ' & a': {
        color: '#fff',
      },
    },

    bmItem: {
      display: 'inline-block',
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)',
    },

    '@media (min-width:1025px)': {
      display: 'none',
    },


    ' & .search ': {
      width: "75%",
       position: "relative",
        display: "flex",
    },
    ' & .searchTerm ': {
      width: "100%",
      border: "0",
      borderRight: "none",
      fontFamily: 'Poppins-Light',
      padding: "5px",
      paddingLeft: "10px",
      fontSize:'15px',
      height: "45px",
      borderRadius: "5px 0 0 5px",
      outline: "none",
      color: "#2B313B",
      background:'#46494c',
     
    },
    ' & input.searchTerm::placeholder': {
      color: '#2B313B',
      fontFamily: 'Poppins-Light',
      fontSize:'14px',
    },
    
    ' & .searchTerm:focus': {
      color: '#fff',

    },
    ' & .searchButton': {
      fontFamily: 'Poppins-Light',
      height: "45px",
      border: "1px solid #fba530",
      background: "#fba530",
      textAlign: "center",
      color: "#2B313B",
      borderRadius: "0 5px 5px 0",
      cursor: "pointer",
      fontSize: "20px",
    },
    ' & .wrap': {
      width: "100%",
      display:'flex',
      justifyContent: 'space-between',
       margin: "7px auto",
        paddingBottom: "20px",
    },

  

  },

  MenuIcon: {
    margin: '10px 0',
    marginRight: '40px',
    display: 'flex',
    fontSize: '24px',
  },

  LoginIcon: {
    '& img': {
      color: '#212331',
      width: '30px',
      marginTop: 6,
    },
  },

  CartIcon: {
    marginTop: '20px',
    fontSize: '27px',
    marginLeft: '10px',
    '& :hover': {
      color: '#f16e21',
      transition: '0.3s',
      cursor: 'pointer',
    },
  },

  activeItemMenu: {
    color: '#fff',
    borderBottom: '1px solid #fff',
    paddingBottom: '10px',
    display: ' block',
  },
  searchIcon: {
    width: '100%',
    height: '50px',
    lineHeight: '60px',
    background: '#f16e21',
    borderRadius: '4px',
    color: '#fff',
    textAlign: 'center',
    marginTop: '30px',
  },
  inputRoot: {
    fontSize: '14px',
    paddingLeft: '10px',
    borderRadius: '4px',
    marginTop: '30px',
    marginLeft: '4px',
    height: '50px',
    marginBottom: '30px',
    width: '100%',
    border: '1px solid #eff2f7',
    '& ::placeholder': {
      fontSize: '14px',
    },
    '& ::-webkit-input-placeholder': {
      fontSize: '15px',
    },
    '& ::-ms-input-placeholder': {
      fontSize: '15px',
    },
    '& :placeholder': {
      fontSize: '15px',
    },
  },
  inputInput: {
    padding: '10px',
    paddingLeft: '10px',
    textAlign: 'right',
    width: '100%',
  },
  RightMenu :{
    color: 'white',
    marginTop: '35px',
    textTransform: 'uppercase',
    fontFamily: 'Poppins-Light',
    padding: '0',
    display:'flex',
    textAlign: 'left',
    '& li': {
      color: '#ffa62f',
      display: 'inline-block',
      padding: '0',
    },
    '& a': {
      fontSize: '26px',
      color: '#ffa62f',
      marginRight: '25px',
     
      '& img': {
        position: 'relative',
        top: 10,
      },
     
  
    },

    root: {
      width: '100%',
  
      ' & .MuiPaper-root': {
        color: '#fff',
        transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        backgroundColor: 'transparent',
        boxShadow: 'none',
      },
      ' & .MuiAccordionSummary-root': {
        padding: '5px 0',
      },
      ' & .MuiAccordionDetails-root': {
        padding: '5px 0',
      },
  
      ' & h1': {
        color: '#fff',
        marginBottom:'40px',  
        fontFamily: 'Poppins-Bold',
      },
      ' & h2': {
        color: '#ffa62f',
        margin: '0',
        fontSize: 24,
        fontFamily: 'Poppins-Bold',
      },
      ' & h3 , .MuiAccordionSummary-content.Mui-expanded, .MuiAccordion-root.Mui-expanded': {
        margin: '0',
      },
      ' & .MuiAccordion-root:before': {
        background: 'rgba(53,128,214,0.5) !important',
      },
  
      ' &  svg.MuiSvgIcon-root': {
        color: '#fba62f',
        fontSize: 34,

      },
  
      
    },

    
  },
}))

export default useStyles
