import React, { useEffect, useState } from 'react';
import { Row, Col, Button, Table, Drawer, Input } from "antd";
import {
  EditOutlined,
  DeleteOutlined
} from '@ant-design/icons';
import styles from './style.module.scss';
import HeaderMenu from '../HeaderMenu';

const AboutUsBlock = () => {
  return (
    <div className={styles.WrapAboutUsBlock}>
      <Row>
        <Col xs={24} md={6} className={styles.PersonBlock}>
          <img src="/person.png" className={styles.PersonImage} />
          <div className={styles.Text}>I'm passionate about connecting great people with equally great companies.</div>
          <div className={styles.Name}>– Jeff Bonnin</div>
        </Col>
        <Col xs={24} md={18} className={styles.ContentBlock}>
          <div className={styles.Title}>About Us</div>
          <div className={styles.ContentText}>
            <p>TechSearch is a personalized and customized Recruitment Consultancy that was born out of a love for the purity of the Recruitment Process.
            Its founder and Managing Consultant Jeff Bonnin, has over 15 years of Recruitment experience across North America and APAC.</p>
            <p>He has focused mainly in the technology space and is passionate about connecting great people with equally great companies.
            He derives a sense of purpose in knowing he has helped solve critical business issues for organizations while always being guided by a sense of wanting to do the right thing.</p>
            <p>However, through his experience he has sometimes seen the business objectives of Recruitment Agencies and their aim to make a profit have a negative impact on the recruitment process or the recruitment fee be too prohibitive for a company to afford.
            TechSearch was founded with the desire to put solving your Recruitment needs at the core of the relationship.</p>
          </div>
          <Button>About Us</Button>
        </Col>
      </Row>
    </div>
  );
}

export default AboutUsBlock;