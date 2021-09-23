import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar name="Kolector" />
      <div className="container my-3">
        <TextForm heading="Put Your Text Here:" />
      </div>
    </>
  );
}

export default App;
