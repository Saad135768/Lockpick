import Head from 'next/head'
import Header from '../modules/Header'
import LockIsHere from '../modules/LockIsHere'
import HomeRegister from '../modules/HomeRegister'
import ContactForm from '../modules/ContactForm'

export default function Home () {
  return (
    <div>
      <Head>
        <title>lock pick</title>
      </Head>
      
      <Header/>
      <LockIsHere/>
      <HomeRegister/>
      <ContactForm/>

    </div>
  )
}
