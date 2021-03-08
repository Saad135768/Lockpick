import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import { FaFacebookF, FaTwitter } from "react-icons/fa"
import { AiOutlineInstagram, AiOutlineGoogle } from "react-icons/ai"
import Link from "next/link"
import useStyles from "./style"
import ScrollToTop from 'react-scroll-up'
const Footer = () => {
  const classes = useStyles()
  return (
    <div>
        <div className={classes.FooterScroll}>
      <ScrollToTop showUnder={200}>
  <span><img src="../../static/images/backt2top.png"/></span>
  </ScrollToTop>
  </div>
      <div className={classes.FooterHolder}>
        <div className={classes.FooterSeperator}/>
         
        <Container maxWidth="lg">
          <Grid container >
            <Grid item lg={3} sm={3} xs={12}>
              <Link as={"/"} href="/">
                <li className={classes.FooterLogo}>
                  <a href="/">
                    <img
                      alt="logo-footer"
                      src="../../static/images/footer-logo.png"
                    />
                  </a>
                </li>
              </Link>
              <div className={classes.Copyright}>
              <p> © 2021 LOCKPICK All Rights Reserved. </p>
</div>
            </Grid>

            <Grid item lg={5} xs={12} sm={4}>
              <div className={classes.CenterLogo}>
                <img
                  alt="m2k-logo"
                  src="../../static/images/homepage/m2klogo.png"
                />
              </div>
            </Grid>
            <Grid item lg={4} xs={12} sm={5}>
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
                    <a href="#">
                      <AiOutlineGoogle />
                    </a>
                  </li>
                </ul>
                <Link as={"/"} href="/">
                  <ul className={classes.centermenu}>
                    <li>
                      <Link as={"#"} href="#">
                        <a href="#">Terms of use  </a>
                      </Link>
                    </li>
                    <li>
                    <span>  |</span>
                      </li>
                    <li>
                      <Link as={"#"} href="#">
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
