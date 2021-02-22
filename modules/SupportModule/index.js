import Container from "@material-ui/core/Container"
import useStyles from "./style"
import Link from "next/link"
import ScrollAnimation from 'react-animate-on-scroll'
import Grid from "@material-ui/core/Grid"
import Button from "../../common/Button"

const SupportModule = () => {
  const classes = useStyles()

  return (
    <div className={classes.SupportHolder}>
      <Container>
      <Grid container spacing={2}>
      <Grid item lg={10}>
      <h1> SUPPORT</h1>
        <p>
        LOCK PICK is an advanced system that allows for engineering level capabilities including immobilizer functions, key programming, module virginizing & cloning, and recovers FRM.


        </p>
        <Grid container spacing={0}>
        <Grid item  sm={4} lg={4} xs={12}>
        <Link as={"/support/faq"} href="./support/faq">
                    <a href="/support/faq">
                      <Button>Faq</Button>
                    </a>
                  </Link>

          </Grid>
          <Grid item  sm={8} lg={8} xs={12}>
<h3> Frequently Asked Question </h3>

          </Grid>
          <Grid item  sm={4} lg={4} xs={12}>

        <Link as={"/support/tutorials"} href="/support/tutorials">
                    <a href="/support/tutorials">
                      <Button>TUTORIALS</Button>
                    </a>
                  </Link>

          </Grid>
          <Grid item  sm={8} lg={8} xs={12}>
<h3> Start Guide | Manual | Tutorials | Videos</h3>

          </Grid>

          <Grid item  sm={4} lg={4} xs={12}>
        <Link as={"/support/download"} href="/support/download">
                    <a href="/support/download">
                      <Button>DOWNLOAD</Button>
                    </a>
                  </Link>

          </Grid>
          <Grid item  sm={8} lg={8} xs={12}>

<h3>Wallpapers | Brochures | Software</h3>

          </Grid>



       </Grid>
      </Grid>
      
      </Grid>

       

       
      </Container>

    </div>
  )
}

export default SupportModule
