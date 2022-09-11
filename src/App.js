
import './App.css';

import { NAV } from './func_components/NAV.jsx';
import Counter  from './func_components/Counter.jsx';
import { Myfooter } from './func_components/Myfooter.jsx';
import Home from './func_components/Home';
import Users from './func_components/Users';
import About from './func_components/About';
import Error from './func_components/Error';
import { Navigate, Route, Routes } from 'react-router-dom';
import Company from './func_components/Company';
import Lib from './func_components/Lib';
import Profile from './func_components/Profile';



function App() {
  return (
      <div className="App">
        <nav className='navbar'>
          <NAV></NAV>
        </nav>
        <Routes>
          <Route path='/home'      element={<Home />} />
          <Route path='/'          element={<Navigate to="/home" />} />
          <Route path='/Users'     element={<Users />} />
          <Route path='/counter'     element={<Counter />} />
          <Route path='/users/:id' element={<Profile />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/about'     element={<About />} >
            <Route path='lib'     element={<Lib />} />
            <Route path='company' element={<Company />} />
          </Route>
          <Route path='*'          element={<Error />} />
        </Routes>
        <div className='footer'>
        <Myfooter></Myfooter>
        </div>
      </div>
  );
};

export default App;
