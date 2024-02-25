import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Register from './pages/Register'
import ReleasingForm from './pages/ReleasingForm'
import EnquireForm from './pages/EnquireForm'
import ScrollToTop from './components/ScrollToTop'

function App() {
  ScrollToTop();

  return (
    <>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="register" element={ <Register/> } />
        <Route path="pet-release" element={ <ReleasingForm/> } />
        <Route path="pet-enquire" element={ <EnquireForm/> } />
      </Routes>
    </>
  )
}

export default App
