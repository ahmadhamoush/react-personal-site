import './App.css';
import { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import Landing from './pages/Landing';
import Projects from './pages/Projects';

function App() {
  const [isDarkMode, setDarkMode] = useState(true);


  return (
    <div>
      <DarkModeSwitch
      style={{ marginBottom: '2rem', position:'absolute', right:'70px', top:'200px'}}
      checked={isDarkMode}
      onChange={()=>setDarkMode(!isDarkMode)}
      size={60}
    />
     <Landing isDarkMode={isDarkMode} />
      <Projects isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
