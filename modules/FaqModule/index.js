import Container from "@material-ui/core/Container"
import useStyles from "./style"
import ScrollAnimation from 'react-animate-on-scroll'
import Grid from "@material-ui/core/Grid"
import React from 'react'
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Link from "next/link"
import Button from "../../common/Button"

const FaqModule = () => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.FaqHolder}>
      <Container>
      <Grid container justify="center" spacing={2}>

      <Grid item lg={9}>
      <div className={classes.root}>
      <h1> FREQUENTLY ASKED QUESTIONS</h1>

      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <h2>What is LOCKPICK?</h2>
        </AccordionSummary>
        <AccordionDetails>
          <h3>
          LOCK PICK is a ground-breaking interface for BMW vehicles. It is an advanced system that allows for engineering level capabilities including immobilizer functions, key programming, module virginizing & cloning, and recovers FRM.
          </h3>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <h2>How can I order my LOCKPICK?</h2>
         
        </AccordionSummary>
        <AccordionDetails>
          <h3>
          Please check the products page.
          </h3>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <h2>How can I connect the interface to laptop?</h2>
        
        </AccordionSummary>
        <AccordionDetails>
          <h3>
          LOCKPICK is designed to connect to your laptop or desktop by LAN Cable or WIFI.
          </h3>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <h2>What is the difference between Basic Kit and Full Kit?</h2>
        </AccordionSummary>
        <AccordionDetails>
        <h3>
        Basic Kit include a LOCKPICK interface with modules and cables, while the Full Package comes with additional laptop of your choice from our store with preinstalled and configured LOCKPICK software.

          </h3>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel4bh-header"
        >
          <h2>Does it support additional modules?</h2>
        </AccordionSummary>
        <AccordionDetails>
        <h3>
        YES! You will see the additional modules in the product page soon.

          </h3>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6bh-content"
          id="panel4bh-header"
        >
          <h2>The device is not granting WIFI connection. What did I miss?</h2>
        </AccordionSummary>
        <AccordionDetails>
        <h3>
        Please check the video tutorial "First Use Configuration" on the Support/Tutorial page.

          </h3>
        </AccordionDetails>
      </Accordion>
  

    </div>
        </Grid>
        </Grid>
      </Container>
      <div className={classes.MoreQuestion}>

      <Container>

      <Grid container justify="center" spacing={2}>
      <Grid item lg={9}>
      <Grid container justify="center" spacing={2}>

<Grid item lg={8}>

<p> 
HAVE MORE QUESTIONS? <span> We are here to answer.
</span></p>
</Grid>
<Grid item lg={4}>

<Link as={"/about"} href="./about">
                    <a href="/about">
                      <Button>MESSAGE US</Button>
                    </a>
                  </Link>
                  </Grid>
</Grid>
</Grid>

</Grid>
</Container>
</div>

    </div>
  )
}

export default FaqModule
