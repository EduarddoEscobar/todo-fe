import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import Home from '../Home/Home';
import Login from '../Forms/Login/Login';

function App() {
  return (
    <Router>

      <header>
        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='login'>Login</NavLink>
          <NavLink to='register'>Register</NavLink>
          <NavLink to='contact'>Contact</NavLink>
        </nav>
      </header>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<h1>Register</h1>}/>
        <Route path='/contact' element={<h1>Contact</h1>}/>
      </Routes>

    </Router>
  );
}

export default App;
