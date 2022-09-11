
import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Profile() {
  const [user, setUser] = useState({});
  let { id } = useParams();
  axios
    .get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => setUser(res.data))
    .catch((e) => console.log(e));
  return (
    <div className="p-5 text-center fs-4 my-5 rounded container alert-dark">
      <h1>Hello from Profile</h1>
      <p>Welcome {user.name}</p>
      <p>Your id : {user.id}</p>
      <p>Your Usename is: {user.username}</p>
      <p>Your email is: {user.email}</p>
    </div>
  );
}
