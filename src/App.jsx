import { useState } from 'react'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'


function App() {

  return (
    <>

    <Header />
    <Home />
    <Footer />
    
    </>
  )
}

export default App
