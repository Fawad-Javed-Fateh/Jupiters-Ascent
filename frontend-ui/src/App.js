import logo from './logo.svg';
import './App.css';
import UploadForm  from './FileUpload';
import Home from './Home';
import {BrowserRouter  as Router,Route,Routes} from 'react-router-dom'
import Footer from './footer';
import Navbar from './navbar';
import Singleuser from './singleuser';
function App() {
  return (
    <div className="App">
     <Router>
       <Routes>
         <Route path='/' element={<Home />}/>
         <Route path='/singleuser' element={<Singleuser/>}/>
       </Routes>
    <Footer/>
     </Router>
     
    </div>
  );
}

export default App;
