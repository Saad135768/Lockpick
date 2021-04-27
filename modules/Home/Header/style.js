import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({

  HeaderHolder: {
    ' & .MuiContainer-root.MuiContainer-maxWidthLg': {
      padding: '0 !important',
      margin: '0  auto !important',
      overflow: 'hidden',
      width: '100% !important',
    },

    ' & .slick-list': {
      overflow: 'visible',
    },

    padding: '15px 0',
    paddingBottom:'30px',
    '@media (max-width:768px)': {
      padding: '44px 0',
      overflowX: 'hidden',
      paddingBottom:'30px',
    },
    '@media (max-width:767px)': {
      padding: '10px 0',
      paddingBottom:'30px',
      overflowX:'hidden',

    },
    height: '100%',
    '& img': {
      width: 'auto',
      position: 'relative',
      zIndex: 9,
      margin: '0 auto',
      display: 'block',
      '@media (max-width:768px)': {
        width: '100%',


      },
    },
    '& h1': {
      marginTop: '10px',
      textShadow: 'rgb(0 0 0 / 40%) 0px 4px 5px',
      color:'#3680d6',
      textTransform: 'uppercase',
      fontSize: 65,
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
      margin: '0 10px',
    },
    '& .slick-dots li button::before': {
      color: 'transparent',
      border: '2px solid #fb9d28',
      borderRadius: '50%',
      width: 10,
      height: 10,
    },
    '& .slick-dots': {
      bottom: '65px',
      position:'relative',
      zIndex:40,
      '@media (max-width:767px)': {
        bottom: 30,
      },
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
    },




    '& .slick-prev': {
      left: '-40px',
      zIndex:9,
    },
'& .slick-next': {
  right: '15px',
  zIndex:9,

},
    
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
    '@media (max-width:767px)': {
      overflowX:'hidden',
    },
    '& .slick-prev , .slick-next ': {
        opacity: 0.5,
      },
    '& .slick-prev:before , .slick-next:before ': {
      content:"''",
        fontSize: 90,
        opacity: 0.3,
      },
  },
  HeaderGlow: {
    width: '100%',
  },

  HeaderCircles:{
    '& h2': {
      fontFamily: 'Poppins-SemiBold',
      fontSize:90,
      textAlign: 'center',
      color:'#FFA62F',
      marginTop: 50,
      textShadow: 'rgb(0 0 0 / 40%) 0px 4px 5px',
      marginBottom: 20,
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
     width:'100%',
     '@media (max-width:768px)': {
      maxWidth:'100px',

    },
    },

  },
  HeaderCirclesItem:{
 
    textAlign: 'center',
    '& img': {
      marginBottom:30,
      '&:hover': {
        cursor: 'pointer',
      },

    },
    '& h3': {
      marginTop: 20,
      color: '#fff',
      fontSize: 22,
      fontFamily: 'Poppins-Regular',
      '&:hover': {
        cursor: 'pointer',
      },
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
img: {
  filter: 'drop-shadow(0.35rem 2.35rem 0.9rem rgba(0, 0, 0, 0.3)',
  cursor: 'pointer',
},
two:{
  zIndex:1,
  position: 'absolute',
  animation: 'animate 15s linear infinite',
  bottom: 56,
  maxHeight: 200,
  '& img': {
    height: 200,
    width: '100%',
    '@media (max-width:767px)': {
      height: 60,
    },

  },
},
three:{
  // animation: 'fadeIn 1.5s infinite alternate',
  position: 'absolute',
  bottom: 0,
  position: 'absolute',
  left: '50%',
  top: '65%',
  '@media (max-width:767px)': {
    top: '57%',
  },
  '-webkit-transform': 'translate(-50%, -50%)',
  transform: 'translate(-50%, -50%)',
  '& img': {
    marginLeft: 60,
    marginTop:40,
    width:'70%',
  
    '@media (max-width:768px)': {
      marginTop:70,

    },
    '@media (max-width:767px)': {
      width:'90%',
      marginTop:20,
      marginLeft: 0,

    },
   
  },
  
},

}))

export default useStyles
