import React from 'react'
import useStyles from './style'
import Button from '../../../../common/Button'
import Dialog from '@material-ui/core/Dialog'
import { DialogTitle } from '@material-ui/core'
import { withSnackbar } from 'notistack'
import useStore from '../../../../store'
import { GET_CURRENT_CUSTOMER } from '../../data'
import { useQuery } from '@apollo/react-hooks'
import Cookies from 'js-cookie'

const CustomizedDialogs = () => {
  const { data } = useQuery(GET_CURRENT_CUSTOMER, { fetchPolicy: 'no-cache'})
  const openModal = useStore((state) => state.openModal)
  const setOpenModal = useStore((state) => state.setOpenModal)

  const classes = useStyles()
  return (
    <div>
      <Dialog
        className={classes.root}
        onClose={() => setOpenModal()}
        aria-labelledby="customized-dialog-title"
        open={openModal}
      >
      <form>
        <div>
        <img alt="logo-footer" src="../../static/images/login-logo.png" />
        <DialogTitle id="form-dialog-title">
          <h3> Hello {data?.getCurrentCustomer?.name} </h3>
        </DialogTitle>
          
        
          <Button onClick={() => setOpenModal(5)}> Order History</Button>
          <Button onClick={() => setOpenModal(4)}> Account Information </Button>
          <Button onClick={() => setOpenModal(3)}> Change Password </Button>
          <div className={classes.Logout}>
                <h2 onClick={() => {
                  Cookies.remove('token')
                  window.location = '/'
                }}>LOG OUT</h2>
              </div>
        </div>
        </form>
      </Dialog>
    </div>
  )
}

export default withSnackbar(CustomizedDialogs)
