import React from 'react';
import styles from './style.module.scss';
import { getFeatureImageSource } from '../../utils/Helper';
import { Row, Col } from "antd";
import Link from 'next/link';
import useRouterLink from '../../CustomHooks/useRouterLink';

const BlogsGrid = ({ data }) => {
  return (
    <Row gutter={16} className={styles.WrapBlogsGrid}>
      {data.map((e, index) => <Col id={"blog-" + e.id} xs={24} key={index} className={styles.BlogBlock}>
        <Link href={useRouterLink("blog_detail",{id:e.id})}>
          <Row style={{width:'100%'}}>
            <Col xs={8}>
              <img src={getFeatureImageSource(e)} />
            </Col>
            <Col xs={24} sm={16}>
              <div className={styles.Content}>
                <h2 dangerouslySetInnerHTML={{ __html: e.title.rendered }}></h2>
                <div className={styles.ContentText} dangerouslySetInnerHTML={{ __html: e.content.rendered }}></div>
                <div className={styles.ContentDate}>{e.date}</div>
              </div>
            </Col>
          </Row>
        </Link>
      </Col>)}
    </Row>
  );
}

export default BlogsGrid;