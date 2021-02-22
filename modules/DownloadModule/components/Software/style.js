import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({

  SupportBg: {
    marginBottom:60,
textAlign:'center',
    '& img': {
      width: '100%',
    },
  },
SupportHolder: {
'& h3': {
  color: '#fff',
fontSize: 29,
textAlign: 'center',
fontFamily: 'Poppins-SemiBold',
marginBottom: 0,
textTransform: 'uppercase',
},

  '& h1': {
color:'#FFA62F',
fontFamily: 'Poppins-Bold',
fontSize: '60px',
textTransform: 'uppercase',
textShadow: 'rgb(0 0 0 / 40%) 0px 4px 5px',
marginBottom:0,
  },


  '& p': {
    color:'#3680d6',
    fontSize: '26px',
    marginTop:'0',
    marginBottom:0,
    fontFamily: 'Poppins-SemiBold',

      },
      '& h5': {
        color:'#fff',
        fontSize: '24px',
        margin:0,
        marginBottom:20,
        fontFamily: 'Poppins-SemiBold',
    
          },
    

  '& button': {
    color:'#2b323c',
    fontFamily: 'Poppins-Bold',
    textAlign:'center',
    border:'1px solid #fba62f',
   fontSize: 30,
  background:'#fba62f',
  padding: '10px',
  margin: '12px 0',
  marginBottom:40,

  '@media (max-width:1024px)': {
    fontSize: 22,
  },
  '@media (max-width:768px)': {
    width: '100%',
    fontSize: 21,
  },
  '@media (max-width:767px)': {
    width: '100%',
    fontSize: 19,

  },
  },


},

while:{
  textAlign: 'center',
  '& a': {
color:'#fff',
background:'#2e415a',
padding:'5px 20px',
fontFamily: 'Poppins-Regular',
fontSize:20,
borderRadius:10,
  },
},


}))

export default useStyles
