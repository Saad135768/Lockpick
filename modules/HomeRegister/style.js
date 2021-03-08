import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({

  HomeRegisterHolder: {
    margin: '200px 0',
    marginBottom: '100px',
    '@media (max-width:768px)': {
      margin: '60px 0',
    },
    '& p': {
      color: '#fff',
      fontSize: 22,
      marginTop:20,
      marginBottom: 30,
  },
  '& img': {
    width: '100%',
  
    '@media (max-width:1024px)': {
      marginTop:40,
    },
    '@media (max-width:768px)': {
      width: '95%',
    },
    '@media (max-width:767px)': {
      width: '80%',
    },
    },

    '& button:hover': {
      border: '1px solid #fff',
    },
 
},
HomeRegisterBg :{
  display: 'flex',
  margin: 0,
  background: '#3680d6',
  marginBottom: 165,
  height: 400,
  justifyContent: 'center',
  alignItems: 'center',

  '@media (max-width:1024px)': {
    marginBottom: 50,
  },
  '@media (max-width:767px)': {
    height: '100%',
    marginBottom: 0,
    display: 'inline-block',
  },
},
HomeRegisterImage :{
 
  position: 'relative',
  maxWidth: 810,
  height: 740,
  top: 70,
  left: 20,
  '@media (max-width:768px)': {
    height: '100%',
    maxWidth: '100%',
    margin: '0 auto',
    display: 'block',
    left: 'inherit',
    textAlign: 'center',
  },

},
HomeRegisterContent:{
  position: 'relative',
  right: '100px',
  '@media (max-width:1024px)': {
    right: '10px',
  },
  '@media (max-width:768px)': {
    marginTop: 50,
    right: 'inherit',
    marginBottom: 50,
    padding: 30,
    paddingBottom: 10,
  },
  textAlign: 'center',
  '& h3 , h4': {
    color: '#fff',
    textShadow: 'rgb(0 0 0 / 40%) 0px 4px 5px',
    fontFamily: 'Poppins-SemiBold',
    fontSize:40,
    marginTop: 0,
    textTransform:'uppercase',
    '@media (max-width:767px)': {
      fontSize:27,
    },
},

'& h3 ': {
  color: '#fff',
  marginBottom: 0,
},
'& h4 ': {
  color: '#fff',
  marginTop: 0,
  marginBottom: 19,


},
},
ButtonHolder: {
textAlign: 'right',
marginTop:10,
marginBottom: 40,
'@media (max-width: 767px)': {
  marginBottom: 0,
},
},

HomeRegisterBorder:{
  height:'1px',
  background:'#fff',
  padding: 1,
  marginBottom: 30,
  width: 400,
  '@media (max-width:768px)': {
    width: 300,
    display: 'inline-block',
  },
  '@media (max-width:767px)': {
    width: 'inherit',
    display: 'flex',
    padding: 2,

  },
  },
}))

export default useStyles
