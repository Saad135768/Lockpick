import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({

  root: {
    
    flexGrow: 1,
    backgroundColor: '#2d4562',
    color:'#fff',
    height: 420,
    display: 'flex',
    '@media (max-width:767px)': {
      flexDirection: 'column-reverse',
      height: '700px',

      ' &  .MuiTabs-scrollButtonsDesktop ': {
       display:'block',
      }, 
      ' &  .MuiTabScrollButton-vertical ': {
        textAlign:'center',
       }, 
       ' &  .MuiTab-root': {
        width:'100%',
        maxWidth:'100%',
       }, 
      
      
    },

    ' & .react-player__preview': {
      height: '330px ​!important',
      },
    ' & svg.MuiSvgIcon-root.MuiSvgIcon-fontSizeSmall': {
      fontSize: 35,
      },
    ' & button': {
      boxShadow:'none',
      fontSize:'16px',
      background: '#3780d5',
      borderRdius: 0,
      marginBottom: 5,
      fontFamily: 'Poppins-SemiBold',
      width:'100%',
      maxWidth:'100%',
      padding:'10px 4px',

      color:'#fff',
      },
      
      ' & p': {
        padding:0,
        marginBottom: 35,
        '@media (max-width:767px)': {
fontSize:18,
        },
        },
        ' & .react-player': {
          marginTop: 20,
          },
       
  },
  tabs: {
    display: 'flex',
    width: '35%',
    '@media (max-width:767px)': {
      width: '100%',
    },
  },
  indicator: {
    backgroundColor: '#FFF',
  },
  box: {
    paddingTop: 0,
    '@media (max-width:767px)': {
      padding: 0,
    },
    '& a.ytp-impression-link ': {
      display:'none',
     }, 
  },
  playicon:{
    width:'60px !important',
  },
  width:{
    width:'65% !important',
    '@media (max-width:767px)': {
      width:'100% !important',

    },
  },
}))

export default useStyles
