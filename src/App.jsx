import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import QCM from './pages/mainQcm'

function App() {
  return (
    <BrowserRouter  >
      <div>
        <Routes>
          <Route path='QCM/' element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='QCM/ilQCM' element={<QCM />} />
          <Route path='/ilQCM' element={<QCM />} />
          <Route path='ilQCM' element={<QCM />} />
        </Routes>
      </div>
    </BrowserRouter >
  )
}

export default App;
