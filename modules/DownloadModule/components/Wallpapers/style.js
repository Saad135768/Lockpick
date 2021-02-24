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
      left: '-50px',
    },
'& .slick-next': {
  right: '50px',
},

  },
  
  TutorialsRight:{
    paddingLeft: 130,
    '@media (max-width:767px)': {
      paddingLeft: 0,
    },
  },

}))

export default useStyles
