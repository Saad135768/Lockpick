import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  MobileMenuContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 15,
    ' & button': {
      '@media (max-width:768px)': {
        padding: '10px 15px',
        marginLeft: 15,
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
      '@media (max-width:768px)': {
        width: '80%',
        padding: '0px 60px',
        paddingLeft: 0,
        margin: '14px 0',
      },
    },
  },

  MobileMenuHolder: {
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
    },

    ' & .bm-cross': {},
    ' & .bm-menu-wrap': {
      position: 'fixed',
      height: '100%',
      top: '0px',
    },
    ' & .bm-menu ': {
      background: '#2b323c',
      padding: '60px 10px',
      fontSize: '1.15em',
      '& a': {
        color: '#fff',
        display: ' block',
        textAlign: 'left',
        marginBottom: 17,
      },
        fontSize: '1.15em',
      '& ul': {
        padding: '0px',
     

      }
    },
    ' & .bm-morph-shape': {
      fill: '#2b323c',
    },
    ' & .bm-item-list': {
      color: '#b8b7ad',
      padding: '0.8em',
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

    '@media (min-width:769px)': {
      display: 'none',
    },

    '& img': {},
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
}))

export default useStyles
