import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home'
import QCM from './pages/mainQcm'

function App() {
  return (
    <BrowserRouter >
      <div>
        <Routes>
          <Route index element={<Home />} />
          <Route path='QCM' element={<QCM />} />
        </Routes>
      </div>
    </BrowserRouter >
  )
}

export default App;
