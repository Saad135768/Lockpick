import Link from 'next/link'
import Router from 'next/router'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import useStyles from './style'
import Button from '../../../../common/Button'
import NumericInput from 'react-numeric-input'
import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
const ModalsContent = ({
  title,
  title2,
  description,
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

  return (
    <div>
    <div variant="outlined" color="primary" onClick={handleClickOpen}>
      <img src={image}/>
     <h3> {title}  <br/>{title2} </h3>
    </div>
    <Dialog  className={classes.MuiDialogContent} onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
    
      <div>
        <h4> {modalTitle}</h4>
        <p>{description} </p>
       
      </div>
    
    </Dialog>
  </div>
  )
}

export default ModalsContent
