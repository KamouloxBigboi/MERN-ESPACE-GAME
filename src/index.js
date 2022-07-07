// Root file containing all routes

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter,
         Routes,
         Route,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import App from './App';
import NavBar from './components/NavBar';
import SalleAmiral from './components/salles/SalleAmiral';
import SalleBateau from './components/salles/SalleBateau';
import SalleIle from './components/salles/SalleIle';
import SallePirates from './components/salles/SalleIle'
import SallePort from './components/salles/SallePort'
import SalleTaverne from './components/salles/SalleTaverne';
import Connexion from './components/Connexion'
import Inscription from './components/Inscription'; 
import Reservation from './components/Reservation';

// Rooting

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/NavBar" element={<NavBar />} />
        <Route path="/Connexion" element={<Connexion />} />
        <Route path="/Inscription" element={<Inscription />} />
        <Route path="/Reservation" element={<Reservation />} />
        <Route path="/salles/SalleAmiral" element={<SalleAmiral />} />
        <Route path="/salles/SalleBateau" element={<SalleBateau />} />
        <Route path="/salles/SalleIle" element={<SalleIle />} />
        <Route path="/salles/SallePirates" element={<SallePirates />} />
        <Route path="/salles/SallePort" element={<SallePort />} />
        <Route path="/salles/SalleTaverne" element={<SalleTaverne />} />

      </Route>
      
    </Routes>
  </BrowserRouter>
);

reportWebVitals();