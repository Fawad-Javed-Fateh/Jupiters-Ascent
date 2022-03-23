import logo from './logo.svg';
import './App.css';
import UploadForm  from './FileUpload';
import Home from './Home';
import {BrowserRouter  as Router,Route,Routes} from 'react-router-dom'
import Footer from './footer';
import Navbar from './navbar';
import Singleuser from './singleuser';
import Batchuser from './batchuser';
import Hogwash from './hogwash';
function App() {
  return (
    <div className="App">
     <Router>
       <Routes>
         <Route path='/' element={<Hogwash />}/>
         <Route path='/singleuser' element={<Singleuser/>}/>
         <Route path='/batchuser' element={<Batchuser/>}/>
       </Routes>
      
     </Router>
     
    </div>
  );
}

export default App;
