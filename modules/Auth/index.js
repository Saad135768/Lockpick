import Login from '../../modules/Auth/components/Login'
import SignUp from '../../modules/Auth/components/SignUp'
import Profile from '../../modules/Auth/components/Profile'
import Account from '../../modules/Auth/components/Account'
import ChangePassword from '../../modules/Auth/components/ChangePassword'
import useStyles from './style'
import Head from 'next/head'
import useStore from '../../store'
import Cookies from 'js-cookie'

const Auth = () => {
  const openModal = useStore((state) => state.openModal)
  const token = Cookies.get('token')
  const classes = useStyles()
  return (

    <div>
      <Head>
        <title> Modals  </title>
      </Head>
      <div className={classes.ModalHolder}>
        { (openModal === 1 && !token) && <Login /> }
        { openModal === 2 && <SignUp /> }
        { (openModal === 1 && token) && <Profile /> }
        { openModal === 3 && <ChangePassword /> }
        { openModal === 4 && <Account /> }
      </div>

    </div>
  )
}


export default Auth
