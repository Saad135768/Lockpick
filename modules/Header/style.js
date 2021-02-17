import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({

  HeaderHolder: {
    position: 'relative',
    height: '100%',
    '& img': {
      width: '100%',
      maxHeight: 450,
      objectFit: 'cover',
      '@media (max-width:767px)': {
        height: '300px',
        '& .MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-8': {
          flexDirection: 'column-reverse',
        },
      },

    },
    '& h1': {
      marginTop: '0',
      fontSize: 40,
      '@media (max-width:768px)': {
        fontSize: 30,
      },
      '@media (max-width:767px)': {
        fontSize: 27,
      },
    },
    '& p': {
      fontSize: 14,
      marginBottom: 30,
    },
    '& h1 , p': {
      color: '#fff',
    },
    '& button': {
      padding: '8px 35px',
      '@media (max-width:767px)': {
        padding: '5px 14px',
        paddingBottom: 0,
      },
    },
  },

  HeaderImage: {
    position: 'relative',
    height: '100%',
    '& img': {
      width: '100%',
    },
    '& h1 , p': {
      color: '#fff',
    },
  },

  HeaderContent: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    '-webkit-transform': 'translate(-50%, -50%)',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    paddingLeft: 24,
    '@media (max-width:767px)': {
      paddingLeft: 15,
    },
  },

}))

export default useStyles
