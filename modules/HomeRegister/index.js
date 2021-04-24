import Container from '@material-ui/core/Container'
import useStyles from './style'
import Button from '../../common/Button'
import { Parallax } from 'react-scroll-parallax'
import ScrollAnimation from 'react-animate-on-scroll'
import useStore from '../../store'
import { useQuery } from '@apollo/react-hooks'
import { GET_CART } from './../../commonData'

const HomeRegister = () => {
  
  useQuery(GET_CART, { onCompleted: (result) => { setCart(result.getCurrentCustomer.cart)}, fetchPolicy: 'no-cache'})
  const setOpenModal = useStore((state) => state.setOpenModal)
  const setCart = useStore((state) => state.setCart)
  
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
