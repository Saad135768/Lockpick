import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({

  Wallpapers:{
    margin:'40px 0',
    ' & h3': {
      color:'#fff',
      fontSize: '29px',
      textAlign:'center',
      textTransform: 'uppercase',
      marginBottom: 25,
      fontFamily: 'Poppins-SemiBold',
      },
    
      ' & img': {
        width:'100%',
     
        },
        '& .slick-slide': {
          padding: '0 15px',
        },

    '& .slick-prev:before , .slick-next:before ': {

      fontSize: 90,
      opacity: 1,
    },
    '& button.slick-arrow.slick-prev.slick-disabled ,  button.slick-arrow.slick-next.slick-disabled': {
          opacity: 0.5,
    },
    '& .slick-prev': {
      left: '-70px',
      '@media (max-width:768px)': {
        left: '20px',
zIndex:30,
      },
    },
'& .slick-next': {
  right: '-50px',
  '@media (max-width:768px)': {
    right: '35px',
  },
},
'& .slick-dots li.slick-active button::before': {
  bottom: 0,
   color: '#fba62f',
   opacity: 1,
},

'& .slick-dots li button:before': {
  fontSize: '20px',
  color: '#fba62f',
},
  },
  
  TutorialsRight:{
    paddingLeft: 130,
    '@media (max-width:768px)': {
      paddingLeft: 30,
    },
    '@media (max-width:767px)': {
      paddingLeft: 0,
    },
  },

}))

export default useStyles
