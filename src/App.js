import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar name="KonverTer" />
      <div className="container my-3">
        <TextForm heading="Write Down Your Text Here:" />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
