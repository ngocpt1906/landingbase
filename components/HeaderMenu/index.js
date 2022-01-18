import React, { useState } from 'react';
import { Drawer } from "antd";
import { Menu } from 'antd';
import Link from 'next/link';
import { Routes } from "../../Routes";
import {
  MenuOutlined
} from '@ant-design/icons';
import styles from './style.module.scss';
import useRouterLink from '../../CustomHooks/useRouterLink';

const HeaderMenu = () => {
  const [visible, setVisible] = useState(false);
  const toggleMenu = () => {
    setVisible(!visible);
  }
  return (
    <div className={styles.WrapHeaderMenu}>
      <div className={styles.HeaderMenuInside}>
        <img src="/logo.png"
          alt="Logo"
          className={styles.Image}
        ></img>
        <Menu theme="light" mode="horizontal" className={styles.MenuPC}>
          {Routes?.map(e => <Menu.Item key={e.key} hidden={e.hiddenFromMenu}><Link href={useRouterLink(e.path)}>{e.name}</Link></Menu.Item>)}
        </Menu>
        <div className={styles.MenuMobile}>
          <MenuOutlined onClick={toggleMenu} />
          <Drawer
            title={<img src="/logo.png"
              alt="Logo"
              className={styles.Image}
            ></img>}
            width="100%"
            onClose={() => setVisible(false)}
            visible={visible}
            className={styles.WrapDrawer}
          >
            <Menu theme="light" mode="vertical">
              {Routes?.map(e => <Menu.Item key={e.key} hidden={e.hiddenFromMenu}><Link href={useRouterLink(e.path)}>{e.name}</Link></Menu.Item>)}
            </Menu>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default HeaderMenu;
