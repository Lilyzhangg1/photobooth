import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const [roomId, setRoomId] = useState("")
  const navigate = useNavigate()

  const joinRoom = () => {
    if (roomId.trim()) {
      navigate(`/room/${roomId}`)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4">Join a Photo Booth Room</h1>
      <input
        type="text"
        placeholder="Enter Room ID"
        className="px-4 py-2 rounded-md text-black"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
      />
      <button className="mt-4 px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg transition" onClick={joinRoom}>
        Join Room
      </button>
    </div>
  )
}

export default Home
