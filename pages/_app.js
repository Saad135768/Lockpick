import React from 'react'
import '../styles/globals.css'
import Head from 'next/head'
import { ApolloProvider } from '@apollo/react-hooks'
import MobileMenu from '../modules/MobileMenu'
import Navbar from '../modules/Navbar'
import Footer from '../modules/Footer'
import withData from '../utilities/graphql-apollo'
import { ParallaxProvider } from 'react-scroll-parallax'
import * as R from 'ramda'
import App from 'next/app'
import Cookies from 'js-cookie'
function MyApp({ Component, pageProps, apollo }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link
          rel="stylesheet"
          href="https://video-react.github.io/assets/video-react.css"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
          integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
          crossorigin="anonymous"
        />
        <link rel="icon" href="../static/images/32x32.png" sizes="32x32" />
        <link rel="icon" href="../static/images/192x192.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="../static/images/180x180.png" />

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap"
          rel="stylesheet"
        />

        <style>
          {`
            @font-face {
              font-family:'Poppins-Regular';
              font-family: 'Inter', sans-serif;
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

      <div>
        <ApolloProvider client={apollo}>
          <Navbar />
          <MobileMenu />
          <ParallaxProvider>
            <Component {...pageProps} />
          </ParallaxProvider>
        </ApolloProvider>
        <Footer />
      </div>
    </>
  )
}
MyApp.getInitialProps = async appContext => {
  try {
    let token =
      typeof window === 'undefined'
        ? appContext.ctx.req.headers.cookie
        : Cookies.get('token')
    if (
      appContext?.ctx?.req?.headers &&
      appContext?.ctx?.req?.headers?.cookie
    ) {
      if (
        R.pathOr(
          [],
          ['req', 'headers', 'cookie'],
        )(appContext.ctx).split('token=')[1]
      ) {
        // eslint-disable-next-line prefer-destructuring
        token = R.pathOr([], ['req', 'headers', 'cookie'])(appContext.ctx)
          .split('token=')[1]
          .split(';')[0]
      }
    }
    const appProps = await App.getInitialProps(appContext)
    return { ...appProps, token }
  } catch (error) {
    console.log('app getIntialProps error', error)
  }
}
export default withData(MyApp)
