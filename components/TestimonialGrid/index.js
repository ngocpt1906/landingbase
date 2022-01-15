import React from 'react';
import styles from './style.module.scss';
import { getFeatureImageSource } from '../../utils/Helper';
import { Row, Col } from "antd";
import Link from 'next/link';

const TestimonialGrid = ({ data }) => {
  return (
    <Row gutter={16} className={styles.WrapTestimonialGrid}>
      {data.map((e, index) => <Col id={"blog-" + e.id} xs={24} key={index} className={styles.BlogBlock}>
          <Row style={{width:"100%"}}>
            <Col xs={24}>
              <div className={styles.Content}>
                <div className={styles.ContentText} dangerouslySetInnerHTML={{ __html: e.content.rendered }}></div>
                <div className={styles.Title} dangerouslySetInnerHTML={{ __html: '- '+e.title.rendered+' -' }}></div>
              </div>
            </Col>
          </Row>
      </Col>)}
    </Row>
  );
}

export default TestimonialGrid;