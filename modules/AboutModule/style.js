import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({

  FormHolder: {
    margin:'50px 0',
    '& img': {
      width: '100%',
      display: 'block',
      margin: '0 auto',
    },
    '& p': {

    lineHeight: '30px',
     fontSize: 21,
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
