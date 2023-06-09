import React from 'react';
import Head from 'next/head'
const Footer = React.lazy(() => import('../components/Footer/Footer'))
import '../styles/globals.scss'
import Header from '../components/Header/Header';
import MainLayout from '../layouts/MainLayout/MainLayout';
import theme from '../store/theme';
import { observer } from 'mobx-react-lite';
import DarkMode from "../components/Eyes";

const MyApp = observer(({ Component, pageProps }) => {
  
  return (
    <MainLayout>
      <Head>
        <title>Главная</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/tuvan_herb.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true}></link>
      </Head>

      { theme.theme === 'dark' &&  (<DarkMode />) }

      <Header
        logosrc={`/tuvan_herb.png`}
        fullName={'Администрация сумона Кызыл-Чыраа'} />

      <div className='container mx-auto text-black font-light min-h-[500px]'>
        <Component {...pageProps} />
      </div>

      <Footer
        mincompressedname={'Администрация сумона Кызыл-Чыраа'}
        phone={'+7(394)227-75-57'}
        email={'cit@rtyva.ru'} />
    </MainLayout>
  )
})

export default MyApp