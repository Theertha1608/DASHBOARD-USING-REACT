import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/support" element={<Support/>}/>
        <Route path="/plugins" element={<Plugins/>}/>
        <Route path="/help" element={<Help/>}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
