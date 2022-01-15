import React, { useEffect, useState } from 'react';
import { Button, Row, Col, Input } from "antd";
import { Formik } from "formik";
import styles from './style.module.scss';
import CommingSoon from '../CommingSoon';

const ContactUsBg = ({ children }) => {
  return (
    <div className={styles.WrapContactUsBg}>
      <div className={styles.WrapContent}>
        {children}
      </div>
    </div>
  );
}

export default ContactUsBg;