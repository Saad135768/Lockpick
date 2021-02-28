import Container from "@material-ui/core/Container"
import useStyles from "./style"
import Grid from "@material-ui/core/Grid"
import React from "react"
import Slider from "react-slick"
import WallpaperItem from "../WallpaperItem/"

const Wallpapers = () => {
  const classes = useStyles()
  var settings = {
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    arrows: true,
    dots:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToShow: 2.5,
          dots:false,

        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  }
  return (
    <div className={classes.Wallpapers}>
      <Container>
        <Grid container justify="center" spacing={2}>
          <Grid item lg={9} xs={12}>
            <div className={classes.root}>
              <h3> WALLPAPERS </h3>
              <Slider {...settings}>
                <div>
                  <WallpaperItem
                    image={"../../../../static/support/01.jpg"}
                  ></WallpaperItem>
                </div>
                <div>
                  <WallpaperItem
                    image={"../../../../static/support/02.jpg"}
                  ></WallpaperItem>
                </div>
                <div>
                  <WallpaperItem
                    image={"../../../../static/support/03.jpg"}
                  ></WallpaperItem>
                </div>
                <div>
                  <WallpaperItem
                    image={"../../../../static/support/04.jpg"}
                  ></WallpaperItem>
                </div>
                <div>
                  <WallpaperItem
                    image={"../../../../static/support/05.jpg"}
                  ></WallpaperItem>
                </div>
                <div>
                  <WallpaperItem
                    image={"../../../../static/support/06.jpg"}
                  ></WallpaperItem>
                </div>
                <div>
                  <WallpaperItem
                    image={"../../../../static/support/07.jpg"}
                  ></WallpaperItem>
                </div>
                <div>
                  <WallpaperItem
                    image={"../../../../static/support/08.jpg"}
                  ></WallpaperItem>
                </div>
                <div>
                  <WallpaperItem
                    image={"../../../../static/support/09.jpg"}
                  ></WallpaperItem>
                </div>
                <div>
                  <WallpaperItem
                    image={"../../../../static/support/10.jpg"}
                  ></WallpaperItem>
                </div>
                <div>
                  <WallpaperItem
                    image={"../../../../static/support/11.jpg"}
                  ></WallpaperItem>
                </div>
                <div>
                  <WallpaperItem
                    image={"../../../../static/support/12.jpg"}
                  ></WallpaperItem>
                </div>
                <div>
                  <WallpaperItem
                    image={"../../../../static/support/13.jpg"}
                  ></WallpaperItem>
                </div>
                <div>
                  <WallpaperItem
                    image={"../../../../static/support/14.jpg"}
                  ></WallpaperItem>
                </div>
                <div>
                  <WallpaperItem
                    image={"../../../../static/support/15.jpg"}
                  ></WallpaperItem>
                </div>
                <div>
                  <WallpaperItem
                    image={"../../../../static/support/16.jpg"}
                  ></WallpaperItem>
                </div>
                <div>
                  <WallpaperItem
                    image={"../../../../static/support/17.jpg"}
                  ></WallpaperItem>
                </div>
              </Slider>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Wallpapers
