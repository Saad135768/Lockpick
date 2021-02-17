import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  FooterHolder: {
    background: '#0E4C8D',
    zIndex: 3,
    paddingTop: 70,
    paddingBottom: '34px',
    color: '#a6a6a6',
    '& li': {
      listStyle: 'none',
    },

    '& svg': {
      fontSize: '25px',
      marginLeft: '10px',
      marginBottom: '20px',
      color: '#fff',
      '@media (max-width: 767px)': {
        marginLeft: 0,
        marginRight: 30,
        marginTop: 15,

      },

    },

    '@media (max-width: 768px)': {
      padding: '40px 0',
    },
    '@media (max-width: 414px)': {
      padding: '30px 0',
    },
  },

  Copyright: {
    textAlign: 'center',
    '@media (max-width: 414px)': {
      marginTop: 20,
    },

    '& p  ': {
      display: 'inline-block',
      fontSize: 15,
      color: '#fff',
      '@media (max-width: 414px)': {
        textAlign: 'center',
        lineHeight: '27px',
        fontSize: 16,
      },
    },
  },

  FooterLogo: {
    '& img': {
      width: '100%',
      marginTop: 55,
      '@media (max-width: 767px)': {
        marginTop: 25,
        margin: '0 auto',
        display: 'block',
        width: '70%',
        textAlign: 'center',

      },
    },
  },
  FooterRight: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  FooterSocial: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',

    '@media (max-width: 768px)': {
      padding: '0',
    },
    '@media (max-width: 767px)': {
      display: 'flex',

    },
  },
  FooterLogoSocial: {
    '& img': {
      marginTop: '40px',
      '@media (max-width: 768px)': {
        padding: '0',
      },
      '@media (max-width: 767px)': {
        display: 'flex',
        margin: '0',
      },
    },
  },
  centermenu: {
    marginTop: '70px',
    padding: '0',
    textAlign: 'center',
    '& li': {
      display: 'inline-block',
      padding: '0',
      '@media (max-width: 768px)': {
        margin: '5px',
      },
    },
    '& a': {
      fontSize: '19px',
      color: '#fff',
      marginRight: '25px',
      '@media (max-width: 768px)': {
        marginRight: '0',
      },
    },
    '@media (max-width: 767px)': {
      marginTop: '20px',

    },
  },

}))

export default useStyles
