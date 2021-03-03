import Container from "@material-ui/core/Container"
import useStyles from "./style"
import Link from "next/link"
import ScrollAnimation from 'react-animate-on-scroll'
import Grid from "@material-ui/core/Grid"
import Button from "../../../../common/Button"

const software = () => {
  const classes = useStyles()

  return (
    <div className={classes.SupportHolder}>
      <Container>
      <h3> software</h3>
       <div className={classes.SupportBg}>
       <ScrollAnimation animateIn="fadeIn">

   <Grid container justify="center" spacing={2}>

     <Grid item lg={10} xs={12}>

                <div className={classes.SupportRight}>

        <img src="../../../../static/support/software.gif" />
        <p> Windows 7, 8, 10 (x86-x64) </p>
        <h5>LATEST BUILD </h5>

                   
                      <Button>
                        
                      <a href="http://12.21.38.254:8080/LP_setup.exe" download>
                        Download
                        </a>

                         </Button>
                  <div className={classes.while}>

        <Link as={"/support/tutorials"} href="/support/tutorials">
                    <a href="/support/tutorials">
                    While downloading please watch first use configuration video
                    </a>
                  </Link>
        </div>
        </div>


    


                  </Grid>
                  </Grid>


         </ScrollAnimation>

        </div>
      </Container>

    </div>
  )
}

export default software
