import Head from 'next/head'
import Footer from '../components/Footer'
import HeadBlock from '../components/HeadBlock'
import HeaderMenu from '../components/HeaderMenu'
import styles from '../styles/Home.module.css'
import { StoreContext } from "../stores/context";
import { useContext, useEffect } from 'react';
import BlogsGrid from '../components/BlogsGrid'
import { Button } from 'antd'

const Blog = ({ testdata }) => {
  const { page, totalPage, getAll, listItem, getMoreBlog, getSlogan, slogan } = useContext(StoreContext);
  useEffect(() => {
    getAll();
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
        <HeadBlock text={slogan?.title?.rendered}></HeadBlock>
        <BlogsGrid data={listItem}></BlogsGrid>
        {(totalPage > page) && <div style={{ textAlign: "center", width: "100%" ,padding: "24px" }}><Button style={{color:"#0b0b85",fontSize:"24px"}} onClick={getMoreBlog} type="link">Load more</Button></div>}
      </main>
      <footer className={styles.footer}>
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default Blog;
