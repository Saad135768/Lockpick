import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({

  Wallpapers:{
    ' & h3': {
      color:'#fff',
      fontSize: '29px',
      textAlign:'center',
      textTransform: 'uppercase',
      marginBottom: 20,
      fontFamily: 'Poppins-SemiBold',
      },
      ' & img': {
        width:'100%',
       
        },
        '& .slick-slide': {
          padding: '0 15px',
        },
  },
  
  TutorialsRight:{
    paddingLeft: 130,
  },

}))

export default useStyles
