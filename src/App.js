import { useState } from 'react';
import './App.css';
import AddUsers from './components/AddUsers';
import UsersList from './components/UsersList';

function App() {
  const [users,setUsers] = useState([])

  const addUser = (uName,uAge)=>{
    setUsers(previous=>{
      return[...previous,{ 'name': uName, 'age': uAge}]
    })
  }

  return (
    <div className="App">
    <AddUsers addUser={addUser}/>
    <UsersList users={users} />
    </div>
  );
}

export default App;
