import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';

function App() {
  const [categories] = useState([
    {
      name: 'about',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'portfolio', description: 'Portraits of people in my life' },
    { name: 'contact', description: 'Delicious delicacies' },
    { name: 'resume', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);
  
  const [contactSelected, setContactSelected] = useState(false);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
