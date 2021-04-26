import React from 'react'
import useStyles from './style'
import Button from '../../../../common/Button'
import Dialog from '@material-ui/core/Dialog'
import { withSnackbar } from 'notistack'
import { DialogTitle } from '@material-ui/core'
import useStore from '../../../../store'
import Cookies from 'js-cookie'
import { useForm } from 'react-hook-form'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { GET_CURRENT_CUSTOMER } from '../../data'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Box from '@material-ui/core/Box'
import PropTypes from 'prop-types'
import { MdKeyboardArrowRight } from "react-icons/md"
import { RiMapPinTimeFill } from "react-icons/ri"
import Typography from '@material-ui/core/Typography'
import { Container, Grid, Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core'

const CustomizedDialogs = (props) => {
  const { register, handleSubmit, errors, formState } = useForm({ mode: 'onBlur' })
  const { isDirty } = formState
  const { data } = useQuery(GET_CURRENT_CUSTOMER, { fetchPolicy: 'no-cache'})
  const openModal = useStore((state) => state.openModal)
  const setOpenModal = useStore((state) => state.setOpenModal)


  const OrderHistory = async ({ name, phone, ...values }) => {

  }
  
  const classes = useStyles()
  function TabPanel(props) {
    const { children, value, index, ...other } = props

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    )
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  }
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    }
  }
  
  
  
    const [value, setValue] = React.useState(0)
  
    const handleChange = (event, newValue) => {
      setValue(newValue)
    }
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChangeTable = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false)
    }

  return (
    <div
    className={classes.OrderHistoryHolder}
    >
      <Dialog
        className={classes.root}
        onClose={() => setOpenModal()}
        aria-labelledby="customized-dialog-title"
        open={openModal}
      >
        <form>
          <div className={classes.LeftRight}>
            <div className={classes.Left}>
              <img
                alt="logo-footer"
                src="../../static/images/white-logo.png"
              />
              <DialogTitle id="form-dialog-title">
                <h3> Hello {data?.getCurrentCustomer?.name} </h3>

              </DialogTitle>
              <Button  onClick={() => setOpenModal(5)}>Order History</Button>
              <Button className="NotActive" onClick={() => setOpenModal(4)} type="button">Account Information</Button>
              <Button  className="NotActive" onClick={() => setOpenModal(3)} type="button">Change Password</Button>
              <div className={classes.Logout}>
                <h2 onClick={() => {
                  Cookies.remove('token')
                  window.location = '/'
                }}>LOG OUT</h2>
              </div>

            
            </div>
            <div className={classes.Right}>

            <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="ONGOING" {...a11yProps(0)} />
          <Tab label="PAST ORDERS" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
                    
 <Accordion square expanded={expanded === 'panel1'} onChange={handleChangeTable('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <div className={classes.OrderSummaryInfo}>

<Grid container spacing={2}>
<Grid item lg={5} md={5}>
<div  className={classes.OrderNummber}>
<h4>Order No </h4> 
  <span className={classes.OrderText}> LP122</span>
</div>
 
  </Grid>
  <Grid item lg={7} md={7}>
  <h4 className={classes.OrderInvoice}>view invoice  <MdKeyboardArrowRight /> </h4> 
  </Grid>
  <Grid item lg={12} md={12} sm={12} xs={12}>
  <h4 className={classes.OrdePlaced}>Placed on Monday, 19 April, 2021</h4> 
  </Grid>
  <Grid item lg={6} md={6}>
    <div className={classes.OrderItems}>
    <h4>item : <span> 3 </span></h4> 
    </div>
  </Grid>
  <Grid item lg={6} md={6}>
  <div className={classes.OrderTotal}>

  <h4>Total : <span> $0.000.00 </span></h4> 
  </div>

  </Grid>
</Grid>
</div>


        </AccordionSummary>
        <AccordionDetails>
       
      <table>
 
      <tr>
  <td className={classes.imageTable}>
        <img src="../../../../static/images/products/4.png" />
         </td>

   
      <td className={classes.OrderTableTd}>
      <div className={classes.OrderTableHolder}>

   <div className={classes.OrderTableLeft}>
<h4>  LOCK PICK BASIC KIT </h4> 
<h4>  Quantity </h4> 
<h4>  track Number </h4> 
<h4> Order Status </h4> 
<h4> Shipping rate </h4> 
<h5> <RiMapPinTimeFill/>Track</h5>
 </div>
 <div className={classes.OrderTableRight}>
 <h4>   $0.000.00  </h4> 
 <h4>  2 </h4> 
 <h4>  ------ </h4> 
 <h4>  Pending </h4> 
 <h4>   $0.000.00  </h4> 

 </div>

</div>
 </td>

      
  </tr>
 
  <tr>
  <td className={classes.imageTable}>
        <img src="../../../../static/images/products/4.png" />
         </td>

   
      <td className={classes.OrderTableTd}>
      <div className={classes.OrderTableHolder}>

   <div className={classes.OrderTableLeft}>
<h4>  LOCK PICK BASIC KIT </h4> 
<h4>  Quantity </h4> 
<h4>  track Number </h4> 
<h4> Order Status </h4> 
<h4> Shipping rate </h4> 
<h5> <RiMapPinTimeFill/>Track</h5>
 </div>
 <div className={classes.OrderTableRight}>
 <h4>   $0.000.00  </h4> 
 <h4>  2 </h4> 
 <h4>  ------ </h4> 
 <h4>  Pending </h4> 
 <h4>   $0.000.00  </h4> 

 </div>

</div>
 </td>

      
  </tr>
 
</table>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel2'} onChange={handleChangeTable('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
        <div className={classes.OrderSummaryInfo}>

<Grid container spacing={2}>
<Grid item lg={5} md={5}>
<div  className={classes.OrderNummber}>
<h4>Order No </h4> 
  <span className={classes.OrderText}> LP122</span>
</div>
 
  </Grid>
  <Grid item lg={7} md={7}>
  <h4 className={classes.OrderInvoice}>view invoice  <MdKeyboardArrowRight /> </h4> 
  </Grid>
  <Grid item lg={12} md={12} sm={12} xs={12}>
  <h4 className={classes.OrdePlaced}>Placed on Monday, 19 April, 2021</h4> 
  </Grid>
  <Grid item lg={6} md={6}>
    <div className={classes.OrderItems}>
    <h4>item : <span> 3 </span></h4> 
    </div>
  </Grid>
  <Grid item lg={6} md={6}>
  <div className={classes.OrderTotal}>

  <h4>Total : <span> $0.000.00 </span></h4> 
  </div>

  </Grid>
</Grid>
</div>
        </AccordionSummary>
        <AccordionDetails>
        <table>
 
 
 <tr>
 <td className={classes.imageTable}>
       <img src="../../../../static/images/products/4.png" />
        </td>

  
     <td className={classes.OrderTableTd}>
     <div className={classes.OrderTableHolder}>

  <div className={classes.OrderTableLeft}>
<h4>  LOCK PICK BASIC KIT </h4> 
<h4>  Quantity </h4> 
<h4>  track Number </h4> 
<h4> Order Status </h4> 
<h4> Shipping rate </h4> 
<h5> <RiMapPinTimeFill/>Track</h5>
</div>
<div className={classes.OrderTableRight}>
<h4>   $0.000.00  </h4> 
<h4>  2 </h4> 
<h4>  ------ </h4> 
<h4>  Pending </h4> 
<h4>   $0.000.00  </h4> 

</div>
</div>
</td>

     
 </tr>

</table>
        </AccordionDetails>
      </Accordion>
      </TabPanel>
      <TabPanel value={value} index={1}>
 <h3> Soon</h3>
      </TabPanel>
    
    </div>
</div>
          </div>
        </form>
      </Dialog>
    </div>
  )
}

export default withSnackbar(CustomizedDialogs)
