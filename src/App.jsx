import { useState } from "react";
import "./App.css";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

function App() {
  const [userData, setUserData] = useState([])

  function handleDataForm(data) {
    setUserData((prev)=>[...prev, data]);
  }

  return (
    <>
      <h2 className="text-center text-5xl font-semibold mt-8">User Form</h2>
      <UserForm sendData={handleDataForm}/>
      <h2 className="text-center text-5xl font-semibold mt-8">User List</h2>
      <UserList userData={userData}/>
    </>
  );
}

export default App;
