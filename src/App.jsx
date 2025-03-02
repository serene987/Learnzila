import './App.css';
import SideNavbar from './components/sidenav/SideNavbar.jsx';
import { BrowserRouter as Route, Routes } from 'react-router-dom';
import Topnav from './components/topnav/Topnav.jsx'

function App() {
  return (
    <>
      <Route>
        <Topnav/>
        <SideNavbar />
          <Routes path='/' />
      </Route>
    </>
  );
}

export default App;