import React, { useState, useEffect } from 'react'
import useStyles from './style'
import Button from '../../../../common/Button'
import Dialog from '@material-ui/core/Dialog'
import { withSnackbar } from 'notistack'
import { DialogTitle } from '@material-ui/core'
import { RiAccountPinBoxFill } from "react-icons/ri"


const CustomizedDialogs = () => {
  const [open, setOpen] = useState(false)

  const classes = useStyles()

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={() => setOpen(true)}>
      <RiAccountPinBoxFill/> Account Information 
      </Button>
        <Dialog
          className={classes.root}
          onClose={() => setOpen(false)}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
      <form>
          <div className={classes.LeftRight}>
            <div className={classes.Left}>
              <img
                alt="logo-footer"
                src="../../static/images/white-logo.png"
              />
<DialogTitle id="form-dialog-title">
          <h3> Hello Adam </h3>
         </DialogTitle>
            <Button className="NotActive"> Order History</Button>
            <Button>Account Information</Button>
             <Button className="NotActive">Change Password</Button>
              <div className={classes.Logout}>
                  <h2>LOG OUT</h2>
              </div>

            </div>
            <div className={classes.Right}>
                
                  <input
                  name="name"
                    className={classes.LoginInput}
                    placeholder="Full Name"
                    type="text"
                    
              />
              <input
                  name="name"
                    className={classes.LoginInput}
                    placeholder="Country"
                    type="text"
              />
             
             <input
                  name="name"
                    className={classes.LoginInput}
                    placeholder="Region/City"
                    type="text"
              />
              <input
                  name="name"
                    className={classes.LoginInput}
                    placeholder="Address"
                    type="text"
              />
             
             <input
                  name="name"
                    className={classes.LoginInput}
                    placeholder="Email"
                    type="text"
              />
              <input
                  name="name"
                    className={classes.LoginInput}
                    placeholder="phone"
                    type="text"
              />
             
           
            </div>
          </div>
      </form>
        </Dialog>
    </div>
  )
}

export default withSnackbar(CustomizedDialogs)
