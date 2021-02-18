import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import useStyles from './style'
import Button from '../../common/Button'
import Link from 'next/link'

const HomeRegister = () => {
  const classes = useStyles()

  return (
    <div className={classes.HomeRegisterHolder}>
       <Container>
       <div className={classes.HomeRegisterBg}>
     <div className={classes.HomeRegisterImage}>
     <img src="../../static/images/homepage/register.png"/>
</div>
  <div className={classes.HomeRegisterContent}>
<h3>REGISTER NOW</h3>
<h4> AND GET YOURS!</h4>

<div className={classes.HomeRegisterBorder}/>




<Link as={'#'} href="#">
      <a href="#">
        <Button>
        REGISTER
        </Button>
      </a>
    </Link>

  </div>
  </div>


            </Container>

    </div>
  )
}

export default HomeRegister
