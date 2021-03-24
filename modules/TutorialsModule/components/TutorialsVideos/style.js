import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({

  root: {
    flexGrow: 1,
    backgroundColor: '#2d4562',
    display: 'flex',
    color:'#fff',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid red`,
  },

}))

export default useStyles
