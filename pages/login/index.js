import Login from '../../modules/Modals/components/Login'
import SignUp from '../../modules/Modals/components/SignUp'
import Profile from '../../modules/Modals/components/Profile'
import Account from '../../modules/Modals/components/Account'
import ChangePassword from '../../modules/Modals/components/ChangePassword'
import useStyles from './style'

import Head from 'next/head'
const Auth = () => {
  const classes = useStyles()

  return (

<div>
   <Head>
        <title> Modals  </title>
      </Head> 
      <div className={classes.ModalHolder}>
      <Login />
      <SignUp />
      <Profile />
      <ChangePassword />
      <Account />
      </div>

      </div>
  )
}


export default Auth
