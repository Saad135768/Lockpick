import React, { useState, useEffect } from 'react'
import useStyles from './style'
import Button from '../../../../common/Button'
import Dialog from '@material-ui/core/Dialog'
import { withSnackbar } from 'notistack'
import { DialogTitle } from '@material-ui/core'
import { RiLockPasswordFill } from "react-icons/ri"


const CustomizedDialogs = () => {
  const [open, setOpen] = useState(false)

  const classes = useStyles()

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={() => setOpen(true)}>
      <RiLockPasswordFill/>  change password 
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
                src="../../static/images/register-logo.png"
              />
<DialogTitle id="form-dialog-title">
          <h3> Hello Adam </h3>
         </DialogTitle>
            <Button className="NotActive"> Order History</Button>
            <Button className="NotActive">Account Information</Button>
             <Button>Change Password</Button>
              <div className={classes.Logout}>
                  <h2>LOG OUT</h2>
              </div>

            </div>
            <div className={classes.Right}>
                
                  <input
                  name="name"
                    className={classes.LoginInput}
                    placeholder=" Old Password"
                    type="password"
                    
              />
             
                
               
              
                  <input
                  name="city"
                    className={classes.LoginInput}
                    placeholder=" New Password"
                    type="password"
              />
              
                  <input
                  name="address"
                    className={classes.LoginInput}
                    placeholder="Confirm Password"
                    type="password"
              />
             
            </div>
          </div>
      </form>
        </Dialog>
    </div>
  )
}

export default withSnackbar(CustomizedDialogs)
