import React, { useState, useEffect } from "react";
import { FaCrosshairs } from "react-icons/fa";

const CursorCustomS = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX + 1, y: e.clientY + 1 });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
    <div style={{ position: 'fixed', left: position.x, top: position.y, zIndex: 9999 }}>
      <FaCrosshairs style={{ fontSize: '24px', color: 'gray', pointerEvents: 'none' }} />
    </div>
    </>
  )
}

export default CursorCustomS;
