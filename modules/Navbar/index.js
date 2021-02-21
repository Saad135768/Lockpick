import Link from 'next/link'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Button from '../../common/Button'
import useStyles from './style'
import { useRouter } from 'next/router'
import { RiShoppingCartFill } from 'react-icons/ri'
import { BiSearchAlt} from 'react-icons/bi'
import { FaUser } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'


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
                  <Link href="/products">
                    <a className={router.pathname === '/products' ? 'active' : ''}>
                    Products</a>
                  </Link>

                  <Link href="/download">
                    <a className={router.pathname === '/download' ? 'active' : ''}>
                    Download</a>
                  </Link>

                <li>
                  <Link as={'/about'} href="/about">
                    <a className={router.pathname === '/about' ? 'active' : ''}>
                     About</a>
                  </Link>
                </li>
              </ul>

              <ul className={classes.RightMenu}>
   <li> 
<div class="wrapper">
  <div class="input-group">
    <input class="search" type="text" placeholder="Search .."/>
    <span class="bar"></span>
  </div>
  </div>

  </li>
                      
  <li>
    <Link as={'#'} href="#">
    <a href="#"> <FaUser/></a>
    </Link>
  </li>
  <li>
    <Link as={'#'} href="#">
    <a href="#"> <RiShoppingCartFill/></a>
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
