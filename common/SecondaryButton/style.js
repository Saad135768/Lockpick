import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  BasicButton: {
    height: '60px',
    transition: 'all .5s ease',
    background: ' #FFFFFF',
    color: '#0E4C8D',
    padding: '0px 30px',
    fontWeight: '400',
    textAlign: 'center',
    border: '1px solid #0E4C8D',
    fontSize: ' 20px',
    outline: '0',
    cursor: 'pointer',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    '@media (max-width:480px)': {
      padding: '10px 20px',
      fontSize: ' 16px',
    },
    '& svg': {
      marginTop: '5px',
      marginRight: '25px !important',
      fontSize: ' 24px',
    },
    '&:hover': {
      color: '#ffffff',
      fontSize: '20px',
      background: '#0E4C8D',
      border: '1px solid #0E4C8D',
    },
    '&:hover a': {
      color: '#0E4C8D',
    },
    '& a': {
      color: '#fff',
    },
    '&:disabled': {
      cursor: 'not-allowed',
    },
  },
}))

export default useStyles
