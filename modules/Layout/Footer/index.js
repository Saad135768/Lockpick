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
  const { pathname } = router

  return (
    
       <div className={`${classes.footer} ${pathname.includes('invoice' || 'order') ? classes.none : ''}`}>

      <div className={classes.FooterScroll} >
        <ScrollToTop showUnder={200} duration={900}>
          <span>
            <img src="https://image.devteam9260.workers.dev/?width=70&image=https://m2k-static.s3-eu-west-1.amazonaws.com/lock-pick/backt2top.png" />
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
                      src="https://image.devteam9260.workers.dev/?width1000&image=https://hbs-static.s3.eu-west-1.amazonaws.com/product/5fc5fa160412b572360a4771/6ed83267-70cd-4305-8c98-2083d891570b.png"
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
                  src="https://image.devteam9260.workers.dev/?width1000&image=https://m2k-static.s3-eu-west-1.amazonaws.com/lock-pick/m2klogo.png"
                />
              </div>
            </Grid>
            <Grid item lg={3} xs={12} sm={5}>
              <div className={classes.FooterRight}>
                <h4> Follow Us </h4>

                <ul className={classes.FooterSocial}>
                  <li>
                    <a href="https://www.facebook.com/Lock-Pick-103123508639309">
                      <FaFacebookF />
                    </a>
                  </li>

                  <li>
                    <a href="https://www.instagram.com/lockpickus/?utm_medium=copy_link">
                      <AiOutlineInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/LockPickUS1">
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
