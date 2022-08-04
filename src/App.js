import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import InfoSection from './components/InfoSection';
import MenuSection from './components/MenuSection';
import EventsSection from './components/EventsSection';
import PressSection from './components/PressSection';
import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
 
          <Routes>
            <Route path='info' element={<InfoSection />}/>
            <Route path='menu' element={<MenuSection />}/>
            <Route path='events' element={<EventsSection />}/>
            <Route path='press' element={<PressSection />}/>
          </Routes>

    </div>
  );
}

export default App;
