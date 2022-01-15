import Head from 'next/head'
import AboutUsBlock from '../components/AboutUsBlock'
import CommingSoon from '../components/CommingSoon'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import HeadBlock from '../components/HeadBlock'
import HeaderMenu from '../components/HeaderMenu'
import styles from '../styles/Home.module.css'
import { wrapper } from "../stores";
import { StoreContext } from "../stores/context";
import { useContext, useEffect } from 'react';
import BlogsGrid from '../components/BlogsGrid'
import { Button } from 'antd'
import Collection from '../components/Collection'
import TitleArea from '../components/TitleArea'

const Blog = ({ testdata }) => {
  const { services, getServices, getSlogan, slogan, sendEmail, emailResponse, emailLoading } = useContext(StoreContext);
  useEffect(() => {
    getServices();
    getSlogan();
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Tech Search | Blogs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <HeaderMenu></HeaderMenu>
        <HeadBlock compact></HeadBlock>
        <TitleArea text={"Our Services"}></TitleArea>
        <Collection data={services}></Collection>
        <TitleArea text={"Contact Us"}></TitleArea>
        <ContactForm onSubmit={sendEmail} emailResponse={emailResponse} loading={emailLoading}></ContactForm>
      </main>
      <footer className={styles.footer}>
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default Blog;
