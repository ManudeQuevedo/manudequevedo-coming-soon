import React from 'react'
import ComingSoon from "react-coming-soon"
import Logo from './assets/logo-blanco-verde.svg'
import './App.css'


function App() {
  return (
    <div className="App">
      <img src={Logo} alt="Manu de Quevedo" className="main-logo" />
      <ComingSoon
        title="A new improved site is coming soon"
        bgColor="transparent"
        textColor="#13eba2"
        date="Mon Sep 17 2019 00:00:00 GMT-0500 (Central Daylight Time)"
      />
    </div>
  );
}

export default App
