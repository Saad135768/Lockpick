import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({

  BasicInput: {
    border: '0',
    height: '70px',
    background:' #555a63',
    width: '100%',
    transition: '0.3s',
    fontSize: 19,
    paddingLeft: '40px',
    outline: 0,
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
