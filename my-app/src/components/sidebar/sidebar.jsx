import React from 'react';
import BtnAddCategory from "../btnAddCategory/btnAddCategory";
import ListCategory from "../listCategory/listCategory";
import styles from './Sidebar.module.css'
import {Outlet} from 'react-router-dom'
import Contacts from "../contacts/contacts";

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebar__nav}>
                <BtnAddCategory/>
                <ListCategory/>
            </div>

            <Contacts/>
            <Outlet/>
        </div>
    );
};

export default Sidebar;