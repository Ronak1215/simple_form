import React from "react";

const UserList = ({ userData }) => {
  return (
    <>
     {
        userData.map((user, index) => (
          <div key={index} className="w-96 m-auto p-4 mt-5 border border-gray-400 rounded-sm">
            <p><span className="font-semibold">Name: </span>{user.name}</p>
            <p><span className="font-semibold">Email: </span>{user.email}</p>
          </div>
        ))
      }
    </>
    
  );
};

export default UserList;
