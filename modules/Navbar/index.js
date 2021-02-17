import Link from 'next/link'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Button from '../../common/Button'
import useStyles from './style'

const Navbar = () => {
  const classes = useStyles()

  return (
    <div className={classes.NavbarHolder}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item lg={3} md={3}>
            <div className={classes.Logo}>
              <Link as={'/'} href="/">
                <a href="/">
                  <img src="../../static/images/logo.png" alt="est" />
                </a>
              </Link>
            </div>
          </Grid>
          <Grid item lg={9} md={9}>
            <div className={classes.navbarContent}>
              <ul className={classes.centermenu}>
                <li>
                  <Link as={'#'} href="#">
                    <a href="#">Home</a>
                  </Link>
                </li>
                <li>
                  <Link as={'#'} href="#">
                    <a href="#">Products</a>
                  </Link>
                </li>
                <li>
                  <Link as={'#'} href="#">
                    <a href="#">Download</a>
                  </Link>
                </li>
                <li>
                  <Link as={'#'} href="#">
                    <a href="#">About Us</a>
                  </Link>
                </li>
              </ul>
              <Button>Login</Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Navbar
