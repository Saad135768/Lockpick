import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({

  root: {
    flexGrow: 1,
    backgroundColor: '#2d4562',
    color:'#fff',
    height: 420,
    display: 'flex',

    ' & button': {
      boxShadow:'none',
      fontSize:'16px',
      background: '#3780d5',
      borderRdius: 0,
      marginBottom: 5,
      padding:0,

      color:'#fff',
      },
      
      ' & p': {
        padding:0,
        marginBottom: 35,
        },
        ' & .react-player': {
          marginTop: 20,
          },
  },
  tabs: {
    display: 'flex',
    width: '80%',

  },
  indicator: {
    backgroundColor: '#FFF',
  },
  box: {
    paddingTop: 0,
  }


}))

export default useStyles
