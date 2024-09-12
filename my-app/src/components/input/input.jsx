import React from 'react';
import styles from './Input.module.css'

const Input = ({name, id, value, onChange}) => {
    return (
        <input
            className={styles.input}
            name={name}
            id={id}
            value={value}
            onChange={onChange}
        />
    );
};

export default Input;