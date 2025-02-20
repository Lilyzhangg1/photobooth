import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Download from './pages/Download'
import Photobooth from './pages/PhotoBooth'
import VideoBooth from './components/VideoBooth'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/download" element={<Download />} />
          <Route path="/photobooth" element={<Photobooth />} />
          <Route path="/room/:roomId" element={<VideoBooth />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
