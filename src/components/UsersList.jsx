import styles from './UsersList.module.css'
const UsersList = props =>{
  
    return (
        <div className={styles.container}>
          <ul>
            {props.users.map(user => (
              <li>
               props.user {user.name}, ({user.age} years old)
              </li>
            ))}
          </ul>
        </div>
      );
    };
    
    export default UsersList;