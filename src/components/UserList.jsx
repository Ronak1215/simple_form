import React, { useCallback, useEffect, useRef, useState } from "react";

const UserList = ({ userData }) => {
  // console.log(userData)
  const bottomRef = useRef(null);
  const [search, setSearch] = useState("");
  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [userData]);

  const domainCounts = userData.reduce((acc, user) => {
    const domain = user.email.split("@")[1];
    acc[domain] = (acc[domain] || 0) + 1;
    return acc;
  }, {});

  return (
    <>
      <p className="text-center font-semibold mt-4">
        Total Users: {userData.length}
      </p>
      {Object.entries(domainCounts).map(([domain, count]) => (
        <p key={domain} className="text-center text-sm">
          {domain}: {count}
        </p>
      ))}
      <input
        className="w-96 m-auto border border-gray-400 rounded-sm h-8 outline-none px-2"
        type="text"
        onChange={useCallback((e) => setSearch(e.target.value), [])}
        value={search}
        placeholder="SearchUser"
      />
      {userData
        .filter((user) => user.name.toLowerCase().includes(search.toLowerCase()))
        .map((user, index) => (
          <div
            key={index}
            className="w-96 m-auto p-4 mt-5 border border-gray-400 rounded-sm"
          >
            <p>
              <span className="font-semibold">Name: </span>
              {user.name}
            </p>
            <p>
              <span className="font-semibold">Email: </span>
              {user.email}
            </p>
          </div>
        ))}
      {/* {userData.length > 0 && search.length === 0 && (
        <p className="text-center text-gray-500">No users found.</p>
      )} */}

      <div ref={bottomRef}></div>
    </>
  );
};

export default UserList;
