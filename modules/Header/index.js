import Link from 'next/link'
import Grid from '@material-ui/core/Grid'
import { BsArrowRightShort } from 'react-icons/bs'
import Button from '../../common/Button'

import useStyles from './style'

const Header = () => {
  const classes = useStyles()

  return (
    <div className={classes.HeaderHolder}>
       <div className={classes.HeaderImage}>
            <img src="../../static/images/header.png" alt="est-header-image" />
            <div className={classes.HeaderContent}>
            <Grid item lg={6} sm={6} xs={12}>

      <h1> YOUR FUTURE STARTS <br/> NOW.</h1>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
      <Link as={'/'} href="/">
            <a href="/">
            <Button>Register Now <BsArrowRightShort/></Button>
</a>
</Link>
      </Grid>
      </div>

            </div>

    </div>
  )
}

export default Header
