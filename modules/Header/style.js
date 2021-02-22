import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({

  HeaderHolder: {
    padding: '75px 0',
    paddingBottom:'60px',
    '@media (max-width:768px)': {
      padding: '44px 0',
      paddingBottom:'30px',
    },
    '@media (max-width:767px)': {
      padding: '10px 0',
      paddingBottom:'30px',
    },
    height: '100%',
    '& img': {
      width: '100%',
      '@media (max-width:1024px)': {
        width: '100%',
        margin: '0 auto',
        display: 'block',
      },
    },
    '& h1': {
      marginTop: '10px',
      color:'#3680d6',
      textTransform: 'uppercase',
      fontSize: 60,
      textAlign:'center',
      marginBottom: 0,
      fontFamily: 'Poppins-SemiBold',
      '@media (max-width:768px)': {
        fontSize: 40,
        marginLeft:0,
        textAlign: 'center',
      },
      '@media (max-width:767px)': {
        fontSize: 35,
      },
      '@media (max-width:375px)': {
        fontSize: 32,
      },
    },
    
    '& .slick-dots li': {
      margin: '0 15px',
    },
    '& .slick-dots li button::before': {
      color: '#fff',
      fontSize: 14,
      top:10,

    },
    '& .slick-slide:hover': {
      transition: '0.2s',
    },
    '& .slick-slide': {
      outline: 'none !important',
      padding: '10px 10px',
    },
    '& .slick-slide:focus': {
      outline: 'none !important',
    },
    
    '& .first .animated.fadeInUp': {
      animationDelay: '0.2s',
    },
    '& .second .animated.fadeInUp': {
      animationDelay: '0.4s',
    },
    '& .third .animated.fadeInUp': {
      animationDelay: '0.6s',
    }
    
  },

  HeaderImage:{
    position: 'relative',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    background: "url('../../static/images/homepage/watermark.png')",
  },

  HeaderMainImage: {
    position: 'relative',
    '& img': {
      position: 'relative',
      width: '80%',
      margin: '0 auto',
      display: 'block',
      textAlign: 'center',
      right: '0',
      bottom: '52px',
    },
  
  },

  HeaderContent: {
    width: '100%',
  },
  HeaderGlow: {
    width: '100%',
  },

  HeaderCircles:{
    '& h2': {
      fontFamily: 'Poppins-Bold',
      fontSize:80,
      textAlign: 'center',
      color:'#FFA62F',
      marginTop: 0,
      marginBottom: 50,
      textTransform:'uppercase',
      '@media (max-width:768px)': {
        fontSize:50,
        
      },
      '@media (max-width:767px)': {
        fontSize:30,
        marginBottom: 15,
        marginTop:30,
      },
    },
    '& img': {
      marginBottom: 30,
    margin: '0 auto',
    display: 'block',
     maxWidth:'150px',
     '@media (max-width:768px)': {
      maxWidth:'100px',

    },
    },

  },
  HeaderCirclesItem:{
    '@media (min-width:768px)': {
      '-moz-transition': 'all .4s',
      '-webkit-transition': 'all .4s',
      '-o-transition': 'all .4s',
      '-ms-transition': 'all .4s',
      '&:hover': {
        'transform ':  'translateY(-10px) ',
      '-moz-transform ':  'translateY(-10px) ',
      '-webkit-transform ':  'translateY(-10px) ',
      '-ms-transform ':  'translateY(-10px) ',
      '-o-transform ':  'translateY(-10px) ',
      transition: 'all .4s',
    },

    },
    textAlign: 'center',
    '& img': {
      marginBottom:30,
    },
    '& h3': {
      marginTop: 0,
      color: '#fff',
      fontSize: 22,
    },


  },
  HeaderMainImge:{
      '@media (max-width:767px)': {
   '& .parallax-inner': {
    transform: 'inherit !important;',
    },
  },
},
one:{
  position: 'relative',
},
two:{
  position: 'absolute',
  animation: 'animate 15s linear infinite',
  bottom: 0,
  maxHeight: 200,
  '& img': {
    height: 200,
    '@media (max-width:767px)': {
      height: 60,
    },

  },
},
three:{
  animation: 'fadeIn 1.5s infinite alternate',
  position: 'absolute',
  bottom: 0,
  position: 'absolute',
  left: '50%',
  top: '57%',
  '@media (max-width:767px)': {
    top: '51%',
  },
  '-webkit-transform': 'translate(-50%, -50%)',
  transform: 'translate(-50%, -50%)',
  '& img': {
    marginLeft: 60,
    marginTop:30,
    width:'70%',
    '@media (max-width:768px)': {
      width:'90%',
      marginLeft: 0,
      marginTop:20,

    },
   
  },
  
},

}))

export default useStyles
