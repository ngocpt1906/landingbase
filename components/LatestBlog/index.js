import React from 'react';
import styles from './style.module.scss';
import { getFeatureImageSource } from '../../utils/Helper';
import { Row, Col } from "antd";
import useRouterLink from '../../CustomHooks/useRouterLink';
import Link from 'next/link';

const LatestBlog = ({ data }) => {
  return (
    <Row gutter={16} className={styles.WrapLatestBlog}>
      <Col span={24}><div className={styles.Title}>Latest Blog</div></Col>
      {data?.slice(0, 4).map((e, index) => <Col id={"blog-" + e.id} xs={24} sm={12} md={12} key={index} className={styles.BlogBlock}>
        <Link href={useRouterLink("blog_detail",{id:e.id})}>
          <Row>
            <Col xs={16}>
              <img src={getFeatureImageSource(e)} />
            </Col>
            <Col xs={24}>
              <div className={styles.Content}>
                <h2 dangerouslySetInnerHTML={{ __html: e.title.rendered }}></h2>
                <div className={styles.ContentText} dangerouslySetInnerHTML={{ __html: e.content.rendered }}></div>
                <div className={styles.ContentDate}>{e.date}</div>
              </div>
            </Col>
          </Row>
        </Link>
      </Col>)}
      <Col span={24} className={styles.ViewMore}><Link href="/blogs">View more ...</Link></Col>
    </Row>
  );
}

export default LatestBlog;