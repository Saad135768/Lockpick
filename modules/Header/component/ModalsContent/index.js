import Link from 'next/link'
import Router from 'next/router'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import useStyles from './style'
import NumericInput from 'react-numeric-input'
import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import { Container, Grid } from "@material-ui/core"
import Button from '../../../../common/Button'
import Slider from "react-slick"

const ModalsContent = ({
  title,
  title2,
  description,
  description2,
  description3,
  image,
  modalTitle
 
}) => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToShow: 2.5,
          dots:true,
          arrows:false,
        }
      },
    
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:true,
          arrows:false,
        }
      }
    ]
  };
  return (
    <div>
    <div variant="outlined" color="primary" onClick={handleClickOpen}>
      <img src={image}/>
     <h3> {title}  <br/>{title2} </h3>
    </div>
    
    <Dialog
        className={classes.MuiDialogContent}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
          
          <div className={classes.s}>
          <Grid container spacing={4}>

            <Grid item lg={3}>
            <h3> {title}</h3>

            <div className={classes.sliderLeft}>

            <Link as={"/support/tutorials#TUTORIALS"} href="/support/tutorials#TUTORIALS">
                    <a onClick={handleClose} href="/support/tutorials#TUTORIALS">
                      <Button>Watch Video</Button>
                    </a>
                  </Link>
                  </div>

</Grid>

           
          <Grid item lg={9}>
          <div className={classes.sliderRight}>

            <Slider {...settings}>
              <div>
                1
              </div>
              <div>
                2
              </div>
              <div>
                3
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

export default ModalsContent
