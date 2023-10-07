import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import QCM from './pages/mainQcm'

function App() {
  return (
    <BrowserRouter basename='/QCM'>
      <div>
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/ilQCM' element={<QCM />} />
        </Routes>
      </div>
    </BrowserRouter >
  )
}

export default App;
