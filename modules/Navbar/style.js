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
    '& img': {
      height: 45,
      width: '100%',
      objectFit: 'cover',
      marginBottom: 10,

    },
  },
  centermenu: {
    color: 'white',
    marginTop: '35px',
    textTransform: 'uppercase',
    fontFamily: 'Poppins-Light',
    padding: '0',
    width: '100%',
    marginLeft: 80,
    textAlign: 'left',
    '& li': {
      color: '#ffa62f',
      display: 'inline-block',
      padding: '0',
    },
    '& a': {
      fontSize: '19px',
      color: '#ffa62f',
      marginRight: '55px',
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

  },
  RightMenu :{
    color: 'white',
    marginTop: '35px',
    textTransform: 'uppercase',
    fontFamily: 'Poppins-Light',
    padding: '0',
    textAlign: 'left',
    '& li': {
      color: '#ffa62f',
      display: 'inline-block',
      padding: '0',
    },
    '& a': {
      fontSize: '19px',
      color: '#ffa62f',
      marginRight: '55px',
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
  },

  NavbarHolder: {
    background: 'transparent',
    padding:0,
    width: '100%',
    '@media (max-width: 768px)': {
display:'none',
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
      marginTop: '6px',
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
}))

export default useStyles
