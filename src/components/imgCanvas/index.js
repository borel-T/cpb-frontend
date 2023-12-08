import React, { useRef, useEffect } from "react";

const ImageCanvas = ({ src = "" }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const img = new Image();

    img.onload = () => {
      // Draw the image on the canvas once it's loaded
      // context.drawImage(img, 10, 10, 180, 180);

      // Clear the canvas and draw the image
      context.clearRect(0, 0, canvas.width, canvas.height);

      const maxWidth = 320;
      const maxHeight = 200;

      let width = img.width;
      let height = img.height;

      // Resize the image to fit within the specified dimensions
      if (width > maxWidth) {
        height *= maxWidth / width;
        width = maxWidth;
      }

      if (height > maxHeight) {
        width *= maxHeight / height;
        height = maxHeight;
      }

      canvas.width = width;
      canvas.height = height;

      context.drawImage(img, 0, 0, width, height);
    };

    // Replace 'your-image-path.jpg' with the path to your image
    img.src = src;
  }, []);

  return <canvas className="image-canvas" ref={canvasRef} />;
};

export default ImageCanvas;
