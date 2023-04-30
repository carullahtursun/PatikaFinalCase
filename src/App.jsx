
import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Details from './pages/Details'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  const [search, setSearch] = useState('')
  console.log(search);
useEffect(()=>{
  setSearch('')
},[])
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