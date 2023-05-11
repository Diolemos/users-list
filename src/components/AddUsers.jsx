import React, { useState } from "react";
import styles from './Addusers.module.css'
const AddUsers = (props)=>{
    const [username, setUsername] = useState('')
  const [userAge, setUserAge] = useState('')
    const onSubmitHandler = (e)=>{
        e.preventDefault()
    }

    const onChangeUsernameHandle = (e)=>{
        setUsername(e.target.value)
    }

    const OnChangeUserAgeHandle = (e)=>{
        setUserAge(e.target.value)
    }

    return (<div className={styles.container}>
        <label htmlFor="name">User name</label>
        <input type="text" value={username} onChange={onChangeUsernameHandle}  id="name"  />

        <label htmlFor="age">User age</label>
        <input type="number" value={userAge} onChange={OnChangeUserAgeHandle}  id="age" />


        <button onSubmit={onSubmitHandler}>Add user!</button>
    </div>)
}

export default AddUsers;