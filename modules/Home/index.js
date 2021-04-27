import Head from 'next/head'
import Header from './Header'
import LockIsHere from './LockIsHere'
import HomeRegister from './HomeRegister'
import ContactForm from './ContactForm'

const Home = () => <>
      <Head>
        <title>lock pick</title>
      </Head>
      
      <Header/>
      <LockIsHere/>
      <HomeRegister/>
      <ContactForm/>

    </>

export default Home