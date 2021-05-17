import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#2d4562',
    color: '#fff',
    height: 420,
    display: 'flex',
    '@media (max-width:767px)': {
      flexDirection: 'column-reverse',
      height: '700px',

      ' &  .MuiTabs-scrollButtonsDesktop ': {
        display: 'block',
      },
      ' &  .MuiTabScrollButton-vertical ': {
        textAlign: 'center',
      },
      ' &  .MuiTab-root': {
        width: '100%',
        maxWidth: '100%',
      },
    },

    ' & .react-player__preview': {
      height: '330px ​!important',
    },
    ' & svg.MuiSvgIcon-root.MuiSvgIcon-fontSizeSmall': {
      fontSize: 35,
    },
    ' & button': {
      boxShadow: 'none',
      fontSize: '16px',
      background: '#3780d5',
      borderRdius: 0,
      marginBottom: 5,
      fontFamily: 'Poppins-SemiBold',
      width: '100%',
      maxWidth: '100%',
      padding: '10px 4px',

      color: '#fff',
    },

    ' & p': {
      padding: 0,
      marginBottom: 35,
      '@media (max-width:767px)': {
        fontSize: 18,
      },
    },
    ' & .react-player': {
      marginTop: 20,
    },
  },
  tabs: {
    display: 'flex',
    width: '35%',
    '@media (max-width:767px)': {
      width: '100%',
    },
  },
  indicator: {
    backgroundColor: '#FFF',
  },
  box: {
    paddingTop: 0,
    '@media (max-width:767px)': {
      padding: 0,
    },
    '& a.ytp-impression-link ': {
      display: 'none',
    },
  },
  playicon: {
    width: '60px !important',
  },
  width: {
    width: '65% !important',
    '@media (max-width:767px)': {
      width: '100% !important',
    },
  },
  search: {
    display: 'flex',
    marginTop: 20,

    '& button': {
      marginBottom: 20,
      boxShadow:'unset',
    },
    '& .searchButton': {
      color: '#fff',
    border: '1px solid #3780d5',
    cursor: 'pointer',
    height: 48,
    fontSize: 20,
    background: '#3780d5',
    textAlign: 'center',
    fontFamily: 'Poppins-Light',
    borderRadius: '0 12px 12px 0',
    marginBottom:'20px !important',
    '@media (max-width:767px)': {
      width: 'unset',
    },
    },
    '& .searchTerm': {
      color: '#fff',
      border: 0,
      height: 48,
      paddingLeft:'20px !important',
      outline: 'none',
      padding: 5,
      fontSize: 15,
      background: '#4b5059',
      fontFamily: 'Poppins-Light',
      borderRight: 'none',
      width: 280,
      '@media (max-width:768px)': {
        width: 200,
      },
      '@media (max-width:767px)': {
        width: '100%',
      },
      paddingLeft: 20,
      borderRadius: '12px 0 0 12px',
      '&::placeholder ': {
        color: '#fff',
        fontFamily: 'Poppins-Light',
        background:' transparent',
      },
    }
  }
}))

export default useStyles
