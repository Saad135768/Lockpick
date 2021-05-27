import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  MobileTitle: {
    padding: '25px',
    background: '#3680d6',
    display: 'none',
    '@media (max-width:767px)': {
      display: 'block',
      '& h3': {
        marginBottom: 20,
        color: '#fff',
        marginTop: 0,
        fontSize: '28px',
        fontFamily: 'Poppins-SemiBold',
      },
      '& h5': {
        color: '#fff',
        fontSize: 20,
        marginTop: 20,
        lineHeight: '30px',
        marginBottom: 0,
      },
    },
  },
  ContactFormHolder: {
    height: 691,
    backgroundSize: '50%',
    overflow: 'hidden',
    backgroundRepeat: 'no-repeat',
    '& p': {
      color: '#fff',
      fontSize: 20,
      marginTop: 20,
      lineHeight: '35px',
      marginBottom: 40,
      '@media (max-width:767px)': {
        marginBottom: 30,
        display: 'none',
      },
    },
    '& img': {
      width: '100%',
    },

    '& input': {
      marginBottom: 34,
    },

    '& .last': {
      marginTop: 70,
      '@media (max-width:767px)': {
        marginTop: 0,
      },
    },
    '& textarea': {
      background: '#ffffff21',
      width: '100%',
      zIndex: 99,
      position: 'relative',
      paddingLeft: 40,
      height: 226,
      outline: 0,
      transition: '0.3s',
      fontSize: 22,
      fontFamily: 'Poppins-Regular',

      border: 0,
      paddingTop: 30,
      '@media (max-width: 767px)': {
        paddingLeft: '20px',
      },
      '&::placeholder ': {
        color: '#fff',
        fontSize: 22,
        outline: 0,
        border: 0,
        background: ' transparent',
      },
      '&:focus': {
        outline: 0,
        border: '1px solid #fba62f',
        color: '#fff',
      },
    },
    '@media (max-width: 767px)': {
      '& .MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-6.MuiGrid-grid-lg-5  ': {
        paddingBottom: 3,
      },
      '& .MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-6.MuiGrid-grid-lg-7  ': {
        paddingTop: 0,
      },
    },
  },

input: {
    width: '100%',
    border: 0,
    height: 70,
    outline: 0,
    zIndex: '99',
    position: 'relative',
    fontSize: 22,
    background: '#ffffff21',
    transition: '0.3s',
    paddingLeft: 40,
    '&::placeholder ': {
      color: '#fff',
      fontSize: 22,
      outline: 0,
      border: 0,
      background: ' transparent',
    },
    '&:focus': {
      outline: 0,
      border: '1px solid #fba62f',
      color: '#fff',
    },
  
  '@media (max-width: 767px)': {
    '& .MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-6.MuiGrid-grid-lg-5  ': {
      paddingBottom: 3,
    },
    '& .MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-6.MuiGrid-grid-lg-7  ': {
      paddingTop: 0,
    },
  },
},
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    right: 0,
    backgroundRepeat: 'no-repeat',
    'mix-blend-mode': 'multiply',
    transition: 'background 0.3s, border-radius 0.3s, opacity 0.3s',
    backgroundPosition: 'center right',
    backgroundSize: '67% auto',
    background: "url('https://image.devteam9260.workers.dev/?width=1000&image=https://m2k-static.s3-eu-west-1.amazonaws.com/lock-pick/contactbg.png')",
  },

  ContactFormContent: {
    display: 'flex',
    marginBottom: 0,
    '& :hover': {
      transform: 'scale(1.04)',
      transition: '0.3s',
    },
  },
  ContactFormIcon: {
    marginRight: 17,
    '& svg': {
      fontSize: '28px',
    },

  },
  ContactFormInfo: {
    fontSize: '19px',
    textTransform: 'uppercase',
    marginBottom: 15,
    fontFamily: 'Poppins-SemiBold',

  },
  ContactFormBg: {
    color: '#fff',
    marginTop: 10,
    background: '#3680d6',
    padding: 60,
    '@media (max-width:767px)': {
      background: 'transparent',
      paddingBottom: '0 !important',
    },
    '@media (max-width:768px)': {
      padding: 25,

    },

    '& h3': {
      marginBottom: 40,
      marginTop: 0,
      fontSize: '40px',
      textShadow: 'rgb(0 0 0 / 40%) 0px 4px 5px',
      fontFamily: 'Poppins-Bold',
      '@media (max-width:767px)': {
        fontSize: '28px',
        marginBottom: 20,
      },
      '@media (max-width:767px)': {
        display: 'none',
      },
    },
  },

  ContactFormRight: {
    '@media (max-width:767px)': {
      padding: '25px',
      paddingTop: 0,
      marginTop: 10,
      paddingBottom: 0,
    },
    position: 'relative',
    '& h3': {
      marginBottom: 20,
      color: '#FFA62F',
      textShadow: 'rgb(0 0 0 / 40%) 0px 4px 5px',
      marginTop: 0,
      fontSize: '34px',
      fontFamily: 'Poppins-Bold',
      '@media (max-width:767px)': {
        fontSize: '25px',

      },
    },
  },

  ButtonHolder: {
    textAlign: 'left',
    marginTop: 27,
    marginBottom: 40,
    '@media (max-width: 767px)': {
      marginBottom: 20,
      textAlign: 'center',

    },
  },
  errorMsg: {
    color: 'red !important',
    fontWeight: 500,
    margin: '-20px 0 20px',
  },
}))

export default useStyles
