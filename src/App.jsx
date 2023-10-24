import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import { AppProvider } from './AppContext';
import AddFurniture from './components/AddFurniture';
import FurnitureList from './components/FurnitureList';
// import ManageFuniture from './components/ManageFurniture';
// import UpdateFuniture from './components/UpdateFuniture';
import ManageFurniture from './components/ManageFurniture';
import FurnitureDetails from './components/FurnitureDetails';
import UpdateFurniture from './components/UpdateFurniture';





function App() {
  return (
    <div>

      <BrowserRouter>
        <AppProvider>
        {/* <AnimatePresence> */}
             
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/addfurniture' element={<AddFurniture />} />
            <Route path='/furniturelist' element={<FurnitureList />} />
            <Route path='/managefurniture' element={<ManageFurniture />} />
            {/* <Route path='/updatefurniture' element={<UpdateFuniture />} /> */}
            <Route path='/furnituredetails/:id' element={<FurnitureDetails />} />
            <Route path='/updatefurniture/:id' element={<UpdateFurniture />} />
          </Routes>
          {/* </AnimatePresence> */}
        </AppProvider>
      </BrowserRouter>
    </div>

  )
}

export default App;
