import React from "react";
import styles from './Addusers.module.css'
const AddUsers = (props)=>{

    return (<div className={styles.container}>
        <label htmlFor="name">User name</label>
        <input type="text"  id="name"  />

        <label htmlFor="age">User age</label>
        <input type="number"  id="age" />


        <button>Add user!</button>
    </div>)
}

export default AddUsers;