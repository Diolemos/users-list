import React, { useState } from "react";
import styles from './Addusers.module.css'
const AddUsers = (props)=>{
    const [username, setUsername] = useState('')
  const [userAge, setUserAge] = useState('')
    const onSubmitHandler = (e)=>{
        e.preventDefault()
        props.addUser(username,userAge)
        // reset form using two way biding
        setUserAge('')
        setUsername('')
    }

    const onChangeUsernameHandle = (e)=>{
        setUsername(e.target.value)
    }

    const OnChangeUserAgeHandle = (e)=>{
        setUserAge(e.target.value)
    }

    return (<div className={styles.container}>
        <form  onSubmit={onSubmitHandler}>
        <label htmlFor="name">User name</label>
        <input type="text" value={username} onChange={onChangeUsernameHandle}  id="name"  />

        <label htmlFor="age">User age</label>
        <input type="number" value={userAge} onChange={OnChangeUserAgeHandle}  id="age" />


        <button type="submit">Add user!</button>
        </form>
    </div>)
}

export default AddUsers;