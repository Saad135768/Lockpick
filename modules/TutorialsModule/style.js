import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({

  FaqHolder:{
  },
  Tutorials: {
     margin:'90px 0',
     marginBottom:40,
    ' & img': {
    width:'100%',
    },
    ' & button': {
      zIndex: 9,
      fontSize: 26,
      padding: 10,
      boxShadow: '1px 1px 6px rgb(0 0 0 / 74%)',
      position: 'relative',
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
          marginTop:'50px',

          },
  },

  TutorialsRight:{
    position:'relative',
    paddingLeft: 130,
    '@media (max-width:768px)': {
    paddingLeft: 60,
    },
    '@media (max-width:767px)': {
      paddingLeft: 0,
    },
    '@media (min-width:1440px)': {
      paddingLeft: 140,
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
  TutorialsButtons:{
display:'flex',
'@media (max-width:768px)': {
  display:'block',

},
  },
  TutorialsIcon:{
    '@media (max-width:768px)': {
      display:'none',

    },
    width: '90px',
    background: '#2d4562',
    position: 'absolute',
    right: 0,
    zIndex: 0,
    bottom: 65,
    paddingTop: 10,
    height: 410,
    '& img': {
      color: '#fff',
      margin: '0 auto',
      display: 'block',
      textAlign: 'center',
      width:'85px',
      position: 'relative',
      left: 0,
      right:10,
    }
  },
}))

export default useStyles
