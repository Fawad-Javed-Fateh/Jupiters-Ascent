import logo from './logo.svg';
import './App.css';
import UploadForm  from './FileUpload';
import Home from './Home';
import {BrowserRouter  as Router,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <UploadForm/>
      <Home/>
    </div>
  );
}

export default App;
