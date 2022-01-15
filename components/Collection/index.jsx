import { Col, Row } from 'antd';
import React from 'react';
import styles from './style.module.scss';
import { StarOutlined, StarFilled, ArrowRightOutlined } from '@ant-design/icons';
import Link from 'next/link';


const Collection = ({ data }) => {

  const iconList = [
    <StarOutlined></StarOutlined>,
    <StarOutlined></StarOutlined>,
    <StarOutlined></StarOutlined>,
    <StarOutlined></StarOutlined>,
    <StarOutlined></StarOutlined>,
    <StarOutlined></StarOutlined>,
  ]

  return (
    <div className={styles.WrapCollection}>
      <Row gutter={48}>
        {data.map((e, index) => {
          return <Col xs={24} md={8} key={index}>
            {iconList[index]}
            <div>
              <div className={styles.title}>{e.title.rendered}</div>
              <div className={styles.content} dangerouslySetInnerHTML={{ __html: e.content.rendered }}>
              </div>
              <Link href={"/service_detail?id="+e.id}><div className={styles.link}>Learn more...</div></Link>
            </div>
          </Col>
        })}
      </Row>
    </div>
  );
}

export default Collection;