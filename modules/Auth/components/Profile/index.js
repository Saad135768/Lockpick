import React from 'react'
import useStyles from './style'
import Button from '../../../../common/Button'
import Dialog from '@material-ui/core/Dialog'
import { DialogTitle } from '@material-ui/core'
import { withSnackbar } from 'notistack'
import useStore from '../../../../store'
import { GET_CURRENT_CUSTOMER } from '../../data'
import { useQuery } from '@apollo/react-hooks'

const CustomizedDialogs = () => {
  const { data } = useQuery(GET_CURRENT_CUSTOMER)
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
          
        
          <Button onClick={() => setOpenModal()}> Order History</Button>
          <Button onClick={() => setOpenModal(4)}> Account Information </Button>
          <Button onClick={() => setOpenModal(3)}> Chagne Password </Button>

        </div>
        </form>
      </Dialog>
    </div>
  )
}

export default withSnackbar(CustomizedDialogs)
