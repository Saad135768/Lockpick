import Link from 'next/link'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Button from '../../common/Button'
import useStyles from './style'
import { useRouter } from 'next/router'

const Navbar = () => {
  const classes = useStyles()
  const router = useRouter()

  return (
    <div className={classes.NavbarHolder}>
                  <div className={classes.NavbaTopImage}>

          <img src="../../static/images/homepage/topimage.png" alt="top-image" />
          </div>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item lg={3} md={3}>
            <div className={classes.Logo}>
              <Link as={'/'} href="/">
                <a href="/">
                  <img src="../../static/images/logo.png" alt="logo-pick-lock" />
                </a>
              </Link>
            </div>
          </Grid>
          <Grid item lg={9} md={9}>
            <div className={classes.navbarContent}>
              <ul className={classes.centermenu}>
  
                <Link href="/">
                    <a className={router.pathname === '/' ? 'active' : ''}>
                     Home</a>
                  </Link>

                <li>
                  <Link as={'#'} href="#">
                    <a href="">Products</a>
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
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Navbar
