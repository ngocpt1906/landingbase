import React, { useEffect, useState } from 'react';
import { Button, Table, Drawer, Input } from "antd";
import {
  EditOutlined,
  DeleteOutlined
} from '@ant-design/icons';
import styles from './style.module.scss';
import HeaderMenu from '../HeaderMenu';

const Footer = () => {
  return (
    <div className={styles.WrapFooter}>
      <div className={styles.FooterContent}>
        <div className={styles.Branch}>2021 - Tech Search - Melbourne</div>
      </div>
    </div>
  );
}

export default Footer;