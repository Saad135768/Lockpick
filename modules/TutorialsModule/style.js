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
    '@media (max-width:767px)': {
      width:'100%',
      marginBottom: 13,
    },

      },
      ' & h4 , h5': {
        marginTop:'0',
        fontFamily: 'Poppins-Bold',
        textTransform:'uppercase',
        color: '#fff',
         marginBottom: 20,
         fontSize: 30,
         textShadow: 'rgb(0 0 0 / 40%) 0px 4px 5px',

        },
        ' & h5': {
          marginBottom: '0',
          marginTop:'30px',

          },
  },

  TutorialsRight:{
    paddingLeft: 130,
    '@media (max-width:767px)': {
      paddingLeft: 0,
    },
  },

  TutorialsVideo:{
    background: 'rgba(53, 128, 214, 0.25)', 
    padding:'15px 20px',
  },
  videoholder:{

    margin: '20px 0',
    '@media (max-width:767px)': {
      margin: '20px 0',
    },
  ' & h3': {
    color: '#fff',
    textAlign: 'right',
    fontSize: 30,
    marginTop: 0,
    fontFamily: 'Poppins-Bold',
    textShadow: 'rgb(0 0 0 / 40%) 0px 4px 5px',
    marginBottom: 20,
    textTransform: 'uppercase',
    '@media (max-width:767px)': {
      textAlign: 'center',
    },
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
