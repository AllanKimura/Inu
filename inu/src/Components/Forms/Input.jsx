import React from 'react'
import styles from './Input.module.css';

const Input = ({ label, type, name}) => {
  return (
    <div>
        <label htmlFor={name}>{label}</label>
        <input className={styles.input} type={type} >Input</input>
    </div>
  )
}

export default Input