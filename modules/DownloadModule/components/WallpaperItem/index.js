
import useStyles from './style'
import { HiDownload } from "react-icons/hi"

const WallpaperItem = ({
  image,
}) => {
  const classes = useStyles()
  return (
 <div className={`${classes.WallpaperItem} WallpaperItem`}>
   <div className={`${classes.WallpaperOverlay} WallpaperOverlay`}/>

    <a href={image} download={image}>
    <img src={image}/>
    <div className={`${classes.download} download`}>
      <HiDownload/>
      </div>

    </a>
</div>

  )
}

export default WallpaperItem


