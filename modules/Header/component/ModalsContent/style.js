import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  MuiDialogContent: {
    padding:'0 0',
    '& .MuiDialog-paperWidthSm': {
    border:'1px solid #FFA62F',
    padding:'0 0',
    overflow:'hidden',
    maxHeight: '100%',
    maxWidth: 950,
    height: 400,
    maxHeight:400,
    '& .slick-slider': {
      height: 400,
      maxHeight:400,

      '@media (max-width:767px)': {
        height: '100%',
        maxHeight: '100%',

      },
    },
    '@media (max-width:767px)': {
      height: '100%',
      maxHeight: '100%',
    },
    width: 950,
    background: '#e0e1e1',
    '& h3': {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 24,
        color:'#FFA62F',
        background: '#151b1f',
        textAlign: 'center',
        padding: 50,
        textTransform: 'uppercase',
        marginBottom:0,
        marginTop: 0,
        '@media (max-width:768px)': {
          padding: 0,
        },
        '@media (max-width:767px)': {
          paddingTop: 0,
          paddingBottom: 0,
          fontSize: 20,

        },
    }, 
    '& .slick-next': {
        right: 15,
        top: '40%',
        '@media (max-width:767px)': {
          top: '15%',
          right: 40,
        },

    },
    '& .slick-prev': {
        left: 15,
        zIndex: 9,
        top: '40%',
        '@media (max-width:767px)': {
          top: '15%',
        },
    },
    '& .slick-slide': {
        padding: 0,
        '@media (max-width:767px)': {
          padding: 10,

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
      bottom: '50px',
      position:'relative',
      zIndex:40,
      '@media (max-width:767px)': {
        bottom: 0,
      },
    },
},


    '& h5': {
      color: '#fff',
    fontSize: 16,
    marginTop:0,
    marginBottom:0,
    '@media (max-width:768px)': {
      fontSize: 16,
    },
    },
 
    '& h6': {
      color: '#fff',
    fontSize: 19,
    marginTop:10,
    marginBottom:30,
    '@media (max-width:768px)': {
      fontSize: 16,
      marginBottom:30,
    },
    },
    

    
    '@media (max-width:1024px)': {
      '& button': {
        padding:15,
        fontSize: 'inherit',

      },
    },

  },
 

  sliderLeft:{
    height: 400,
    maxHeight:400,
    paddingBottom:'57px',
background:'#151b1f',

'@media (max-width:768px)': {
  padding: '20px 10px',
  height: '100%',
  maxHeight:'100%',


},


},

  sliderRight:{
    padding: '0 30px 0 0',
    fontFamily: 'Poppins-Regular',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    fontSize: 22,
   
    '& img': {
        marginBottom:10,
        '@media (max-width:767px)': {
          margin: '0 auto',
          marginBottom:10,
          display: 'block',
          textAlign: 'center',
        },
      },
    '& a': {
        color:'#fff',
        marginTop:10,
   
        },
        '@media (max-width:767px)': {
          padding: 0,

          '& p': {
            paddingTop: 0,
            fontSize: 19,
            margin:0,
            },
        },

  },

  TitleHolder :{
    '& a': {
      marginleft: 30,
      marginTop: 80,
      fontSize: 15,
      width: '120px',
      borderRadius: 0,
      background: 'transparent',
      color: '#fff',
      padding: '10px 0',
      margin: '-2px auto',
      border:'1px solid #fff',
      display: 'block',
      textAlign: 'center',
      
      '@media (max-width:768px)': {
        marginTop: 100,
      },
      '@media (max-width:767px)': {
        marginTop: 10,
      },
      '&:hover': {
        border:'1px solid #3680d6', 
        background:'#3680d6',
        },
    },
   
   
  }

 
}))

export default useStyles
