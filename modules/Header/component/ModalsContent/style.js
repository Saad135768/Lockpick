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
    height: 500,
    maxHeight:500,
    '& .slick-slider': {
      height: 500,
      maxHeight:500,

      '@media (max-width:767px)': {
        height: '90%',
        maxHeight: '90%',
        overflow: 'auto',
      },
    },
    '@media (max-width:767px)': {
      height: '80%',
      maxHeight: '80%',
      overflow: 'auto',
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
          padding:19,
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
          right: 20,
        },

    },
    '& .slick-prev ': {
        left: 15,
        zIndex: 9,
        top: '40%',
        '@media (max-width:767px)': {
          top: '15%',
          width: 37,
          height: 54,
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
        bottom: '7px',
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

    '@media (max-width:767px)': {
      '& .slick-prev:before , .slick-next:before' : {
        position: 'relative',
        bottom: 14,
        right: 9,
      },
      '& .slick-next' : {
      
        width: 37,
        height: 54,
      },
  },
},

  sliderLeft:{
    height: 500,
    maxHeight:500,
    paddingBottom:'57px',
background:'#151b1f',

'@media (max-width:767px)': {
  padding: '20px 10px',
  height: '100%',
  maxHeight:'100%',
  overflow: 'auto',
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
    '& p': {
      paddingLeft: 30,
    },
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
            fontSize: 18,
            margin:0,
            },
        },

  },

  TitleHolder :{
    '& a': {
      marginleft: 30,
      marginTop: 80,
      fontSize: 12,
      width: '120px',
      borderRadius: 0,
      background: 'transparent',
      color: '#fff',
      textTransform:'uppercase',
      padding: '10px 0',
      fontFamily: 'Poppins-Bold',
      margin: '-2px auto',
      border:'1px solid #fba62f',
      display: 'block',
      textAlign: 'center',
      
      '@media (max-width:768px)': {
        marginTop: 100,
      },
      '@media (max-width:767px)': {
        marginTop: 10,
      },
      '&:hover': {
        border:'1px solid #000', 
        background:'#fff',
        transition:'0.4s',
        color:'#000',
        },
    },
   
  },
  
  ImageBg:{
    width: 180,
    display:'flex',
    height: 180,
    background: '#fba530',
    borderRadius: '50%',
    margin: '0 auto',
    marginBottom: 13,
    '&:hover': {
      background: '#FF7700 ',
      boxShadow: 'inset 0 10px 10px 5px rgb(0 0 0 / 50%)',
      transition: '0.2s',
      
    },

    '&:hover img': {
      transform: 'scale(1.1)',
      transition: 'all 0.4s ease-in-out 0s',

      
    },

    '& .ImageItem1 , .ImageItem2 , .ImageItem3': {
    width: '80%',
    display: 'block',
    textAlign: 'center',
    margin: '0 auto',
    transition: 'all 0.4s ease-in-out 0s',
    marginRight: 20,
    maxWidth: '100%',
      },
      '& .ImageItem2 ': {
        width: '60%',
        margin: '0 auto',
          },
          '& .ImageItem3': {
            width: '75%',
            margin: '0 auto',
              },
  }
 
}))

export default useStyles
