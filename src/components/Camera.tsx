import React, { useRef } from "react";
import Webcam from "react-webcam";

const Camera: React.FC = () => {
  const webcamRef = useRef(null)

  return (
      <Webcam 
        audio={false}
        mirrored={true}
        ref={webcamRef} 
        screenshotFormat="image/jpeg"
        style={{ width: "50%"}}
      />
  )
}

export default Camera
