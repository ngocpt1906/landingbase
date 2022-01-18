import Head from 'next/head';
import Footer from '../components/Footer';
import HeadBlock from '../components/HeadBlock';
import HeaderMenu from '../components/HeaderMenu';
import { StoreContext } from "../stores/context";
import { useContext } from 'react';

import styles from '../styles/Home.module.css';

const Home = () => {
  const { slogan } = useContext(StoreContext);
  return (
    <div className={styles.container}>
      <Head>
        <title>Landing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <HeaderMenu></HeaderMenu>
        <HeadBlock text={slogan?.title?.rendered}></HeadBlock>
      </main>
      <footer className={styles.footer}>
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default Home;
