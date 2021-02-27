import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import useStyles from "./style"
import Button from "../../common/Button"
import Link from "next/link"
import { FiMapPin } from "react-icons/fi"
import { MdMailOutline } from "react-icons/md"
import { HiOutlinePhone } from "react-icons/hi"
import Input from "../../common/Input"
import ScrollAnimation from 'react-animate-on-scroll'

const ContactForm = () => {
  const classes = useStyles()

  return (
    <div className={classes.ContactFormHolder}>
          <div className={classes.MobileTitle}>
          <Container>

       <h3> Need help?</h3>
       <h5> Contact us now and we will answer your questions</h5>
       </Container>

</div>
      <Container>
        <div>
          <Grid container spacing={6}>
            <Grid item lg={5} xs={12} sm={6}>
              <div className={classes.ContactFormBg}>
                <h3> Need help?</h3>
                <p> Contact us now and we will answer your questions</p>
                <div className={classes.ContactFormContent}>
                  <div className={classes.ContactFormIcon}>
                    <FiMapPin />
                  </div>
                  <div className={classes.ContactFormInfo}>
                    <a
                      href="https://www.google.com.eg/maps/search/Lock+Pick+3301+W.+MacArthurBLVD.+Santa+Ana,+CA+92704+-+USA/@33.7197151,-117.8787288,13z/data=!3m1!4b1"
                      target="_blank"
                    >
                       Mac Arthur BLVD.  <br /> Santa Ana, CA 92704–USA <br />
                    </a>
                  </div>
                </div>
                <div className={classes.ContactFormContent}>
                  <div className={classes.ContactFormIcon}>
                    <MdMailOutline />
                  </div>
                  <div className={classes.ContactFormInfo}>
                    <a href="mailto:Info@Lock-Pick.US" target="_blank">
                      Info@Lock-Pick.US
                    </a>
                  </div>
                </div>
                <div className={`${classes.ContactFormContent} last `}>
                  <div className={classes.ContactFormIcon}>
                    <HiOutlinePhone />
                  </div>
                  <div className={classes.ContactFormInfo}>
                    <a href="tel:+1-949-333-3800">+1-949-333-3800</a>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item lg={7} xs={12} sm={6}>
              <div className={classes.ContactFormRight}>
                <div className={classes.overlay} />

                <h3> SEND US A MESSAGE </h3>
                <Input placeholder="Full Name" type="text" />
                <Input placeholder="Your Email" type="text" />
                <textarea placeholder="Your message"></textarea>

               
              </div>
              <div className={classes.ButtonHolder}>
              <ScrollAnimation animateIn="fadeInUp"
         animateOnce={true}>

                  <Link as={"#"} href="#">
                    <a href="#">
                      <Button>Send</Button>
                    </a>
                  </Link>
                  </ScrollAnimation>

                </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  )
}

export default ContactForm
