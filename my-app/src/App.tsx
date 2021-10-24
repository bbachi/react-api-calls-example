
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header';
import CreateUser from './components/CreateUser';
import DisplayBoard from './components/DisplayBoard';
import { AppService } from './services/app.service';
import { Users } from './components/Users';
import { useState } from 'react';

function App()  {

  const [user, setUser] = useState<any>();
  const [users, setUsers] = useState<any>([]);
  const [numberOfUsers, setNumberOfUsers] = useState<number>(0);

  const appService = new AppService();

  const createUser = async (e: any) => {
    const response = await appService.addUser(user);
    console.log(response);
    setNumberOfUsers(numberOfUsers + 1);
  }

  const getAllUsers = async () => {
    const users = await appService.getUsers();
    setUsers(users);
    setNumberOfUsers(users.length);
  }

  const onChangeForm = (e: any) => {
    let userClone = {...user}
    if (e.target.name === 'firstname') {
      userClone.firstName = e.target.value;
    } else if (e.target.name === 'lastname') {
      userClone.lastName = e.target.value;
    } else if (e.target.name === 'email') {
      userClone.email = e.target.value;
    }
    setUser(userClone);
 }
    
  return (
    <div className="App">
        <Header />
        <div className="container mrgnbtm">
        <div className="row">
          <div className="col-md-8">
              <CreateUser 
                user={user}
                onChangeForm={onChangeForm}
                createUser={createUser}
              />
          </div>
          <div className="col-md-4">
              <DisplayBoard 
                numberOfUsers={numberOfUsers}
                getAllUsers={getAllUsers}
              />
          </div>
        </div>
        <div className="row mrgnbtm">
          <Users users={users}></Users>
        </div>
      </div>
    </div>
  );
  
}

export default App;