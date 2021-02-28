import Container from "@material-ui/core/Container"
import useStyles from "./style"
import ContactForm from "../ContactForm"
import { Parallax } from 'react-scroll-parallax'
import ScrollAnimation from 'react-animate-on-scroll'

const AboutModule = () => {
  const classes = useStyles()

  return (
    <div className={classes.AboutHolder}>
      <Container>

       <div className={classes.FormHolder}>
   
                <div className={classes.AboutMainImge}>

        <img src="../../static/images/about/about.gif" />
        </div>
        <ScrollAnimation animateIn="fadeIn">

         <p>
         The leading name in automotive scan tools, M2K, is proud to introduce LOCK PICK – a

ground-breaking interface for BMW vehicles.
LOCK PICK is an advanced system that allows for engineering level capabilities including immobilizer functions, key programming, module virginizing & cloning, and recovers FRM</p>
         </ScrollAnimation>

        </div>
      </Container>
      <ContactForm/>

    </div>
  )
}

export default AboutModule
