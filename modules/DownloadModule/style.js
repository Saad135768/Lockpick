import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({

  DownloadBg: {
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
      fontSize: '21px',
      textDecoration: 'underline',
      fontFamily: 'Poppins-Bold',
  },
    '& iframe ': {
    marginBottom: 20,
},
},
DownloadHolder: {
  '& button': {
   fontSize: 25,
  width: '85%',
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

DownloaLeft:{
  textAlign: 'center',
},

}))

export default useStyles
