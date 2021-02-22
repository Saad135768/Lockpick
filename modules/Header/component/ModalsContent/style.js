import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  MuiDialogContent: {
    padding:30,
    '& .MuiDialog-paperWidthSm': {
    padding:30,

    },
    '& h4': {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 27,
    textTransform: 'uppercase',
    marginBottom:0,
    marginTop: 0,
    '@media (max-width:1024px)': {
      fontSize: 27,
    },
    },
   
    '& h2': {
      color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 37,
    marginTop:0,
    marginBottom:50,
    '@media (max-width:1024px)': {
      marginBottom:10,
      fontSize: 27,
    },

    },
    
    '& h5': {
      color: '#fff',
    fontSize: 16,
    marginTop:0,
    marginBottom:0,
    '@media (max-width:768px)': {
      fontSize: 16,
    },
    },
    '& h3': {
      color: '#FFA62F',
    fontSize: 19,
    marginTop:0,
    marginBottom:0,
    '@media (max-width:768px)': {
      fontSize: 16,
    },
    },
    '& h6': {
      color: '#fff',
    fontSize: 19,
    marginTop:10,
    marginBottom:30,
    '@media (max-width:768px)': {
      fontSize: 16,
      marginBottom:30,
    },
    },
    
    '& em': {
      color: '#fba62f',
      fontStyle: 'normal',
      fontSize: 21,
      display: 'block',
      paddingBottom: 30,
  },
    '& button': {
      width: '100%',
      marginTop:'20px',
      marginBottom: 20,
    
    },
    
    '@media (max-width:1024px)': {
      '& button': {
        fontSize:'24px',
        padding:15,
      },
    },

  },
 

}))

export default useStyles
