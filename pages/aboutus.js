import Head from 'next/head'
import AboutUsBlock from '../components/AboutUsBlock'
import CommingSoon from '../components/CommingSoon'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import HeadBlock from '../components/HeadBlock'
import HeaderMenu from '../components/HeaderMenu'
import RecruiterCandidate from '../components/RecruiterCandidate'
import SliderBlock from '../components/SliderBlock'
import styles from '../styles/Home.module.css'
import { wrapper } from "../stores";
import { useDispatch, useSelector } from "react-redux";
import { StoreContext } from "../stores/context";
import { useContext, useEffect } from 'react';
import BlogsGrid from '../components/BlogsGrid'
import { Button } from 'antd'
import ContactUsBg from '../components/ContactUsBg'
import TitleArea from '../components/TitleArea'

const Blog = ({ testdata }) => {
  const { aboutUs, getAboutUs, sendEmail, emailResponse, emailLoading } = useContext(StoreContext);
  useEffect(() => {
    getAboutUs();
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Tech Search | Contact us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <HeaderMenu></HeaderMenu>
        <HeadBlock compact={true}></HeadBlock>
        <TitleArea text={"About Us"}></TitleArea>
        <AboutUsBlock data={aboutUs}></AboutUsBlock>
        <ContactForm onSubmit={sendEmail} emailResponse={emailResponse} loading={emailLoading}></ContactForm>
      </main>
      <footer className={styles.footer}>
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default Blog;
