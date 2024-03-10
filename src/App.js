import './App.css';
// import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Home from './pages/Home';
import Menu from './pages/Menu';
import TypeCompte from './pages/TypeCompte';
import Register from "./pages/register/Register";
import Header from './pages/Header';
import Posts from './pages/Posts';
function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
    <Route path="/"  element={<Home/>}    />
    <Route path="/menu"  element={<Menu/>}    />
    <Route path="/Register"  element={<Register/>}    />
    <Route path="/TypeCompte"  element={<TypeCompte/>}    />
    <Route path="/Header"  element={<Header/>}    />
    <Route path="/Posts"  element={<Posts/>}    />
    </Routes>
    
    </Router>
    </div>
  );
}

export default App;
