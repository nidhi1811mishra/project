import{BrowserRouter,Link, Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup'


function App() {
  return (
  <div>
  
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path ='./' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  </div>
    
  )
}

export default App;
