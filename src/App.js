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
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
function App() {/*This function is responsible for setting routing paths in the app */
  /*AUTHOR NAME: Umer Ahmed
      DATE OF GENERATION: 15/5/2022
      DATE OF LAST REVISION: 15/5/2022
      VERSION: 1.1 */
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
