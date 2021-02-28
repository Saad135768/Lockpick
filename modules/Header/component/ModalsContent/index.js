import Link from "next/link";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import useStyles from "./style";
import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Button from "../../../../common/Button";
import Slider from "react-slick";

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

  var settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    initialSlide: index,
  };
  var settings1 = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    infinite:false,
  };
  return (
    <div>
      <Slider {...settings1}>
        <div variant="outlined" color="primary" onClick={()=>handleClickOpen (0)}>
          <img src={"../../../../static/images/homepage/key.png"} />
          <h3>
            1
          </h3>
        </div>
        <div variant="outlined" color="primary"  onClick={()=>handleClickOpen (1)}>
          <img src={"../../../../static/images/homepage/key.png"} />
          <h3>   
           2
          </h3>
        </div>
        <div variant="outlined" color="primary"  onClick={()=>handleClickOpen (2)}>
          <img src={"../../../../static/images/homepage/key.png"} />
          <h3>
           3
          </h3>
        </div>
        
      </Slider>
      <Dialog
        className={classes.MuiDialogContent}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <Slider {...settings}>
          <div className={classes.sliderRight} index={1}>
            <div className={classes.sliderLeft}>
              <h3> 1</h3>
            </div>
          </div>
          <div className={classes.sliderRight} index={2}>
            <div className={classes.sliderLeft}>
              <h3> 2</h3>
            </div>
          </div>
          <div className={classes.sliderRight} index={3}>
            <div className={classes.sliderLeft}>
              <h3> 3</h3>
            </div>
          </div>
          
        </Slider>
      </Dialog>
    </div>
  );
};

export default ModalsContent;
