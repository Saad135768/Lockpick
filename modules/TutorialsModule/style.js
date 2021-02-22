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
        marginTop:'0',
        fontFamily: 'Poppins-Bold',
        textTransform:'uppercase',
        color: '#fff',
         marginBottom: 20,
         fontSize: 30,
         textShadow: 'rgb(0 0 0 / 40%) 0px 4px 5px',

        },
  },

  TutorialsRight:{
    paddingLeft: 130,
  },

}))

export default useStyles
