import React, { useState, Fragment } from 'react'
import useStyles from './style'
import Button from '../../../../common/Button'
import Dialog from '@material-ui/core/Dialog'
import { DialogTitle } from '@material-ui/core'
import useStore from '../../../../store'
import { pathOr } from 'ramda'
import Cookies from 'js-cookie'
import { useQuery } from '@apollo/react-hooks'
import { GET_ORDERS, GET_CURRENT_CUSTOMER } from '../../data'
import PropTypes from 'prop-types'
import { AppBar, Tabs, Tab, Box, Typography } from '@material-ui/core'
import OrderHistory from './components/OrderHistory'
import Loader from 'react-loader-spinner'

const CustomizedDialogs = (props) => {

  const [value, setValue] = useState(0)

  const { data } = useQuery(GET_CURRENT_CUSTOMER, { fetchPolicy: 'no-cache' })

  const { data: getOrdersData, loading } = useQuery(GET_ORDERS, { variables: { status: !value ? 'Processing' : undefined } })
 
  const openModal = useStore((state) => state.openModal)
  const setOpenModal = useStore((state) => state.setOpenModal)
    
  const TabPanel = ( { children, value, index, ...props }) => (
      <div
        role='tabpanel'
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...props}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    )

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  }

  const a11yProps = (index) => ( 
    {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    }
  )
  const handleChange = (_, newValue) => {
    setValue(newValue)
  }

const getOrders = pathOr([], ['getOrders', 'items'], getOrdersData)

const orderHistory = (msg = 'No orders found') => (
  getOrders.length ? getOrders.map((data) => 
  <Fragment key={data._id}>
    <OrderHistory data={data} />
  </Fragment>
  )
  : <h1>{msg}</h1>
)

  const classes = useStyles()

  return (
    <div className={classes.OrderHistoryHolder}>
      <Dialog
        className={classes.root}
        onClose={() => setOpenModal()}
        aria-labelledby='customized-dialog-title'
        open={openModal}
      >
        <form>
          <div className={classes.LeftRight}>
            <div className={classes.Left}>
              <img alt='logo-footer' src='../../static/images/white-logo.png' />
              <DialogTitle id='form-dialog-title'>
                <h3> Hello {data?.getCurrentCustomer?.name} </h3>
              </DialogTitle>
              <Button onClick={() => setOpenModal(5)}>Order History</Button>
              <Button
                className='NotActive'
                onClick={() => setOpenModal(4)}
                type='button'
              >
                Account Information
              </Button>
              <Button
                className='NotActive'
                onClick={() => setOpenModal(3)}
                type='button'
              >
                Change Password
              </Button>
              <div className={classes.Logout}>
                <h2
                  onClick={() => {
                    Cookies.remove('token')
                    window.location = '/'
                  }}
                >
                  LOG OUT
                </h2>
              </div>
            </div>
            <div className={classes.Right}>
              <div className={classes.root}>
                <AppBar position='static'>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label='simple tabs example'
                  >
                    <Tab label='ONGOING' {...a11yProps(0)} />
                    <Tab label='PAST ORDERS' {...a11yProps(1)} />
                  </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                  {loading && <Loader
                  type="Oval"
                  color="#fba631"
                  height={100}
                  width={100}
                  />}
                  {!loading && orderHistory('No Pending Orders')}
                </TabPanel>

                  {/* previous orders */}
                <TabPanel value={value} index={1}>
                {loading && <Loader
                  type="Oval"
                  color="#fba631"
                  height={100}
                  width={100}
                  />}
                  {!loading && orderHistory('No Previous Orders')}
                </TabPanel>
              </div>
            </div>
          </div>
        </form>
      </Dialog>
    </div>
  )
}

export default CustomizedDialogs
