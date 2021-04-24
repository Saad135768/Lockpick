import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    orderHolder: {
        textAlign:'center',
        margin:'80px 0',
        color: 'white',
        '& h1': {
         marginTop: '15px',
         color:'#24a984',
         marginBottom: '0',
         fontSize: '40px',

       },
       '& svg': {
        color: '#24a984',
        fontSize:'70px',
        marginBottom:'0',
      },
      '& p': {
        fontSize:'18px',
      },
      

    },

    orderContent: {
 
    },

        
   
}))

export default useStyles