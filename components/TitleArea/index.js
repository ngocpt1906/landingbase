import React from 'react';
import styles from './style.module.scss';

const TitleArea = ({ text }) => {
  return (
    <div className={styles.WrapTitleArea}>{text}</div>
  );
}

export default TitleArea;