import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({

  SupportBg: {
    background:'#FFFFFF3B',
    padding: '60px 40px',
    margin: '90px 0',
    borderRadius:20,

    '@media (max-width:768px)': {
      padding: '30px 30px',
    },
    '@media (max-width:767px)': {
      padding: '30px 20px',
      margin: '40px 0',
    },
    '& img': {
      width: '100%',
      maxHeight: 250,
      objectFit: 'contain',
      '@media (max-width:768px)': {
        marginTop: 20,

      },
    },
    '& p': {
    textAlign: 'center',
     fontSize: 19,
     marginTop: 53,
     color:'#fff',
     '@media (max-width:768px)': {
      textAlign:'center',
      fontSize: 18,
      marginTop: 20,
      },
    },
      '& a ': {
      textTransform: 'uppercase',
      color: '#3680d6',
      textAlign: 'center',
      fontSize: '23px',
      textDecoration: 'underline',
      fontFamily: 'Poppins-Bold',
  },
    '& iframe ': {
    marginBottom: 20,
},
},
SupportHolder: {
  paddingLeft: 120,
  marginBottom:60,
  '@media (max-width:1024px)': {
    paddingLeft: 0,
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
    color:'#fff',
    fontSize: '22px',
    marginBottom:40,

      },

  '& button': {
    color:'#fff',
    fontFamily: 'Poppins-Bold',
    textAlign:'left',
    border:'1px solid #3680d6',
   fontSize: 25,
  background:'#3680d6',
  padding: '20px',
  margin: '12px 0',

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

  '& h3 ': {
    color: '#fff',
    marginLeft: 25,
    marginTop: 35,
    fontSize: '21px',
},
},

SupportLeft:{
  textAlign: 'center',
},

}))

export default useStyles
