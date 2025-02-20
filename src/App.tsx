import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Download from './pages/Download'
import Photobooth from './pages/PhotoBooth'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/download" element={<Download />} />
          <Route path="/photobooth" element={<Photobooth />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
