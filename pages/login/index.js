import Login from '../../modules/Modals/components/Login'
import SignUp from '../../modules/Modals/components/SignUp'
import Profile from '../../modules/Modals/components/Profile'

import Head from 'next/head'

const Auth = () =>
<div>
   <Head>
        <title> Modals  </title>
      </Head>
      <Login />
      <SignUp />
      <Profile />



</div> 


export default Auth
