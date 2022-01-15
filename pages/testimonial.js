import Head from 'next/head'
import AboutUsBlock from '../components/AboutUsBlock'
import CommingSoon from '../components/CommingSoon'
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
import TestimonialGrid from '../components/TestimonialGrid'
import { Button } from 'antd'
import TitleArea from '../components/TitleArea'

const Testimonial = ({ testdata }) => {
  const { testimonial, getSlogan, slogan, getTestimonial } = useContext(StoreContext);
  useEffect(() => {
    getSlogan();
    getTestimonial();
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Tech Search | Blogs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <HeaderMenu></HeaderMenu>
        <HeadBlock compact={true}></HeadBlock>
        <TitleArea text={"Testimonial"}></TitleArea>
        <TestimonialGrid data={testimonial}></TestimonialGrid>
      </main>
      <footer className={styles.footer}>
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default Testimonial;
