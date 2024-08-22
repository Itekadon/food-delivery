import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    backgroundColor: '#ffffff',
    textColor: '#000000',
  });

  const toggleTheme = () => {
    setTheme(theme.backgroundColor === '#ffffff'
      ? { backgroundColor: '#000000', textColor: '#ffffff' }
      : { backgroundColor: '#ffffff', textColor: '#000000' });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
