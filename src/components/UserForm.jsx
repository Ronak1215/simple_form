import React, { useState } from "react";

const UserForm = ({ sendData }) => {
  const [user, setUser] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const newUser = { name, email };
    const updatedUsers = [...user, newUser];

    setUser(updatedUsers); // ✅ update state
    sendData(updatedUsers);
    setName("");
    setEmail("");
  };

  return (
    <div className="w-96 m-auto flex items-center justify-center mt-5 gap-4 p-2 border border-gray-400 rounded-sm">
      <form className="w-96 p-2" onSubmit={submit}>
        <input
          required
          className="w-full border border-gray-400 rounded-sm h-8 outline-none px-2"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          required
          className="w-full border border-gray-400 rounded-sm mt-2 h-8 outline-none px-2"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <button
          className="w-full mt-2 bg-blue-700 text-white h-8 rounded-sm "
          type="submit"
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default UserForm;
