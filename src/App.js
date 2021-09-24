import { useState } from 'react/cjs/react.development';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [Mode, setMode] = useState('dark');

  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  };
  return (
    <>
      <Navbar name="KonverTer" Mode={Mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Write Down Your Text Here:" />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
