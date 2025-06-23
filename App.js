//import './App.css';
import Login from './Login';
import UserList from './UserList';
import React  from 'react';
import Dynamic from './Dynamic';
import StudentMarks from './StudentMarks';
//import Home from './Home';
import Navbar from './Navbar';
//import Aboutus from './Aboutus';
//import Contactus from './Contactus';
import { Route, Routes } from 'react-router-dom';
import Contactus from './components/routespath/Contactus';
import Aboutus from './components/routespath/Aboutus';
import Home from './components/routespath/Home';
/*function App() {
  return (
    <div>
      <h1>Form Handling</h1>
       <Dynamic />  
      <Login />
      <UserList />
      <StudentMarks/>
    </div>
  );
}
export default App;*/

function App() {
  return (
    <div className="App">
      <h1>Learning React Routers</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
      </Routes>
    </div>
  )
}

export default App;
