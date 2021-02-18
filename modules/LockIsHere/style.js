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
      fontSize: 21,
      marginTop:0,
      marginBottom: 40,
      '@media (max-width:768px)': {
        textAlign:'center',
        fontSize: 17,
        lineHeight: '29px',
        marginBottom: 30,
        },
  },
  '& img': {
    width: '100%',
    '@media (max-width:767px)': {
    padding:'40px',
      width: '80%',
      margin: '0 auto',
      display: 'block',
    },
},

},
ButtonHolder: {
textAlign: 'right',
marginTop:10,
marginBottom: 40,
marginRight:160,
'@media (max-width:768px)': {
  marginRight:0,
  textAlign: 'center',

},
},
}))

export default useStyles
