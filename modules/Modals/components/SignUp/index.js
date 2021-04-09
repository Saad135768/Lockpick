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
         Sign Up
      </Button>
      
      <Dialog className={classes.root} onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <div className={classes.LeftRight}>

      <div className={classes.Left}>

      <img alt="logo-footer" src="../../static/images/register-logo.png"/>
  
       
                    <a href="#">
                      <Button>REGISTER</Button>
                    </a>
<div  className={classes.register}>
                    <a href="#">
                      <h2>* Required Inputs</h2>
                    </a>
                    </div>

        <div>
         
        </div>
        </div>
        <div  className={classes.Right}>
        <Input className={classes.LoginInput} placeholder="* Full Name" type="text" />
        <Input className={classes.LoginInput}  placeholder="* Country" type="text" />
        <Input className={classes.LoginInput} placeholder="* Region/City" type="text" />
        <Input className={classes.LoginInput}  placeholder="* Address" type="text" />
        <Input className={classes.LoginInput} placeholder="* Email" type="text" />

        <Input className={classes.LoginInput}  placeholder="* Phone" type="tel" />
</div>
</div>


      </Dialog>
    </div>
  )
}