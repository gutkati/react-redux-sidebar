import React from 'react';
import BtnAddCategory from "../btnAddCategory/btnAddCategory";
import ListCategory from "../listCategory/listCategory";
import styles from './Sidebar.module.css'

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <BtnAddCategory/>
            <ListCategory/>
        </div>
    );
};

export default Sidebar;