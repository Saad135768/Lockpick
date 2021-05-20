import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import useStyles from './style'
import Button from '../../../common/Button'
import { withSnackbar } from 'notistack'
import { FiMapPin } from 'react-icons/fi'
import { MdMailOutline } from 'react-icons/md'
import { HiOutlinePhone } from 'react-icons/hi'
import ScrollAnimation from 'react-animate-on-scroll'
import { useForm } from 'react-hook-form'
import { useMutation } from '@apollo/react-hooks'
import { ADD_CONTACT_FORM } from './data'

const ContactForm = (props) => {
  const { handleSubmit, errors, register, reset } = useForm()
  const [addContactForm] = useMutation(ADD_CONTACT_FORM)
  const addForm = async ({ name, email, message }) => {
    try{
       await addContactForm({ variables: { name, email, message } })
       props.enqueueSnackbar('Your message has been sent', { variant: 'success' })
       reset()
    }
    catch(error) {
      if (error.graphQLErrors)
      props.enqueueSnackbar(error.graphQLErrors[0].message, {
        variant: 'error',
      })
    else props.enqueueSnackbar('something went wrong', { variant: 'error' })
    }
  }
  const classes = useStyles()

  return (
    <div className={classes.ContactFormHolder}>
      <div className={classes.MobileTitle}>
        <Container>
          <h3> Need help ? </h3>
          <h5> Contact us now and we will answer your questions </h5>
        </Container>
      </div>
      <Container>
        <div>
          <Grid container spacing={6}>
            <Grid item lg={5} xs={12} sm={6}>
              <div className={classes.ContactFormBg}>
                <h3> Need help ? </h3>
                <p> Contact us now and we will answer your questions </p>
                <div className={classes.ContactFormContent}>
                  <div className={classes.ContactFormIcon}>
                    <FiMapPin />
                  </div>
                  <div className={classes.ContactFormInfo}>
                    <a
                      href="https://www.google.com.eg/maps/search/Lock+Pick+3301+W.+MacArthurBLVD.+Santa+Ana,+CA+92704+-+USA/@33.7197151,-117.8787288,13z/data=!3m1!4b1"
                      target="_blank"
                    >
                      LOCK PICK <br />
                      3301 W.MACARTHUR BLVD. <br /> SANTA ANA, CA 92704 - USA
                      <br />
                    </a>
                  </div>
                </div>
                <div className={classes.ContactFormContent}>
                  <div className={classes.ContactFormIcon}>
                    <MdMailOutline />
                  </div>
                  <div className={classes.ContactFormInfo}>
                    <a href="mailto:Info@Lock-Pick.US" target="_blank">
                      Info @Lock - Pick.US
                    </a>
                  </div>
                </div>
                <div className={`${classes.ContactFormContent} last `}>
                  <div className={classes.ContactFormIcon}>
                    <HiOutlinePhone />
                  </div>
                  <div className={classes.ContactFormInfo}>
                    <a href="tel:+1-949-333-3800"> +1 - 949 - 333 - 3800 </a>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item lg={7} xs={12} sm={6}>
                <form onSubmit={handleSubmit(addForm)}>
              <div className={classes.ContactFormRight}>
                <div className={classes.overlay} />
                <h3> SEND US A MESSAGE : </h3>

                <input 
                    name='name' 
                    className={classes.input} 
                    placeholder="Full Name" 
                    ref={register({ required: 'This field is required'})} 
                />
                 {errors.name && (
                  <p className={classes.errorMsg}>{errors.name.message}</p>
                )}
                <input 
                  name='email' 
                  className={classes.input} 
                  placeholder="Your Email" 
                  ref={register({ required: 'This field is required'})} 
                />
                {errors.email && (
                  <p className={classes.errorMsg}>{errors.email.message}</p>
                )}
                <textarea 
                placeholder="Your Message"
                name='message'
                ref={register({ required: 'This field is required' })}
                ></textarea>
                 {errors.message && (
                  <p className={classes.errorMsg}>{errors.message.message}</p>
                )}
              </div>
              <div className={classes.ButtonHolder}>
                <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                      <Button> Send </Button>
                </ScrollAnimation>
              </div>
            </form>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  )
}

export default withSnackbar(ContactForm)
