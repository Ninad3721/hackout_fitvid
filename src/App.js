
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './Signup';
import ModuleSelection from './ModuleSelection';
import DoctorModule from './DoctorModule';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path='/ModuleSelection' element={<ModuleSelection />} />
        <Route path='/DoctorModule' element={<DoctorModule />} />
      </Routes>
    </>
  );
}

export default App;
