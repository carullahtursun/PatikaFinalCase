/* import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Details from './pages/Details'
import Navbar from './layout/Navbar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  const [search, setSearch] = useState('')
  console.log(search);

  return (
    <>
      <div className="App">
        
        <Routes>
          {/* <Route path="/" element={<Home search={search} />} /> */}
          <Route path="/" element={<Home setSearch={setSearch} search={search} />}  >
          </Route>

          <Route path="/:id" element={<Details />} />
        </Routes>
        <ToastContainer />
      </div>
    </>
  )
}

export default App