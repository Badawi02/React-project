import React, { useContext } from 'react'
import { Container, Nav, Navbar} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { countercontext } from './Context'

export function NAV() {
  let {count} = useContext(countercontext);
  return (
    <div>
    <Navbar className='mynav' bg="light" expand="lg sm">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
                <NavLink className="nav-link" to="/Home">Home</ NavLink>
                <NavLink className="nav-link" to="/Users">Users</ NavLink>
                <NavLink className="nav-link" to="/Profile">Profile</ NavLink>
                <NavLink className="nav-link" to="/About">About</ NavLink>
                <NavLink className="nav-link" to="/counter">Counter</ NavLink>
                <NavLink className="nav-link" to="">count({count})</ NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
  
}
