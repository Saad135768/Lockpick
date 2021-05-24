import Container from '@material-ui/core/Container'
import useStyles from './style'
import ContactForm from '../Home/ContactForm'
import ScrollAnimation from 'react-animate-on-scroll'

const About = () => {
  const classes = useStyles()

  return (
    <div className={classes.AboutHolder}>
      <Container>
        <div className={classes.FormHolder}>
          <div className={classes.AboutMainImge}>
            <img
              src="https://m2k-static.s3-eu-west-1.amazonaws.com/lock-pick/about.gif"
              style={{
                filter: 'drop-shadow(0.35rem 3.35rem 0.9rem rgba(0, 0, 0, 0.3)',
              }}
            />
          </div>
          <ScrollAnimation animateIn="fadeIn">
            <p>
              For over 30 years M2K has been the premier supplier of OEM and
              propriety diagnostic and programming systems. M2K introduced
              WIZARD over 10 years ago which revolutionized BMW repairs and
              customizations for advanced technicians. WIZARD continues to
              provide functionality that surpasses all OEM and aftermarket
              systems. 
            </p>

            <p>
              To further support innovative technicians, M2K has released Lock
              Pick, which offers unique capabilities for BMW vehicles. Lock Pick
              is available as a standalone device or an add-on to the WIZARD.
            </p>
            <p>
              Without any soldering, Lock Pick can safely and easily perform
              several advanced functions including: program new and used keys;
              replace or change VIN numbers; reset ISN; clone electronic
              modules; and repair FRM.
            </p>
          </ScrollAnimation>
        </div>
      </Container>
      <ContactForm />
    </div>
  )
}

export default About
