import React from 'react';
import styles from './Category.module.css'
import {NavLink} from "react-router-dom";

const activeClass = ({isActive, isPending}) => isActive ? styles.active : isPending ? styles.loading : ''


const Category = ({text, contact}) => {
console.log('contact.id', contact.id)
    return (
        <NavLink
            className={`${styles.item} ${activeClass}`}
            to={`contacts/${contact.id}`}
        >
            {text}
        </NavLink>
    );
};

export default Category;