import React from 'react';
import styles from './Category.module.css'

const Category = ({text}) => {
    return (
        <li className={styles.item}>
            {text}
        </li>
    );
};

export default Category;