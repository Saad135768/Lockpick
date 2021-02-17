import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa'
import { AiOutlineInstagram } from 'react-icons/ai'
import Link from 'next/link'
import useStyles from './style'

const Footer = () => {
  const classes = useStyles()
  return (
    <div>
      <div className={classes.FooterHolder}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item lg={3} sm={3} xs={12}>
              <Link as={'/'} href="/">
                <li className={classes.FooterLogo}>
                  <a href="/">
                    <img alt="logo" src="../../static/images/footer-logo.png" />
                  </a>
                </li>
              </Link>
            </Grid>

            <Grid item lg={7} xs={12} sm={7}>
              <Link as={'/'} href="/">
              <ul className={classes.centermenu}>
                <li>
                  <Link as={'#'} href="#">
                    <a href="#">About</a>
                  </Link>
                </li>
                <li>
                  <Link as={'#'} href="#">
                    <a href="#">Registrations</a>
                  </Link>
                </li>
                <li>
                  <Link as={'#'} href="#">
                    <a href="#">News</a>
                  </Link>
                </li>
                <li>
                  <Link as={'#'} href="#">
                    <a href="#">Contact Us</a>
                  </Link>
                </li>
              </ul>
              </Link>
            </Grid>
            <Grid item lg={2} xs={12} sm={2}>
            <div className={classes.FooterRight}>

              <ul className={classes.FooterSocial}>
                <li>
                  <a href="https://www.facebook.com/decorativeglassdgeg">
                    <FaFacebookF />
                  </a>
                </li>

                <li>
                  <a href="https://www.instagram.com/decorative.glass/">
                    <AiOutlineInstagram />
                  </a>
                </li>

                <li>
                  <a href="https://www.linkedin.com/company/decorative-glass">
                    <FaLinkedinIn />
                  </a>
                </li>
              </ul>
              </div>
            </Grid>
          </Grid>
          <div className={classes.Copyright}>
            <p> Copyright © 2020 Decorative Glass Inc. All Rights Reserved.</p>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Footer
