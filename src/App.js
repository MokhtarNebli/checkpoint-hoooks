
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from 'react-bootstrap';
import NavbarComp from './Components/NavbarComp';
import Card from "./Components/Card";

function App() {
  return (
    <div className="App">
<NavbarComp/>
<Card/>
 
    </div>
  );
}

export default App;
