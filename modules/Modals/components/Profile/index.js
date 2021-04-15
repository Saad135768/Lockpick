import React, { useState, useEffect } from 'react'
import useStyles from './style'
import Button from '../../../../common/Button'
import Dialog from '@material-ui/core/Dialog'
import { DialogTitle } from '@material-ui/core'
import { withSnackbar } from 'notistack'

const CustomizedDialogs = (props) => {
  const [open, setOpen] = useState()
  
   
  const classes = useStyles()

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={() => setOpen(true)}>
        Profile
      </Button>

      <Dialog
        className={classes.root}
        onClose={() => setOpen(false)}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
      <form>
        <div>
        <img alt="logo-footer" src="../../static/images/login-logo.png" />
        <DialogTitle id="form-dialog-title">
          <h3> Hello Adam </h3>
        </DialogTitle>
          
        
          <Button> Order History</Button>
          <Button> Account Information </Button>
          <Button> Chagne Password </Button>

        </div>
        </form>
      </Dialog>
    </div>
  )
}

export default withSnackbar(CustomizedDialogs)
