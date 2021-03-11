import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
   cursor:'pointer',
   marginRight: 15,
   ' & img': {
    width:'100%',
    height: 190,
    objectFit: 'cover',
    '@media (max-width:767px)': {
      height: 100,

    },
    },
  },

}))

export default useStyles
