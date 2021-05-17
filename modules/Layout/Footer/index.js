import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import { AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useStyles from './style'
import ScrollToTop from 'react-scroll-up'

const Footer = () => {
  const classes = useStyles()
  const router = useRouter()
  const { parsed, pathname } = router

  return (
    
       <div className={`${classes.footer} ${pathname.includes('invoice' || 'orderid')? classes.none : ''}`}>

      <div className={classes.FooterScroll} >
        <ScrollToTop showUnder={200} duration={900}>
          <span>
            <img src="../../static/images/backt2top.png" />
          </span>
        </ScrollToTop>
      </div>
      <div className={classes.FooterHolder}>
        <div className={classes.FooterSeperator} />

        <Container maxWidth="lg">
          <Grid container>
            <Grid item lg={3} sm={3} xs={12}>
              <Link as={'/'} href="/">
                <li className={classes.FooterLogo}>
                  <a href="/">
                    <img
                      alt="logo-footer"
                      src="../../static/images/footer-logo.svg"
                    />
                  </a>
                </li>
              </Link>
              <div className={classes.Copyright}>
                <p> © 2021 LOCKPICK All Rights Reserved. </p>
              </div>
            </Grid>

            <Grid item lg={6} xs={12} sm={4}>
              <div className={classes.CenterLogo}>
                <img
                  alt="m2k-logo"
                  src="../../static/images/homepage/m2klogo.png"
                />
              </div>
            </Grid>
            <Grid item lg={3} xs={12} sm={5}>
              <div className={classes.FooterRight}>
                <h4> Follow Us </h4>

                <ul className={classes.FooterSocial}>
                  <li>
                    <a href="#">
                      <FaFacebookF />
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <AiOutlineInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/playlist?list=PLy-GudNye8JrILOsiLsLqZAuH_xIb001P"
                      target="_blank"
                    >
                      <AiFillYoutube />
                    </a>
                  </li>
                </ul>
                <Link as={'/'} href="/">
                  <ul className={classes.centermenu}>
                    <li>
                      <Link as={'#'} href="#">
                        <a href="#">Terms of use </a>
                      </Link>
                    </li>
                    <li>
                      <span> |</span>
                    </li>
                    <li>
                      <Link as={'#'} href="#">
                        <a href="#">Privacy Policy</a>
                      </Link>
                    </li>
                  </ul>
                </Link>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  )
}

export default Footer
