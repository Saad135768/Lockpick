import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import useStyles from "./style"
import ReactPlayer from 'react-player/lazy'

function TabPanel(props) {
  const { children, value, index, ...other } = props
  const classes = useStyles()

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3} className={classes.box}>
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  }
}


export default function VerticalTabs() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
        indicatorColor="primary" classes={{ indicator: classes.indicator }}
      >
        <Tab label="Lock Pick Introduction" {...a11yProps(0)} />
        <Tab label="Lock Pick Initial Setup" {...a11yProps(1)} />
        <Tab label="DME READ WRITE ISN AND VIN 01" {...a11yProps(2)} />
        <Tab label="VIN CHANGE" {...a11yProps(3)} />
        <Tab label="PRE PROCESS PROGRAMMING" {...a11yProps(4)} />
        <Tab label="DELETE KEY" {...a11yProps(5)} />
        <Tab label="ALL KEY LOST" {...a11yProps(6)} />
        <Tab label="ADD KEY" {...a11yProps(7)} />
        <Tab label="EGS ISN CLEAR 02" {...a11yProps(8)} />
        <Tab label="EGS ISN CLEAR 01" {...a11yProps(9)} />
        <Tab label="N13 N20 N55 DME ISN" {...a11yProps(10)} />
        <Tab label="DME READ WRITE ISN AND VIN 02" {...a11yProps(11)} />
        <Tab label="FRM DATA RECOVERY" {...a11yProps(12)} />

      </Tabs>
      <TabPanel className={classes.width} value={value} index={0}>
      Lock Pick Introduction
      <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=U0iAZ1InBS8'
          width='100%'
          height='330px'
          controls={true}
   playing={false}
   autoPlay={false}
        />
      </TabPanel>
      <TabPanel className={classes.width} value={value} index={1}>
      Lock Pick Initial Setup

      <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=ggPH46PjY4I'
          width='100%'
          height='330px'
          controls={true}
          playing={false}
          autoPlay={false}
        />
      </TabPanel>
      <TabPanel className={classes.width}  value={value} index={2}>
      DME READ WRITE ISN AND VIN 01
      <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=wUgmluunkeA'
          width='100%'
          height='330px'
          controls={true}
          playing={false}
          autoPlay={false}
        />
      </TabPanel>
      <TabPanel className={classes.width}  value={value} index={3}>
      VIN CHANGE

      <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=AuebMwtFFiU'
          width='100%'
          height='330px'
          controls={true}
          playing={false}
          autoPlay={false}
        />
      </TabPanel>
      <TabPanel className={classes.width}  value={value} index={4}>
      PRE PROCESS PROGRAMMING
      <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=CA8XVuv4QPE'
          width='100%'
          height='330px'
          controls={true}
   playing={false}
   autoPlay={false}
        />
      </TabPanel>
      <TabPanel className={classes.width}  value={value} index={5}>
      DELETE KEY
      <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=50xWZs7rGeQ'
          width='100%'
          height='330px'
          controls={true}
   playing={false}
   autoPlay={false}
        />
      </TabPanel>
      <TabPanel className={classes.width}  value={value} index={6}>
      ALL KEY LOST
      <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=w-IwgWUx4yE'
          width='100%'
          height='330px'
          controls={true}
          playing={false}
          autoPlay={false}
        />
      </TabPanel>
      <TabPanel className={classes.width}  value={value} index={7}>
      ADD KEY
      <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=VvdAn75J7jo'
          width='100%'
          height='330px'
          controls={true}
        playing={false}
        autoPlay={false}
        />
      </TabPanel>
      <TabPanel className={classes.width}  value={value} index={8}>
      EGS ISN CLEAR 02

      <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=Blhc3SGOEw0'
          width='100%'
          height='330px'
          controls={true}
   playing={false}
   autoPlay={false}
        />
      </TabPanel>
     
      <TabPanel className={classes.width}  value={value} index={9}>
      EGS ISN CLEAR 01
      <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=iPpiE9YtEaQ'
          width='100%'
          height='330px'
        
          controls={true}
   playing={false}
   autoPlay={false}
        />
      </TabPanel>
      <TabPanel className={classes.width}  value={value} index={10}>
      N13 N20 N55 DME ISN
      <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=pU-lp6VbsvY'
          width='100%'
          height='330px'
        
          controls={true}
   playing={false}
   autoPlay={false}
        />
      </TabPanel>
      <TabPanel className={classes.width}  value={value} index={11}>
      DME READ WRITE ISN AND VIN 02
      <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=2Ynl1GxsxUA'
          width='100%'
          height='330px'
          controls={true}
   playing={false}
   autoPlay={false}
        />
      </TabPanel>
      <TabPanel className={classes.width}  value={value} index={12}>
      FRM DATA RECOVERY
      <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=WV-XK0TozBw'
          width='100%'
          height='330px'
          controls={true}
   playing={false}
   autoPlay={false}
        />
      </TabPanel>
     
    </div>
  )
}