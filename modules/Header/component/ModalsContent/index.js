import Link from "next/link";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import useStyles from "./style";
import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Button from "../../../../common/Button";
import Slider from "react-slick";
import Grid from "@material-ui/core/Grid"

const ModalsContent = ({ title, title2, image }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(false);
  const handleClickOpen = (index) => {
    setOpen(true);
    setIndex (index)
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  var settingsx = {
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots:true,
    initialSlide: index,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
           dots:false,
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
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:true,
        },
      },
    ],
  };
  var settings1 = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    infinite:false,
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
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings1}>
        <div variant="outlined" color="primary" onClick={()=>handleClickOpen (0)}>
          <img src={"../../../../static/images/homepage/key.png"} />
          <h3>
          Program New
<br/>
& Used Key
          </h3>
        </div>
        <div variant="outlined" color="primary"  onClick={()=>handleClickOpen (1)}>
          <img src={"../../../../static/images/homepage/rest.png"} />
          <h3>
          Reset Transmission
   
          <br/>
Modules ISN
          </h3>
        </div>
        <div variant="outlined" color="primary"  onClick={()=>handleClickOpen (2)}>
          <img src={"../../../../static/images/homepage/clone.png"} />
          <h3>
           Clone BMW
           <br/>
& Mini Modules
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
            <Grid container spacing={2}>

            <Grid item lg={4} xs={12} sm={4}>
        
          <div className={classes.sliderLeft}>
          <h3> PROGRAM NEW
          <br/>

&
<br/>

USED KEY</h3>
               <div className={classes.TitleHolder}>

                  <a onClick={handleClose} href="/support/tutorials#TUTORIALS">
Watch Video
                  </a>
                  </div>
              </div>
              </Grid>
              <Grid item lg={8}  sm={8} xs={12}>
              <div className={classes.sliderRight}>
              <p> The leading name in automotive scan tools, M2K, is proud to introduce LOCK PICK – a

ground-breaking interface for BMW vehicles.
LOCK PICK is an advanced system that allows for engineering level capabilities including immobilizer functions, key programming, module virginizing & cloning, and recovers FRM.</p>
         </div>
         </Grid>
         </Grid>

          </div>

          <div className={classes.sliderRight} index={2}>
            <Grid container spacing={2}>

                        <Grid item lg={4} xs={12} sm={4}>

          <div className={classes.sliderLeft}>
          <h3>RESET <br/>TRANSMISSION <br/>MODULES ISN</h3>

          <div className={classes.TitleHolder}>

<a onClick={handleClose} href="/support/tutorials#TUTORIALS">
Watch Video
</a>
              </div>
              </div>

              </Grid>
                       <Grid item lg={8}  sm={8} xs={12}>

              <div className={classes.sliderRight}>
              <p>The leading name in automotive scan tools, M2K, is proud to introduce LOCK PICK – a

ground-breaking interface for BMW vehicles.
LOCK PICK is an advanced system that allows for engineering level capabilities including immobilizer functions, key programming, module virginizing & cloning, and recovers FRM.</p>
         </div>
         </Grid>
         </Grid>

          </div>

          <div className={classes.sliderRight} index={3}>
            <Grid container spacing={2}>

                        <Grid item lg={4} xs={12} sm={4}>

   

          <div className={classes.sliderLeft}>
          <h3>CLONE BMW

<br/>& <br/>MINI MODULES

</h3>
             
          <div className={classes.TitleHolder}>

<a onClick={handleClose} href="/support/tutorials#TUTORIALS">
Watch Video
</a>
              </div>
              </div>
              </Grid>
                            <Grid item lg={8}  sm={8} xs={12}>

              <div className={classes.sliderRight}>
              <p>The leading name in automotive scan tools, M2K, is proud to introduce LOCK PICK – a

ground-breaking interface for BMW vehicles.
LOCK PICK is an advanced system that allows for engineering level capabilities including immobilizer functions, key programming, module virginizing & cloning, and recovers FRM.</p>
         </div>
         </Grid>
         </Grid>

          </div>
        </Slider>
      </Dialog>
    </div>
  );
};

export default ModalsContent;
