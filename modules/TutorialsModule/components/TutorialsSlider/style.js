import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  MuiDialogContent: {
    padding:'0 0',
    '& .MuiDialog-paperWidthSm': {
    border:'1px solid #FFA62F',
    padding:'0 0',
    maxWidth: 950,
    width: 950,
    overflow: 'hidden',
    background: '#2e333a',
    '& h3': {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 27,
        color:'#FFA62F',
        background: '#3680d6',
        textAlign: 'center',
        padding: 10,
        textTransform: 'uppercase',
        marginBottom:0,
        marginTop: 0,
    }, 
    '& .slick-next': {
        right: 40,
    },
    '& .slick-prev': {
        left: -20,
    },
    '& .slick-slide': {
        padding: 40,
    },
},


    '& h5': {
      color: '#fff',
    fontSize: 16,
    marginTop:0,
    marginBottom:0,
    '@media (max-width:768px)': {
      fontSize: 16,
    },
    },
 
    '& h6': {
      color: '#fff',
    fontSize: 19,
    marginTop:10,
    marginBottom:30,
    '@media (max-width:768px)': {
      fontSize: 16,
      marginBottom:30,
    },
    },
    

    
    '@media (max-width:1024px)': {
      '& button': {
        fontSize:'24px',
        padding:15,
      },
    },

  },
 

  sliderLeft:{
background:'#3680d6',
padding: '100px 10px',
'& button': {
    marginleft: 30,
    fontSize: 15,
    width: '80%',
    borderRadius: 0,
    background: 'transparent',
    color: '#fff',
    padding: '10px 0',
    margin: '0 auto',
    display: 'block',
    textAlign: 'center',
    '&:hover': {
    border:'1px solid #FFA62F',  
    },
  },

},

  sliderRight:{
    padding: '20px 10px',
    '& img': {
        marginBottom:10,
      },
    '& a': {
        color:'#fff',
        marginTop:10,
   
        },
       
  },

 
}))

export default useStyles
