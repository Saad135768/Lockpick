import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({

  ModalHolder:{
    // margin: '100px 0',
    justifyContent: 'space-around',
textAlign: 'center',
display: 'flex',
'& button': {
  margin: 0,
  fontSize: 18,
  width:'100%',
},
'& svg': {
  fontSize: 18,
  position: 'relative',
  top: 3,
  marginRight: 7,
  fontSize: 23,
},
  },
 
}))

export default useStyles
