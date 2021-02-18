import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  BasicButton: {
    borderRadius: 13,
    transition: 'all .3s ease',
    background: ' #FFA62F',
    padding: '8px 28px',
    width:'280px',
    border: '1px solid #FFA62F',
    fontFamily:'Poppins-SemiBold',
    fontSize: ' 27px',
    outline: '0',
    textTransform:'uppercase',
    cursor: 'pointer',
      color: '#2B313B',
    '@media (max-width:767px)': {
      padding: '8px 20px',
      fontSize: ' 16px',
      width:'180px',

    },

  
    '&:hover': {
      color: '#fff',
      background: '#0e4c8d',
      border:'1px solid #0e4c8d',
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
