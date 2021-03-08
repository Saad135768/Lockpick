import "react-responsive-carousel/lib/styles/carousel.min.css"
import React from "react"
import { Carousel } from "react-responsive-carousel"
import { PropTypes } from "prop-types"
import useStyles from "./style"
import ReactPlayer from 'react-player/lazy'

const DUMMY_VIDEOS = [
  {
    _id: "1",
    videoUrl: "../../static/video/video.mp4",
    text: "First use configuration",
    image: "../../static/video/1.jpg",
    type: "M2K",

  },
  {
    _id: "2",
    videoUrl: "../../static/video/video2.mp4",
    text: "How to program key",
    image: "../../static/video/2.jpg",
    type: "M2K",

  },
]



const VideoSlide = ({ url, isSelected, text }) => (
  <ReactPlayer   controls={true}
   width="100%" height="476px" url={url}     
   playing
  config={{ file: { attributes: {
    autoPlay: true,
    muted: false
  }}}}
   playing />
)

const TutorialsVideos = ({ data }) => {
  const classes = useStyles()

  const customRenderItem = (item, props) => (
    <item.type {...item.props} {...props} />
  )

  const getVideoId = (url) => url.substr("".length, url.length)

  const customRenderThumb = (children) =>
    children.map((item) => {
      const videoId = getVideoId(item.props.url)
      console.log(item, "oooo")
      return (
          <div className={classes.root}>

          <img key={videoId} src={item.props.image} />
          <br />
          <p>
            {item.props.text}
          </p>
          <h4>
            {item.props.type}
          </h4>
        </div>
      )
    })

  console.log(data, "datas")
  return (
    <div>
      <Carousel
        autoPlay={false}
        className={classes.carousel}
        emulateTouch={false}
        showArrows={false}
        pip={true}
        dots={false}
        showThumbs={true}
        showStatus={false}
        autoPlay={false}
        infiniteLoop={false}
        renderItem={customRenderItem}
        renderThumbs={customRenderThumb}
      >
        {}
        {data.map((v) => (
          <VideoSlide
            url={v.videoUrl}
            playing={true} 
            image={v.image}
            text={v.text}
            type={v.type}

            key={v._id ? v._id : v.id}
          />
        ))}
      </Carousel>
    </div>
  )
}

VideoSlide.propTypes = {
  url: PropTypes.string,
  isSelected: PropTypes.bool,
}


TutorialsVideos.defaultProps = {
  data: DUMMY_VIDEOS,
}

export default TutorialsVideos