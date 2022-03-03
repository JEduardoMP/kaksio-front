// Routes
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Views
import MainPage from './views/mainPage/mainPage';
import SpecificPage from './views/specificPage/specificPage';
// Styles
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<MainPage />} />
        <Route exact path='/:catId' element={<SpecificPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
