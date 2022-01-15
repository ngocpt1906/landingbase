import React from 'react';
import { Row, Col, Button } from 'antd';
import styles from './style.module.scss';
import Link from 'next/link';
import { getFeatureImageSource } from '../../utils/Helper';
import useRouterLink from '../../CustomHooks/useRouterLink';

const RecruiterCandidate = ({ data }) => {
  return <div className={styles.WrapRecruiterCandidate}>
    {data?.map((e, index) => <Row key={index} style={{ flexDirection: (index % 2 === 1) ? "row-reverse" : "row", marginBottom: "80px" }}>
      <Col xs={24} sm={24} md={14}>
        <img src={getFeatureImageSource(e)} className={styles.Image} />
      </Col>
      <Col xs={24} sm={24} md={10}>
        <div className={styles.WrapContent}>
          <Link href={useRouterLink((index % 2 === 1) ?'services':'aboutus')}><div className={styles.Title}>{e.title.rendered}</div></Link>
          <Link href={useRouterLink((index % 2 === 1) ?'services':'aboutus')}><div className={styles.Text} dangerouslySetInnerHTML={{ __html: e.content.rendered }}></div></Link>
          <Link href={useRouterLink('contactus')}>
            <Button>Contact A recruiter</Button>
          </Link>
        </div>
      </Col>
    </Row>)}
  </div>
}

export default RecruiterCandidate;