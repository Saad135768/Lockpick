import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({

  ModalHolder:{
    margin: '100px 0',
textAlign: 'center',
display: 'flex',
'& button': {
  margin: 10,
  fontSize: 18,
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
