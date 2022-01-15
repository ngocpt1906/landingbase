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
import { useContext, useEffect } from 'react'
import LatestBlog from '../components/LatestBlog'
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';

const Home = () => {
  const { emailLoading, sendEmail, emailResponse, listItem, getAll, slogan, getSlogan, headLines, getHeadLines, testimonial, getTestimonial, } = useContext(StoreContext);
  useEffect(() => {
    getSlogan();
    getAll();
    getHeadLines();
    getTestimonial();
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Tech Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <HeaderMenu></HeaderMenu>
        <HeadBlock text={slogan?.title?.rendered}></HeadBlock>
        <Bounce left>
          <RecruiterCandidate data={headLines}></RecruiterCandidate>
        </Bounce>
        <Zoom>
          <LatestBlog data={listItem}></LatestBlog>
        </Zoom>
        <Fade>
          <SliderBlock data={testimonial}></SliderBlock>
        </Fade>
        <ContactForm onSubmit={sendEmail} emailResponse={emailResponse} loading={emailLoading}></ContactForm>
      </main>
      <footer className={styles.footer}>
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default Home;
