import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  BasicButton: {
    color: '#fff',
    '& a': {
      color: '#fff',
    },
  },

  navbarContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'left',
    height: '100%',
  },
  NavbaTopImage:{
    background: '#3780d5',
    padding: 25,
    filter:'drop-shadow(0px 9px 10px black)',
    marginBottom: 0,
    '@media (min-width: 1440px)': {
      width: '1280px',
      margin: '0 auto',
      display: 'block',
      paddingRight: '0 !important',
      paddingLeft: '0 !important',
      maxWidth: 1280,
    },
  

    '& img': {
      position:'relative',
      zIndex:2,
      height: 45,
      width: '100%',
      objectFit: 'cover',
      marginBottom: 10,

    },
  },
  centermenu: {
    color: 'white',
    marginTop: '50px',
    textTransform: 'uppercase',
    fontFamily: 'Poppins-Light',
    padding: '0',
    width: '100%',
    zIndex: 2000,
    marginLeft: 36,
    textAlign: 'left',
    '@media (min-width: 920px)': {
      marginLeft: 22,
    },
    '& li': {
      color: '#ffa62f',
      display: 'inline-block',
      position: 'relative',
      padding: '0',
      ' & :hover': {
        transition: '0.1s',
        borderTop:'3px solid #3680d6',
        color:'#FF7700',

      },
    },
    '& a': {
      fontSize: '20px',
      cursor:'pointer',
      fontFamily: 'Poppins-Regular',
      color: '#3680d6',
      marginRight: '45px',
      '@media screen and (min-width: 1025px) and (max-width: 1200px)': {
        marginRight: 20,
        fontSize:19,
      },

      paddingTop: 10,
      '& :hover': {
        cursor: 'pointer',
      },
      '@media (max-width: 1024px)': {
        marginRight: '25px',
      },
      '& img': {
        position: 'relative',
        top: 10,
      },
   
    },
    '& a.active': {
      paddingBottom: '2px',
      color:'#fba62f',
      '& :hover': {
        color: '#FF7700',
      },
    },

  },
  RightMenu :{
    width: 520,
    marginBottom:0,
    position:'relative',
    color: 'white',
    justifyContent: 'flex-end',
    marginTop: '30px',
    textTransform: 'uppercase',
    fontFamily: 'Poppins-Light',
    padding: '0',
    display:'flex',
    '& li': {
      color: '#ffa62f',
      display: 'inline-block',
      padding: '0',
    },
    '& a': {
      fontSize: 33,
      color: '#ffa62f',
    position: 'relative',
    top: 13,
      marginLeft: '15px',
     
      '& img': {
        position: 'relative',
        top: 10,
      },
    },
    '& a.active': {
      paddingBottom: '2px',
      fontFamily: 'Poppins-Bold',
      borderBottom: '3px solid #3680d6',
    },
    '& form': {
      display: 'inherit',

    },
  },
  cartnumber: {
    height: 21,
    position: 'absolute',
    width: 21,
    background: '#ffa62f',
    borderRadius: '50%',
    right: '-22%',
    top: '10%',
    color: 'white',
    textAlign: 'center',
    '@media (max-width: 1025px)': {
      display: 'none',
    },
    '& p': {
      display: 'inline',
    zIndex: '100 !important',
    position: 'relative',
    }
  },
  NavbarHolder: {
    borderBottom:'1px solid #0000001c',
    background: 'transparent',
    padding:0,
    width: '100%',
    ' & .MuiContainer-root.MuiContainer-maxWidthLg ': {
boxShadow:'none',
    },
    
    '@media (min-width:1440px)': {
      margin: '0 auto',
      padding: '0 !important',
      width: '100% !important',
      paddingLeft: 0,
      paddingRight: 0,
      maxWidth: '1280px !important',
    },
    '@media (max-width: 1024px)': {
display:'none',
    },
    ' & .search ': {
      width: "100%",
       position: "relative",
        display: "flex",
    },
    ' & .searchTerm ': {
      width: "100%",
      border: "0",
      borderRight: "none",
      fontFamily: 'Poppins-Light',
      padding: "5px",
      paddingLeft: "30px",
      background:'#4b5059',
      fontSize:'15px',
      height: "45px",
      borderRadius: "12px 0 0 12px",
      outline: "none",
      color: "#fff",
     
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
      color: "#fff",
      borderRadius: "0 12px 12px 0",
      cursor: "pointer",
      fontSize: "20px",
    },
    ' & .wrap': {
      width: "100%",
       margin: "7px auto",
    },
  },
  carticon: {
    position: 'relative',
    '& svg': {
      color: '#212331',
    },
    '& :hover': {
      color: '#f16e21',
      transition: '0.3s',
      cursor: 'pointer',
    },
  },
  Logo: {
    '& img': {
      marginBottom: '3px',
      padding: '0',
      width: '100%',
      position: 'relative',
      marginTop: 13,
    },
  },

  NavbarTop: {
    background: '#282828',
    '& ul': {
      textAlign: 'left',
    },
    '& li': {
      display: 'inline-block',
      '& a': {
        color: '#fff',
        marginRight: '20px',
      },
    },
  },
  searchIcon: {
    position: 'relative',
    borderRadius: '4px',
    color: '#8492a6',
    textAlign: 'center',
    '& svg': {
      position: 'absolute',
      left: '10px',
      bottom: '10px',
    },
  },
  inputRoot: {
    padding: '3px 20px',
    fontSize: '14px',
    paddingLeft: '10px',
    color: '#000',
    opacity: '1',
    marginLeft: '4px',
    height: '40px',
    borderRadius: '50px',
    background: '#eff2f7',
    marginTop: '9px',
    width: '100%',
    border: '1px solid #eff2f7',
    '&::placeholder': {
      fontSize: '14px',
      opacity: '1',
      color: 'red',
    },
    '&::-webkit-input-placeholder': {
      fontSize: '15px',
      color: '#000',
      opacity: '1',
    },
    '&::-ms-input-placeholder': {
      fontSize: '15px',
      color: '#000',
      opacity: '1',
    },
  },
  inputInput: {
    padding: '10px 0',
    paddingLeft: '10px 0',
    width: '100%',
  },
  PopoverHolder: {
    width: '100%',
    position: 'relative',
    background: '#fff',
    color: '#fff',
    padding: '20px 20px',
    textAlign: 'center',
    '& :hover': {
      background: '#fff',
    },
  },
  MenuItem: {
    borderBottom: '1px solid #ebf0f4',
    padding: '10px 0',
    textAlign: 'right',
    marginTop: '10px',
    marginRight: '0 !important',
    marginLeft: '0 !important',
    width: '100%',
    display: 'block',
    '& a': {
      fontSize: '18px',
    },
  },

  testholder: {
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
  test: {
    position: "absolute",
    top: "2px",
    background: "#315888",
    width: "22px",
    height: "22px",
    borderRadius: "50px",
    textAlign: "center",
    color: "#fff",
    fontStyle: "normal",
    lineHeight: "22px",
    fontWeight: "bold",
    right: "0px",
    zIndex: 0,
    fontSize: "13px",

   


    '& span': {
      fontFamily: 'Poppins-SemiBold',
    },

  },


  paper: {
    top: '73px !important',
    '& *': {
      top: '73px !important',
    },
    '& .MuiPaper-root.MuiPopover-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded': {
      width: '100%',
      maxWidth: '100%',
      minWidth: '100%',
      top: '0 !important',
      left: '0 !important',
      margin: '0 ',
      marginLeft: '0',
      marginRight: '0',
      borderRadius: '0',
      boxShadow: 'none',
      padding: '13px',
      background: '#F2F2F2',
      height: 280,
      display: 'flex',
      overflowY: 'auto',
      overflowX: 'hidden',

    },
    '.MuiPopover-root': {
      height: '325px',
      margintop: '0px !important',
    },
  },

  root :{
width: 200,
  },
}))

export default useStyles
