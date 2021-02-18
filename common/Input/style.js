import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({

  BasicInput: {
    border: '0',
    height: '70px',
    background:'#555b65c2',
    width: '100%',
    transition: '0.3s',
    fontSize: 19,
    paddingLeft: '40px',
    zIndex: 99,
    position: 'relative',
    outline: 0,
    '@media (max-width: 767px)': {
      paddingLeft: '20px',
    },

    '& input:read-only': {
      background: '#F2F2F2',
    },
    '&::placeholder ': {
      color: '#fff',
      background:' transparent',
    },
    '&:focus': {
      color: '#fff',
      transition: '0.3s',
      border:'1px solid #fba62f',
    },
  },

}))

export default useStyles
