import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import useStyles from "./style"
import ReactPlayer from 'react-player/lazy'

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const classes = useStyles();

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
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}


export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
        <Tab label="Instruction Video" {...a11yProps(0)} />
        <Tab label="Initial Setup" {...a11yProps(1)} />
        <Tab label="DME Read Write ISN and VIN" {...a11yProps(2)} />
        <Tab label="All Key Lost" {...a11yProps(3)} />
        <Tab label="Instruction Video" {...a11yProps(4)} />
        <Tab label="Initial Setup" {...a11yProps(5)} />
        <Tab label="DME Read Write ISN and VIN" {...a11yProps(6)} />
        <Tab label="All Key Lost" {...a11yProps(7)} />
      </Tabs>
      <TabPanel className={classes.width} value={value} index={0}>
      Instruction Video
      <ReactPlayer
          className='react-player'
          url='../../../../static/video/1.mp4'
          width='100%'
          height='100%'
          playIcon={<img  className={classes.playicon} src={'../../../../static/video/play-button.png'}/>}
          light={'../../../../static/video/1.jpg'}
          controls={true}
   playing={false}
   autoPlay={false}
        />
      </TabPanel>
      <TabPanel className={classes.width} value={value} index={1}>
      Initial Setup

      <ReactPlayer
          className='react-player'
          url='../../../../static/video/2.mp4'
          width='100%'
          height='100%'
          playIcon={<img  className={classes.playicon} src={'../../../../static/video/play-button.png'}/>}
          light={'../../../../static/video/2.jpg'}
          controls={true}
          playing={false}
          autoPlay={false}
        />
      </TabPanel>
      <TabPanel className={classes.width}  value={value} index={2}>
      DME Read Write ISN and VIN
      <ReactPlayer
          className='react-player'
          url='../../../../static/video/3.mp4'
          width='100%'
          height='100%'
          playIcon={<img  className={classes.playicon} src={'../../../../static/video/play-button.png'}/>}
          light={'../../../../static/video/3.jpg'}
          controls={true}
          playing={false}
          autoPlay={false}
        />
      </TabPanel>
      <TabPanel className={classes.width}  value={value} index={3}>
      All Key Lost
      <ReactPlayer
          className='react-player'
          url='../../../../static/video/4.mp4'
          width='100%'
          height='100%'
          playIcon={<img  className={classes.playicon} src={'../../../../static/video/play-button.png'}/>}
          light={'../../../../static/video/4.jpg'}
          controls={true}
          playing={false}
          autoPlay={false}
        />
      </TabPanel>
      <TabPanel className={classes.width}  value={value} index={4}>
      Instruction Video
      <ReactPlayer
          className='react-player'
          url='../../../../static/video/1.mp4'
          width='100%'
          height='100%'
          playIcon={<img  className={classes.playicon} src={'../../../../static/video/play-button.png'}/>}
          light={'../../../../static/video/1.jpg'}
          controls={true}
   playing={false}
   autoPlay={false}
        />
      </TabPanel>
      <TabPanel className={classes.width}  value={value} index={5}>
      Initial Setup

      <ReactPlayer
          className='react-player'
          url='../../../../static/video/2.mp4'
          width='100%'
          height='100%'
          playIcon={<img  className={classes.playicon} src={'../../../../static/video/play-button.png'}/>}
          light={'../../../../static/video/2.jpg'}
          controls={true}
   playing={false}
   autoPlay={false}
        />
      </TabPanel>
      <TabPanel className={classes.width}  value={value} index={6}>
      DME Read Write ISN and VIN
      <ReactPlayer
          className='react-player'
          url='../../../../static/video/3.mp4'
          width='100%'
          height='100%'
          playIcon={<img  className={classes.playicon} src={'../../../../static/video/play-button.png'}/>}
          light={'../../../../static/video/3.jpg'}
          controls={true}
   playing={false}
   autoPlay={false}
        />
      </TabPanel>
      <TabPanel className={classes.width}  value={value} index={7}>
      All Key Lost
      <ReactPlayer
          className='react-player'
          url='../../../../static/video/4.mp4'
          width='100%'
          height='100%'
          playIcon={<img  className={classes.playicon} src={'../../../../static/video/play-button.png'}/>}
          light={'../../../../static/video/4.jpg'}
          controls={true}
   playing={false}
   autoPlay={false}
        />
      </TabPanel>
     
    </div>
  );
}