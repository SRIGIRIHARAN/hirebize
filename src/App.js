
import '../src/App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './component/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
