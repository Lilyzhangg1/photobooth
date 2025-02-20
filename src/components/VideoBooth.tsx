import { useEffect, useRef, useState } from "react"
import Peer from "peerjs"

const VideoBooth = () => {
  const [peers, setPeers] = useState<{ [id: string]: MediaStream }>({})
  const myVideoRef = useRef<HTMLVideoElement>(null)
  const myPeer = useRef<Peer | null>(null)

  useEffect(() => {
    const startVideo = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false })

      if (myVideoRef.current) {
        myVideoRef.current.srcObject = stream
      }

      myPeer.current = new Peer() // Create a unique ID for this user

      myPeer.current.on("open", (id) => {
        console.log("My peer ID:", id)
      })

      myPeer.current.on("call", (call) => {
        call.answer(stream) // Answer incoming calls with our video stream

        call.on("stream", (remoteStream) => {
          setPeers((prev) => ({ ...prev, [call.peer]: remoteStream }))
        })
      })
    }

    startVideo()
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-2xl font-bold mb-4">Multi-User Photo Booth</h1>
      <div className="flex gap-4">
        {/* Our Video */}
        <video ref={myVideoRef} autoPlay playsInline className="w-64 h-48 border rounded-lg shadow-lg" />
        
        {/* Other Users */}
        {Object.values(peers).map((stream, index) => (
          <video key={index} autoPlay playsInline ref={(video) => { if (video) video.srcObject = stream }} className="w-64 h-48 border rounded-lg shadow-lg" />
        ))}
      </div>
    </div>
  )
}

export default VideoBooth
