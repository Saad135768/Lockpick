import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  ProductSliderDataHolder: {
padding:'0 50px',
    '& h1': {
      color: '#FFA62F',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 40,
    textTransform: 'uppercase',
    marginBottom:0,
    },
    '& h4': {
      color: '#fff',
    fontSize: 22,
    marginTop:0,
    marginBottom:0,
    },
    '& h2': {
      color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 40,
    marginTop:0,
    marginBottom:50,

    },
    '& h3': {
      color: '#FFA62F',
    fontSize: 22,
    marginTop:0,
    marginBottom:0,
    },
    '& h6': {
      color: '#fff',
    fontSize: 22,
    marginTop:20,
    marginBottom:40,
    },
    
    '& button': {
      width: '100%',
      marginTop:'20px',
    },
    
  },

}))

export default useStyles
