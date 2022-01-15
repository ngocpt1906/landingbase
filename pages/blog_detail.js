import Head from 'next/head'
import Footer from '../components/Footer'
import HeaderMenu from '../components/HeaderMenu'
import styles from '../styles/Home.module.css'
import { wrapper } from "../stores";
import { StoreContext } from "../stores/context";
import { useContext, useEffect } from 'react';
import BlogDetail from '../components/BlogDetail';
import HeadBlock from '../components/HeadBlock';
import { useRouter } from 'next/router';

const BlogDetailPage = ({ testdata }) => {

  const { blogDetail, getBlogDetail } = useContext(StoreContext);
  const router = useRouter();
  const id = router.query["id"];

  useEffect(() => {
    if (router.query["id"]) {
      getBlogDetail(id);
    }
  }, [router]);

  return <div className={styles.container}>
    <Head>
      <title>Tech Search | Blogs</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={styles.main}>
      <HeaderMenu></HeaderMenu>
      <HeadBlock compact={true}></HeadBlock>
      {blogDetail && <BlogDetail data={blogDetail}></BlogDetail>}
    </main>
    <footer className={styles.footer}>
      <Footer></Footer>
    </footer>
  </div>
}

export default wrapper.withRedux(BlogDetailPage);
