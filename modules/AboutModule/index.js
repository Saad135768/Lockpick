import Container from "@material-ui/core/Container"
import useStyles from "./style"
import Link from "next/link"
import ContactForm from "../ContactForm"
import { Parallax } from 'react-scroll-parallax'
import ScrollAnimation from 'react-animate-on-scroll'

const AboutModule = () => {
  const classes = useStyles()

  return (
    <div className={classes.AboutHolder}>
      <Container>

       <div className={classes.FormHolder}>
       <ScrollAnimation animateIn="fadeInUp"
       delay={100}
         animateOnce={true}>
                <div className={classes.AboutMainImge}>

        <img src="../../static/images/about/about.png" />
        </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">

         <p>
         It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal 
         distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy.</p>
         </ScrollAnimation>

        </div>
      </Container>
      <ContactForm/>

    </div>
  )
}

export default AboutModule
