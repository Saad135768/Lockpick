import '../styles/globals.css'
import { StateMachineProvider, createStore } from 'little-state-machine'
import Head from 'next/head'
import MobileMenu from '../modules/MobileMenu'
import Navbar from '../modules/Navbar'
import Footer from '../modules/Footer'

import { ParallaxProvider } from 'react-scroll-parallax'

createStore({})

function MyApp ({ Component, pageProps }) {
  return (
    <StateMachineProvider>
      <MobileMenu/>
      <Navbar />
    
      <ParallaxProvider>
        <Component {...pageProps} />
        </ParallaxProvider>
   
      <Footer />

      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous"/>
         <link rel="icon" href="../static/images/32x32.png" sizes="32x32" />
          <link rel="icon" href="../static/images/192x192.png" sizes="192x192" />
          <link rel="apple-touch-icon" href="../static/images/180x180.png" />   
        <style>
          {`
            @font-face {
              font-family:'Poppins-Regular';
              src: url('../static/fonts/Poppins-Regular.ttf');
            }
            @font-face {
              font-family:'Poppins-Bold';
              src: url('../static/fonts/Poppins-Bold.ttf');
            }
            @font-face {
              font-family:'Poppins-SemiBold';
              src: url('../static/fonts/Poppins-SemiBold.ttf');
            }
            @font-face {
              font-family:'Poppins-Light';
              src: url('../static/fonts/Poppins-Light.ttf');
            }
        `}
        </style>
      </Head>
   
    </StateMachineProvider>
  )
}

export default MyApp
