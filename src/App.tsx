import { SimpleButton } from './components/parts/button/SimpleButton.parts';
import './App.css';
import logo from './logo.svg';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="text-red-500"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className='flex overflow-auto px-0'>
          <SimpleButton type='submit' color='blue'>Blue Button</SimpleButton>
          <SimpleButton type='button' onClick={() => console.log('Red')} color='red'>Red Button</SimpleButton>
          <SimpleButton type='button' onClick={() => console.log('Green')} color='green'>Green Button</SimpleButton>
        </div>
      </header>
    </div>
  );
}

export default App;
