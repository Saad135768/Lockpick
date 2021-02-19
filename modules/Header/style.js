import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({

  HeaderHolder: {
    position: 'relative',
    backgroundSize: '90%',
    backgroundRepeat: 'no-repeat',
    background: "url('../../static/images/homepage/watermark.png')",
    padding: '84px 0',
    paddingBottom:'60px',
    '@media (max-width:768px)': {
      padding: '44px 0',
      paddingBottom:'30px',
    },
    height: '100%',
    '& img': {
      width: '100%',
      '@media (max-width:1024px)': {
        width: '80%',
        margin: '0 auto',
        display: 'block',
      },
    },
    '& h1': {
      marginTop: '10px',
      color:'#3680d6',
      textTransform: 'uppercase',
      fontSize: 60,
      textAlign:'left',
      marginLeft:'130px',
      marginBottom: 0,
      fontFamily: 'Poppins-SemiBold',
      '@media (max-width:768px)': {
        fontSize: 40,
        marginLeft:0,
        textAlign: 'center',
      },
      '@media (max-width:767px)': {
        fontSize: 43,

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
      background: '#337cd1',
      transition: '0.4s',
    }
    
  },


  HeaderMainImage: {
    position: 'relative',
    height: '100%',
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
        marginBottom: 30,
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
    maxHeight:380,
      '@media (max-width:767px)': {

   '& .parallax-inner': {
    transform: 'inherit !important;',
    },
  },
},

}))

export default useStyles
