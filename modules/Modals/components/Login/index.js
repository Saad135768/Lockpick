import React from 'react'
import useStyles from "./style"
import Input from "../../../../common/Input"
import Button from "../../../../common/Button"
import Dialog from '@material-ui/core/Dialog'
import {
  DialogTitle,
} from '@material-ui/core'

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const classes = useStyles()

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open dialog
      </Button>
      
      <Dialog className={classes.root} onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
      <img alt="logo-footer" src="../../static/images/login-logo.png"/>
      <DialogTitle id="form-dialog-title">
          <h3> Welcome Back </h3>
     
        </DialogTitle>
        <Input className={classes.LoginInput} placeholder="Email" type="text" />
        <Input className={classes.LoginInput}  placeholder="Password" type="text" />
                    <a href="#">
                      <Button>LOG IN</Button>
                    </a>
<div  className={classes.register}>
                    <a href="#">
                      <h2>Register</h2>
                    </a>
                    </div>

        <div>
         
        </div>
      </Dialog>
    </div>
  )
}