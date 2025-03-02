import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Route>
        <Navbar />
          <Routes path='/' />
      </Route>
    </>
  );
}

export default App;