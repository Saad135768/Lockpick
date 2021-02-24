import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({

  FaqHolder:{
  },
  Tutorials: {
     margin:'50px 0',
    ' & img': {
    width:'100%',
    },
    ' & button': {
      borderRadius: 0,
    marginBottom: 30,
      },
      ' & h4': {
        fontFamily: 'Poppins-Bold',
        textTransform:'uppercase',
        color: '#fff',
         marginBottom: 20,
         fontSize: 30,
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
