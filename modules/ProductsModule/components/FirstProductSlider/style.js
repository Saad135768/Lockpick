import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  ProductSliderHolder: {
   margin:'80px 0',
   padding:'40px 0',
   '@media (max-width:767px)': {
    padding:'0 0',
    margin:'40px 0',
   },
    '& .slick-slide img': {
      display: 'block',
      width: '85%',
      margin: '0px auto',
      display: 'block',
      height: 460,
      objectFit: 'contain',
    },
    '& .slick-dots li button:before': {
      fontSize: '20px',
      color: '#fba62f',
    },
    '& .slick-next:before , .slick-prev:before': {
      content: '""',
    },

    '& button.slick-arrow.slick-next.slick-disabled , button.slick-arrow.slick-prev.slick-disabled' : {
      opacity: 0.25,
    },
    '& .slick-dots li': {
      bottom: '0 10px',
    },
    '& .slick-dots': {
      bottom: '-25px',
      '@media (max-width:767px)': {
        bottom: 0,

      },
    },
    '& .slick-dots li.slick-active button::before': {
      bottom: 0,
       color: '#fba62f',
       opacity: 1,
    },
    '& .slick-next , .slick-prev': {
      width: 0,
      height: 0,
      borderBottom: '15px solid transparent',
      borderTop: '15px solid transparent',
      top: '40%',
    },
    '& .slick-next ': {
      borderLeft: '30px solid white',
      right: 30,
      zIndex: 9,

    },
    '& .slick-prev': {
      borderRight: '30px solid white',
      left: 30,
      zIndex: 9,
    },
    '& .slick-next': {
    },
 
  },
  
  ProductSliderBg:{
    background:'#FFFFFF3B',
    padding: '60px 20px',
    borderRadius:20,
    width:'100%',
    '@media (max-width:767px)': {
      padding: '40px 15px',
     },

  }

}))

export default useStyles
