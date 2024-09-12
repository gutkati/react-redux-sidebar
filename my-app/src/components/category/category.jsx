import React from 'react';
import styles from './Category.module.css'
import {NavLink} from "react-router-dom";


const Category = ({text, contact}) => {
    console.log('contact.id', contact.id)
    return (

            <NavLink
                className={({isActive}) => `${styles.item} ${isActive ? styles.active : ""}`}
                to={`contacts/${contact.id}`}
            >
                {text}
            </NavLink>
    );
};

export default Category;