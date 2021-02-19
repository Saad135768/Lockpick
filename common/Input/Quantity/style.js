import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  inputContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  icon: {
    color: '#323232',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: 28,
    margin: '0 10px',
    '@media (max-width: 500px)': {
    },
  },
  input: {
    '& input': {
      fontWeight: 'bold',
      textAlign: 'center',
      width: 30,
      height: 30,
      border: 'solid 1px #1e1e1e',
      borderRadius: 20,
    },
    '& input:focus': {
      outline: 'none !important',
    },
    '@media (max-width: 500px)': {
      '& input': {
      },
    },
  },
}))

export default useStyles
