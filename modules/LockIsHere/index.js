import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import useStyles from "./style"
import Button from "../../common/Button"
import Link from "next/link"

const LockIsHere = () => {
  const classes = useStyles()

  return (
    <div className={classes.LockIsHereHolder}>
      <Container>
        <div>
          <Grid item lg={4} xs={12} sm={4} md={4}>
            <img src="../../static/images/homepage/lookishere.png" />
          </Grid>
          <p>
            The leading name in automotive scan tools, M2K, is proud to
            introduce LOCK PICK – a ground-breaking interface for BMW vehicles.
            <br />
            LOCK PICK is an advanced system that allows for engineering level
            capabilities including immobilizer functions, key programming,
            module virginizing & cloning, and recovers FRM.
          </p>
          <div className={classes.ButtonHolder}>
            <Link as={"#"} href="#">
              <a href="#">
                <Button>Learn More</Button>
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default LockIsHere
