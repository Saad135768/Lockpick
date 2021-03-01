import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({

  LockIsHereHolder: {

    '@media (max-width:768px)': {
  '& br': {
  display:'none',
},
'& .parallax-inner': {
  transform: 'inherit !important;',
    },
  },
    '& p': {
      color: '#fff',
      fontSize: 26,
      marginTop:0,
      marginBottom: 40,
      textAlign:'center',

      '@media (max-width:768px)': {
        textAlign:'center',
        fontSize: 17,
        lineHeight: '29px',
        marginBottom: 30,
        },
  },
  '& img': {
    width: 'auto',
    margin: '0 auto',
    marginBottom:20,
    display: 'block',
    textAlign: 'center',
    '@media (max-width:767px)': {
    paddingTop:'0',
    padding:'40px',
      width: '80%',
      margin: '0 auto',
      display: 'block',
    },
},
},
ButtonHolder: {
textAlign: 'center',
marginTop:10,
marginBottom: 40,
'@media (max-width:768px)': {
  marginRight:0,
  textAlign: 'center',

},
},
}))

export default useStyles
