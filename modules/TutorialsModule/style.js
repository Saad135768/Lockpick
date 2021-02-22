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

  TutorialsVideo:{
    background: 'rgba(53, 128, 214, 0.25)', 
    padding:'10px 10px',
  },
  videoholder:{

    margin: '50px 0',
  ' & h3': {
    color: '#fff',
    textAlign: 'right',
    fontSize: 30,
    marginTop: 0,
    fontFamily: 'Poppins-Bold',
    textShadow: 'rgb(0 0 0 / 40%) 0px 4px 5px',
    marginBottom: 20,
    textTransform: 'uppercase',
    },
    ' & p': {
      color: '#fba62f',
      fontSize: 18,
      fontFamily: 'Poppins-SemiBold',
    marginTop:0,
      },
  },

}))

export default useStyles
