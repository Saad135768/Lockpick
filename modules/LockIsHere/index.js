import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import useStyles from "./style"
import Button from "../../common/Button"
import Link from "next/link"
import { Parallax } from 'react-scroll-parallax'
import ScrollAnimation from 'react-animate-on-scroll'

const LockIsHere = () => {
  const classes = useStyles()

  return (
    <div className={classes.LockIsHereHolder}>
      <Container>
        <div>
          <Parallax Y={[0, 10]}>
            <img src="../../static/images/homepage/lookishere.png" />
            </Parallax>
          <p>
            The leading name in automotive scan tools, M2K, is proud to
            introduce LOCK PICK – a ground-breaking interface for BMW vehicles.
            <br />
            LOCK PICK is an advanced system that allows for engineering level
            capabilities including immobilizer functions, key programming,
            module virginizing & cloning, and recovers FRM.
          </p>
          <div className={classes.ButtonHolder}>
          <ScrollAnimation animateIn='fadeInUp'
                             >
            <Link as={"#"} href="#">
              <a href="#">
                <Button>Learn More</Button>
              </a>
            </Link>
            </ScrollAnimation>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default LockIsHere
