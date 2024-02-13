// useCustomCursor.js
import { createContext, useContext, useState, useEffect } from 'react';

const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
  const [cursorVariant, setCursorVariant] = useState('default');
  const [mousePosition, setMousePosition] = useState({ x: -10, y: -10 });

  const textEnter = () => setCursorVariant('text');
  const textLeave = () => setCursorVariant('default');

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <CursorContext.Provider value={{ cursorVariant, textEnter, textLeave, mousePosition }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => {
  return useContext(CursorContext);
};
