import Link from "next/link"
import useStyles from "./style"
import React from "react"
import Dialog from "@material-ui/core/Dialog"
import Button from "../../../../common/Button"
import Grid from "@material-ui/core/Grid"
import Slider from "react-slick"

const TutorialsSlider = ({ title }) => {
  const classes = useStyles()

  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  var settings = {
    speed: 500,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  }
  return (
    <div>
      <div variant="outlined" color="primary" onClick={handleClickOpen}>
        <Button> {title} </Button>
      </div>
      <Dialog
        className={classes.MuiDialogContent}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <div className={classes.s}>
          <Grid container spacing={4}>
            <Grid item lg={3} xs={12} sm={5}>
              <h3> TUTORIALS</h3>
              <div className={classes.sliderLeft}>
                <Link
                  as={"/support/tutorials#TUTORIALS"}
                  href="/support/tutorials#TUTORIALS"
                >
                  <a onClick={handleClose} href="/support/tutorials#TUTORIALS">
                    <Button>Watch Video</Button>
                  </a>
                </Link>
              </div>
            </Grid>

            <Grid item lg={9} xs={12} sm={7}>
              <div className={classes.sliderRight}>
                <Slider {...settings}>
                  <div>
                    <a
                      href="../../../../static/support/unlook.pdf"
                      target="_blank"
                    >
                      <img src="../../../../static/support/pdf.webp" />
                      LockPick brochure{" "}
                    </a>
                  </div>
                  <div>
                    <a
                      href="../../../../static/support/unlook.pdf"
                      target="_blank"
                    >
                      <img src="../../../../static/support/pdf.webp" />
                      LockPick brochure{" "}
                    </a>
                  </div>
                  <div>
                    <a
                      href="../../../../static/support/unlook.pdf"
                      target="_blank"
                    >
                      <img src="../../../../static/support/pdf.webp" />
                      LockPick brochure{" "}
                    </a>
                  </div>
                </Slider>
              </div>
            </Grid>
          </Grid>
        </div>
      </Dialog>
    </div>
  )
}

export default TutorialsSlider
