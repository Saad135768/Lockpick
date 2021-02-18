import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  FooterHolder: {
    zIndex: 3,
    paddingBottom: '34px',
    color: '#a6a6a6',
    '& li': {
      listStyle: 'none',
      display:'inline-block',
    },
    '& ul': {
      padding: '0',
    },


  },
  FooterSeperator:{
    marginTop:'30px',
    '& img': {
      width: '100%',
    height: 50,
    objectFit: 'cover',
    },
  },

  CenterLogo:{
    '& img': {
      width: '90%',
      marginTop:40,
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
   
    },
  },
  FooterRight: {
    marginTop:80,
      '& h4': {
      color: '#fba62f',
      fontFamily: 'Poppins-SemiBold',
      fontSize: 27,
      marginBottom: 10,
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
      fontSize: '17px',
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
