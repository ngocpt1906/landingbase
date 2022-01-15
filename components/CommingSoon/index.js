import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';
import {
  EditOutlined,
  ToolOutlined
} from '@ant-design/icons';

const CommingSoon = ({ children }) => {
  return (
    <div className={styles.WrapCommingSoon}>
      {children}
      <div className={styles.WrapChild}></div>
      <div className={styles.WrapIcon}>
        <ToolOutlined />
        <div>This area is comming soon ...</div>
      </div>
    </div>
  );
}

export default CommingSoon;