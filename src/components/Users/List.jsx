import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  EmailField,
} from 'react-admin';

const UsersList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="firstname" label="Prénom" />
        <TextField source="lastname" label="Nom" />
        <EmailField source="email" />
        <TextField source="mobile" />
        <TextField source="admin" label="Admin" />
        <EditButton basePath="/teachers" />
        <DeleteButton basePath="/teachers" />
      </Datagrid>
    </List>
  );
};

export default UsersList;
