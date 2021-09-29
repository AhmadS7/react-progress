import { useState } from 'react/cjs/react.development';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
      showAlert('Starting Dark Mode', 'success');
      setInterval(() => {
        document.title = 'You are on the dark mode';
      }, 2500);
      setInterval(() => {
        document.title = 'You can go back to Light mode now.';
      }, 1500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Starting light Mode', 'success');
    }
  };
  return (
    <>
      <Router>
        <Navbar name="KonverTer" Mode={Mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <TextForm showAlert={showAlert} Mode={Mode} heading="Write Down Your Text Here:" />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
