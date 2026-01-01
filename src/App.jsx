import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import SingleMovie from './SingleMovie';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        {/* Rasta 1: Home Page */}
        <Route path="/" element={<Home />} />
        
        {/* Rasta 2: Movie Detail Page (Dynamic ID) */}
        <Route path="/movie/:id" element={<SingleMovie />} />
      </Routes>
    </div>
  );
}

export default App;