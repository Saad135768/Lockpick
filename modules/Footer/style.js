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
      textAlign:'right',
      marginBottom: 0,
      margin: '30px 0px',
      '@media (max-width:767px)': {
        textAlign:'center',

        margin: '0',

      },
    },

    '@media (max-width:767px)': {
      textAlign: 'center',
    },
  },
  FooterSeperator:{
    background: '#3780d5',
    padding: 25,
    filter:'drop-shadow(0px 9px 10px black)',
    marginBottom: 0,
    marginTop:30,
    '@media (min-width: 1440px)': {
      width: '1280px',
      margin: '0 auto',
      display: 'block',
      paddingRight: '0 !important',
      paddingLeft: '0 !important',
      maxWidth: 1280,
      marginTop:30,

    },
  
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
      textAlign: 'left',
    marginLeft: 54,
      marginBottom: 10,
      '@media (max-width: 767px)': {
        marginTop:10,
        textAlign:'center',
        marginLeft: 0,

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
