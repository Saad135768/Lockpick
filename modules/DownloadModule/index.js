import Container from "@material-ui/core/Container"
import useStyles from "./style"
import Link from "next/link"
import ScrollAnimation from 'react-animate-on-scroll'
import Grid from "@material-ui/core/Grid"
import Button from "../../common/Button"

const DownloadModule = () => {
  const classes = useStyles()

  return (
    <div className={classes.DownloadHolder}>
      <Container>

       <div className={classes.DownloadBg}>
       <ScrollAnimation animateIn="fadeIn">

   <Grid container spacing={1}>
     <Grid item lg={6} sm={6}>
     <div className={classes.DownloaLeft}>
     <iframe width="100%" height="280" src="https://www.youtube.com/embed/38leY3mTk7U" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     <Link as={"#"} href="#">
                    <a href="#">
                    Read Text Version Instructions
                    </a>
                  </Link>
                  </div>
     </Grid>
     <Grid item lg={6} sm={6}>
                <div className={classes.DownloadRight}>

        <img src="../../static/images/download/1.png" />
        <p> Windows 7, 8, 10 (X86-X64) Version</p>
        </div>
    
                  <Link as={"#"} href="#">
                    <a href="#">
                      <Button>Download Latest Build</Button>
                    </a>
                  </Link>

        </Grid>
   </Grid>
           

         </ScrollAnimation>

        </div>
      </Container>

    </div>
  )
}

export default DownloadModule
