import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


export default function Users() {

  let [users , setusers] = useState([]);

  useEffect( () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then( (reponse) =>{
      setusers(reponse.data);
    }).catch( (error) =>{
        console.log(error);
    })
  },[])


  return (
    <div className='alert alert-primary p-5'>
        <h1>
            Hello from Users
        </h1>
        <div className="container">{console.log(users)}</div>
        <Table striped bordered hover variant="primary">
      <thead>
        <tr>
          <th>USER ID</th>
          <th>Name</th>
          <th>USER NAME</th>
          <th>EMAIL</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>
      
      {React.Children.toArray(users.map( (users,index) => {
          return(
            <tr>
            <td>{users.id}</td>
            <td>{users.name}</td>
            <td>{users.username}</td>
            <td>{users.email}</td>
            <td><NavLink className="nav-link btn btn-warning p-1" to={`/Users/${users.id}`}>Show Details</NavLink></td>
            </tr>
          )
        }))}
      </tbody>
    </Table>
    </div>
  )
}
