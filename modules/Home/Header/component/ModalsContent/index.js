import useStyles from "./style"
import React from "react"
import Dialog from "@material-ui/core/Dialog"
import Slider from "react-slick"
import Grid from "@material-ui/core/Grid"

const ModalsContent = () => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const [index, setIndex] = React.useState(false)
  const handleClickOpen = (index) => {
    setOpen(true)
    setIndex(index)
  }

  const handleClose = () => {
    setOpen(false)
  }

  var settingsx = {
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    initialSlide: index,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          dots: false,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settingsx: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settingsx: {
          vertical: false,
          verticalSwiping: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  }
  var settings1 = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    infinite: false,
    vertical: false,
    verticalSwiping: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          dots: false,

          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows:false,
        },
      },
    ],
  }
  return (
    <div>
      <Slider {...settings1}>
        <div
          variant="outlined"
          color="primary"
          onClick={() => handleClickOpen(0)}
        >
            <div className={classes.ImageBg}>

          <img className={`${classes.ImageItem} ImageItem1`} src={"../../../../static/images/homepage/key.svg"} />
          </div>
          <h3>
            Program New
            <br />& Used Key
          </h3>
        </div>
        <div
          variant="outlined"
          color="primary"
          onClick={() => handleClickOpen(1)}
        >
                    <div  className={classes.ImageBg}>

           <img className={`${classes.ImageItem} ImageItem2`} src={"../../../../static/images/homepage/rest.svg"} />
          </div>
          <h3>
            Reset Transmission
            <br />
            Modules ISN
          </h3>
        </div>
        <div
          variant="outlined"
          color="primary"
          onClick={() => handleClickOpen(2)}
        >
          <div  className={classes.ImageBg}>

          <img className={`${classes.ImageItem} ImageItem3`}src={"../../../../static/images/homepage/clone.svg"} />
          </div>

          <h3>
            Clone BMW
            <br />& Mini Modules
          </h3>
        </div>
      </Slider>
      <Dialog
        className={classes.MuiDialogContent}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <Slider {...settingsx}>
          <div className={classes.sliderRight} index={1}>
            <Grid container>
              <Grid item lg={4} xs={12} sm={4}>
                <div className={classes.sliderLeft}>
                  <h3>
                    {" "}
                    PROGRAM NEW
                    <br />
                    &
                    <br />
                    USED KEY
                  </h3>
                  <div className={classes.TitleHolder}>
                    <a
                      onClick={handleClose}
                      href="/support/tutorials#TUTORIALS"
                    >
                      Watch Video
                    </a>
                  </div>
                </div>
              </Grid>
              <Grid item lg={8} sm={8} xs={12}>
                <div className={classes.sliderRight}>
                  <p>
                  Lock Pick can easily add, delete, reset, and program keys, even if all keys are lost. All of
these functions are performed via OBD2 without any soldering or welding. All of the
procedures are simple and easy to follow making the process streamlined.
Lock Pick can read and write CAS and FEM/BDC on a bench without needing to
disassemble or modify the module. This includes writing anti-theft data to the
FEM/BDC).
<br/>
Lock Pick can also fix problems caused by other tools due to downgraded CAS firmware.
                  </p>
                </div>
              </Grid>
            </Grid>
          </div>

          <div className={classes.sliderRight} index={2}>
            <Grid container spacing={2}>
              <Grid item lg={4} xs={12} sm={4}>
                <div className={classes.sliderLeft}>
                  <h3>
                    RESET <br />
                    TRANSMISSION <br />
                    MODULES ISN
                  </h3>

                  <div className={classes.TitleHolder}>
                    <a
                      onClick={handleClose}
                      href="/support/tutorials#TUTORIALS"
                    >
                      Watch Video
                    </a>
                  </div>
                </div>
              </Grid>
              <Grid item lg={8} sm={8} xs={12}>
                <div className={classes.sliderRight}>
                  <p>
                  A unique feature of Lock Pick is the ability to reset transmission modules (EGS) for all
6HP &amp; 8HP transmissions in E, F, and G series. It can also duplicate 6HP gearbox in F
chassis via OBD2 or on a bench without opening or modifying the DME.
                  </p>
                </div>
              </Grid>
            </Grid>
          </div>

          <div className={classes.sliderRight} index={3}>
            <Grid container spacing={2}>
              <Grid item lg={4} xs={12} sm={4}>
                <div className={classes.sliderLeft}>
                  <h3>
                    CLONE BMW
                    <br />& <br />
                    MINI MODULES
                  </h3>

                  <div className={classes.TitleHolder}>
                    <a
                      onClick={handleClose}
                      href="/support/tutorials#TUTORIALS"
                    >
                      Watch Video
                    </a>
                  </div>
                </div>
              </Grid>
              <Grid item lg={8} sm={8} xs={12}>
                <div className={classes.sliderRight}>
                  <p>
                  Lock Pick can read and write to almost all ECU’s in BMW and Mini vehicles. This
includes the new Bosch MDG1 modules found in F30, G01, G12, G20, G29, and G30.   
ECU cloning currently supports DFLASH and PFLASH for N13, N20, N63, S63, N55 and
B38. More to come ….
                  </p>
                </div>
              </Grid>
            </Grid>
          </div>
        </Slider>
      </Dialog>
    </div>
  )
}

export default ModalsContent
