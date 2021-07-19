import { Admin, Resource } from 'react-admin';
import dataProvider from './dataProvider';
import authProvider from './authProvider';
import UsersList from './components/Users/List';
import UsersEdit from './components/Users/Edit';

function App() {
  return (
    <div className="App">
      <Admin authProvider={authProvider} dataProvider={dataProvider}>
        <Resource name="users" list={UsersList} edit={UsersEdit} />
      </Admin>
    </div>
  );
}

export default App;
