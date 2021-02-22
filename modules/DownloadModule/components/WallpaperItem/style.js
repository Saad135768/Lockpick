import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({

  WallpaperItem:{
    height: 290,
    position:'relative',
 
  '& svg': {
    fontSize: 25,
    color:'#fff',
  },

  '&.WallpaperItem:hover .download': {
    zIndex: 16,
    cursor: 'pointer',
    display:'block !important',
  },
  '&.WallpaperItem:hover .WallpaperOverlay': {
    opacity: 1,
    transition:'0.4s',
    cursor: 'pointer',
  },
  '& img': {
    height: 290,
    objectFit: 'cover',
  },
  },

  WallpaperOverlay:{
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity:0,
    background: '#337cd166',
  },
  
  download:{
    position:'absolute',
    bottom: 10,
    right:20,
    display:'none',
  },

}))

export default useStyles
