import { BrowserRouter, Route, Routes, } from 'react-router-dom';

import './App.css';

import Account from './components/Account/Account';
import Case from './components/Case/Case';
import CaseDetails from './components/Case/CaseDetails';
import DiseaseDetails from './components/Disease/DiseaseDetails';
import Diseases from './components/Disease/Diseases';
import Home from './components/Home';
import HospitalDetails from './components/Hospital/HospitalDetails';
import Hospitals from './components/Hospital/Hospitals';
import NavBar from './components/NavBar';

function App() {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='' element={<Home />} />
                    <Route path='/account' element={<Account />} />
                    <Route path='/diseases' element={<Diseases />} />
                    <Route path='/diseases/details' element={<DiseaseDetails />} />
                    <Route path='/cases' element={<Case />} />
                    <Route path='/cases/details' element={<CaseDetails />} />
                    <Route path='/hospitals' element={<Hospitals />} />
                    <Route path='/hospitals/details' element={<HospitalDetails />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
