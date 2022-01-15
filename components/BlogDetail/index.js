import React from 'react';
import styles from './style.module.scss';
import { getFeatureImageSource } from '../../utils/Helper';
import { Row, Col } from "antd";
const BlogDetail = ({ data }) => {
  return data && <div className={styles.WrapBlogDetail}>
    <img className={styles.HeadImage} src={getFeatureImageSource(data)} />
    <div className={styles.Content}>
      <h2 dangerouslySetInnerHTML={{ __html: data.title.rendered }}></h2>
      <div className={styles.ContentDate}>{data.date}</div>
    </div>
    <div className={styles.ContentText} dangerouslySetInnerHTML={{ __html: data.content.rendered }}></div>
  </div>
}

export default BlogDetail;