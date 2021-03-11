import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({

  FaqHolder:{
  },
  Tutorials: {
    ' & img': {
      width:'100%',
      },
     margin:'90px 0',
     marginBottom:40,

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
      boxShadow: 'none',
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
    padding:'10px 20px',
  },
  videoholder:{
    '& .control-dots': {
      bottom: 0,
      height: 0,
      display: 'none',
  },

  '& li.thumb.selected ': {
    borderBottom: '1px solid #fba62f !important',
},
'& button.control-arrow.control-next': {
  textAlign: 'right',
  right: '-25px',

},
'& button.control-arrow.control-prev': {
  textAlign: 'left',
  left: '-30px',

},

  ' & li.thumb ': {
    width: 'auto !important;',
    '@media (max-width:767px)': {
      width: '125px !important;',
    },
  },
    ' & ul.thumbs.animated  , ul.thumbs ': {
      padding: 0,
      margin: 0,
    },
    ' & .carousel .thumb ': {
      border:'none',
    },
    ' & .carousel .thumbs-wrapper': {
      marginLeft: 0,
    },
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
      fontSize: 16,
      fontFamily: 'Poppins-SemiBold',
    marginTop:10,
    marginBottom:0,
    '@media (max-width:767px)': {
      fontSize: 12,

    },
      },
      ' & h2': {
        color: '#fba62f',
        fontSize: 18,
        fontFamily: 'Poppins-SemiBold',
      marginTop:10,
      marginBottom:10,
      '@media (max-width:767px)': {
        fontSize: 16,
        marginBottom: 20,

      },
        },
      ' & h4': {
        color: '#fba62f',
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
        marginTop:0,
        opacity:'0.5',
        textShadow:'none',
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

  SmallVideos:{
    margin: '20px 0',
    '& p': {
      paddingBottom: 0,
      marginTop: 15,
      marginBottom: 0,
      lineHeight: '15px',
      fontSize: 15,
    },
    paddingBottom: 50,
    '& span': {
      color:'#fba62f',
      fontFamily: 'Poppins-SemiBold',
      opacity:'0.5',
    },
  }
  
}))

export default useStyles
