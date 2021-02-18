import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({

  ContactFormHolder: {
    backgroundSize: '50%',
    backgroundRepeat: 'no-repeat',
  
    '& p': {
      color: '#fff',
      fontSize: 20,
      marginTop:20,
      lineHeight: '35px',
      marginBottom: 40,
      '@media (max-width:767px)': {
        marginBottom: 30,

      },
  },
  '& img': {
    width: '100%',
},

'& input': {
  marginBottom: 27,
},

'& .last': {
  marginTop: 70,
  '@media (max-width:767px)': {
    marginTop: 0,
  },
},
'& textarea': {
  background: '#555a64',
  width: '100%',
  paddingLeft: 40,
  height: 226,
  outline: 0,
  transition: '0.3s',
  fontSize: 19,
    fontFamily: 'Poppins-Regular',

  border:0,
  paddingTop:30,
  '&::placeholder ': {
    color: '#fff',
    fontSize: 19,
    outline: 0,
    border:0,
    background:' transparent',
  },
  '&:focus': {
    outline: 0,
    border:'1px solid #fba62f',
    color: '#fff',
  },
},



},


overlay: {
  position: 'absolute',
  width: '100%',
  height:'100%',
  right: 0,
  backgroundRepeat:'no-repeat',
  'mix-blend-mode': 'multiply',
    transition: 'background 0.3s, border-radius 0.3s, opacity 0.3s',
    backgroundPosition: 'center right',
    backgroundSize: '67% auto',
    background: "url('../../static/images/homepage/contactbg.png')",
  },

ContactFormContent: {
display:'flex',
marginBottom:15,

},
ContactFormIcon: {
  marginRight: 17,
  '& svg': {
    fontSize: '28px',
},

},
ContactFormInfo: {
  fontSize: '18px',
  textTransform: 'uppercase',
  fontFamily: 'Poppins-SemiBold',
  '@media (max-width:767px)': {
    fontSize: '16px',
  },
},
ContactFormBg: {
color:'#fff',
marginTop: 10,
background:'#3680d6',
padding:60,
'@media (max-width:767px)': {
  padding:25,
},
'& h3': {
  marginBottom:40,
  marginTop:0,
  fontSize: '33px',
  fontFamily: 'Poppins-SemiBold',
  '@media (max-width:767px)': {
    fontSize: '28px',
    marginBottom:20,
  },
},
},

ContactFormRight:{
position: 'relative',
  '& h3': {
    marginBottom:20,
    color:'#FFA62F',
    marginTop:0,
    fontSize: '32px',
    fontFamily: 'Poppins-SemiBold',
  },
},

ButtonHolder: {
textAlign: 'left',
marginTop:27,
marginBottom: 40,

},
}))

export default useStyles
