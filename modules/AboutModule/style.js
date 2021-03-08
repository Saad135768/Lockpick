import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({

  FormHolder: {
    margin:'50px 0',
    '& img': {
      width: '70%',
      display: 'block',
      margin: '0 auto',
      marginBottom:50,
    },
    '& p': {

    lineHeight: '35px',
     fontSize: 20,
     color:'#fff',
     '@media (max-width:767px)': {
      textAlign:'center',
      fontSize: 18,
      },
    },
},
AboutHolder: {
},

AboutMainImge:{
  maxHeight:380,
    '@media (max-width:767px)': {

 '& .parallax-inner': {
  transform: 'inherit !important;',
  },
},


},
}))

export default useStyles
