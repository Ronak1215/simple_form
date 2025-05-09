import React, { useEffect, useRef, useState } from "react";

const UserForm = ({ sendData }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState({
    name: "",
    email: "",
  });

  const nameInputRef = useRef(null);
  useEffect(() => {
    if (message) {
      const timeout = setTimeout(() => {
        setMessage("");
      }, 2000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [message]);

  useEffect(() => {
    nameInputRef.current.focus();
  }, []);

  // const validateForm = () =>{
  //   let isValid = true;
  //   const newErrors = { name:"", email:"" }

  //   // check name
  //   if(name.trim().length < 3){
  //     newErrors.name = "Name must be atleast 3 charecters"
  //     isValid = false;
  //   }

  //   // check email
  //   const emailRegex = /^\S+@\S+\.\S+$/;
  //   if(!emailRegex.test(email)){
  //     newErrors.email = "please enter a valid email adderss";
  //     isValid = false
  //   }

  //   setError(newErrors);
  //   return isValid
  // }

  const submit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    const newUser = { name, email };
    setMessage("User added successfully");
    sendData(newUser);
    setName("");
    setEmail("");
  };

  return (
    <>
      {message && <p className="text-green-600 text-center my-2">{message}</p>}
      <div className="w-96 m-auto flex items-center justify-center mt-5 gap-4 p-2 border border-gray-400 rounded-sm">
        <form className="w-96 p-2" onSubmit={submit}>
          <input
            required
            className="w-full border border-gray-400 rounded-sm h-8 outline-none px-2"
            type="text"
            onChange={(e) => {
              const value = e.target.value
              setName(value);
              
              if (name.trim().length < 3) {
                setError((prev)=>({...prev , name:"name must be atleast 3 charecters"}))
              }
              else{
                setError((prev)=>({...prev, name:""}))
              }
            }}
            value={name}
            ref={nameInputRef}
            placeholder="Name"
          />
          {error.name && <p className="text-red-500 text-sm">{error.name}</p>}
          <input
            required
            className="w-full border border-gray-400 rounded-sm mt-2 h-8 outline-none px-2"
            type="email"
            // validation
            onChange={(e) => {
              const value = e.target.value
              setEmail(value);
              const emailRegex = /^\S+@\S+\.\S+$/;
              if (!emailRegex.test(value)) {
                setError((prev)=>({...prev , email:"Enter valid email"}))
              }
              else{
                setError((prev)=>({...prev, email:""}))
              }
            }}
            value={email}
            placeholder="Emali"
          />
          {error.email && <p className="text-red-500 text-sm">{error.email}</p>}
          <button
            className="w-full mt-2 bg-blue-700 text-white h-8 rounded-sm "
            type="submit"
          >
            Add User
          </button>
        </form>
      </div>
    </>
  );
};

export default UserForm;
