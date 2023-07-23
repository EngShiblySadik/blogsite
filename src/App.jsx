import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Mainpage from './page/Mainpage'
import Secondpage from './page/Secondpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Mainpage/>}/>
      <Route path='/secoondPage' element={<Secondpage/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
