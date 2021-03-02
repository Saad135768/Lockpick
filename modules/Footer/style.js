import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  FooterHolder: {
    zIndex: 3,
    paddingBottom: 10,
    '@media (max-width: 767px)': {
      paddingBottom: 0,

    },
    color: '#a6a6a6',
    '& li': {
      listStyle: 'none',
      display:'inline-block',
      '& span': {
        paddingRight: 10,
        color: '#fff',
      },
    },
    '& ul': {
      padding: '0',
      marginBottom: 0,
      margin: '30px 0px',
      '@media (max-width:767px)': {

        margin: '0',

      },
    },

    '@media (max-width:767px)': {
      textAlign: 'center',
    },
  },
  FooterSeperator:{
    filter: 'drop-shadow(1px 7px 4px black)',
    marginTop:'30px',
    '& img': {
      width: '100%',
    height: 50,
    objectFit: 'cover',
    },
  },

  CenterLogo:{
    '& img': {
      width: '80%',
      margin: '80px auto',
      display: 'block',
      marginBottom: 40,
      '@media (max-width: 767px)': {
        marginTop:0,
        marginBottom: 0,
        width: '70%',
      },
    },
  },

  Copyright: {
    marginTop:'90px',
    '@media (max-width: 767px)': {
      marginTop:'0',
    },
    '& p  ': {
      color: '#fff',
      fontSize: 16,
  },
},
  FooterLogo: {
    '& img': {
      width: '100%',
      marginTop: 55,
      '@media (max-width: 767px)': {
        marginTop: 35,
        width: '50%',
      },
    },
  },
  FooterRight: {
    marginTop:80,
      '& h4': {
      color: '#fba62f',
      fontFamily: 'Poppins-SemiBold',
      fontSize: 27,
      marginBottom: 10,
      '@media (max-width: 767px)': {
        marginTop:10,
      },
  },
  '@media (max-width: 768px)': {
    marginTop:30,
  },
  '@media (max-width: 767px)': {
    marginTop: 0,
  },
  },

  FooterSocial: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
     
    '& svg': {
      width: 40,
      background: '#3680d6',
      height: 40,
      marginRight: 20,
      color: '#fff',
      borderRadius: 50,
      padding: 8,
      lineHeight: 42,
    
    },

    '& svg:hover': {
      background:'#fff',
      color:'#3680d6',
      transition:'0.3s',
    },
    
  },

  centermenu: {
    marginTop: '20px',
    padding: '0',
    '& li': {
      display: 'inline-block',
      padding: '0',
      '@media (max-width: 768px)': {
        margin: '5px',
      },
    },
    '& a': {
      fontSize: 16,
      color: '#fff',
      marginRight: '10px',
    
      '@media (max-width: 768px)': {
        marginRight: '0',
      },
    
    },
    '@media (max-width: 767px)': {
      marginTop: '20px',

    },
    '& li a:hover': {
      color: '#fba62f',
      transition: '0.3s',
    },
  },

  FooterScroll:{
    zIndex: 99,
    position: 'relative',
  },

}))

export default useStyles
