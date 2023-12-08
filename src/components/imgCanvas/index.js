import React, { useRef, useEffect } from "react";

const ImageCanvas = ({ src = "" }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const img = new Image();

    img.onload = () => {
      // Draw the image on the canvas once it's loaded
      context.drawImage(img, 10, 10, 180, 180);
    };

    // Replace 'your-image-path.jpg' with the path to your image
    img.src = src;
  }, []);

  return <canvas className="image-canvas" ref={canvasRef} />;
};

export default ImageCanvas;
