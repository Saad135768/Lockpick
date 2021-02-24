import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({

  BrochureHolder:{
    margin:'30px 0',
    ' & h3': {
      color: '#fff',
    fontSize: 29,
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 20,
    textTransform: 'uppercase',
    },

  },

  root: {
    width: '100%',

    ' &  svg.MuiSvgIcon-root': {
      color: '#fba62f',
      fontSize: 34,
    },

    
  },

  BrochureBg:{
    background:'#3680d6',
    padding:'80px 0',
    height: '200px',
    '@media (max-width:767px)': {
      height: 'inherit',
    },
    position: 'relative',
    marginBottom: 160,
    '@media (max-width:767px)': {
      marginBottom: 60,
    },

    margin:'50px 0',
    ' & p': {
      color: '#fff',
      textTransform: 'uppercase',
      fontSize: 21,
      fontFamily: 'Poppins-Bold',
    },
    ' & span': {
      color: '#3580D6',
      fontSize: 21,
      marginLeft:5,
      textTransform: 'none',
    
    },
    ' & img': {
      width: 270,
      margin: '0 auto',
      display: 'block',
      border: '5px solid #3680d69e',
      bottom: 120,
      position: 'relative',
      boxShadow: '-2px -2px 8px 0px #00000038',
      '@media (max-width:767px)': {
        width:'100%',

      },
    },
      },


}))

export default useStyles
