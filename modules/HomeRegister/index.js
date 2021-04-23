import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import useStyles from './style'
import Button from '../../common/Button'
import Link from 'next/link'
import { Parallax } from 'react-scroll-parallax'
import ScrollAnimation from 'react-animate-on-scroll'
import useStore from '../../store'

const HomeRegister = () => {
  const setOpenModal = useStore((state) => state.setOpenModal)
  const classes = useStyles()

  return (
    <div className={classes.HomeRegisterHolder}>
      <Container>
        <div className={classes.HomeRegisterBg}>
          <Parallax x={[-10, 9]}>
            <div className={classes.HomeRegisterImage}>
              <img src="../../static/images/homepage/register2.png" />
            </div>
          </Parallax>
          <div className={classes.HomeRegisterContent}>
            <h3>REGISTER NOW</h3>
            <h4> AND GET YOURS!</h4>

            <div className={classes.HomeRegisterBorder} />

            <ScrollAnimation animateIn="fadeInUp">
                  <Button onClick={() => setOpenModal(2) }>REGISTER</Button>
            </ScrollAnimation>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default HomeRegister
