import { useEffect } from 'react';
import './App.css';

import ShoppingIcon from './assets/shopping-icon.svg'

function App() {
  return (
  <>
    <nav className="nav">
      <img className="nav-icon" src={ShoppingIcon} alt="Gambar Logo"/>
      <h1 className="nav-title">Shopping List</h1>
    </nav>
    <section className="container">
      <form className="form">
        <input className="input" type="text" placeholder="silakan masukan list"/>
        <button className="add-button" type="submit">add</button>
      </form>
    </section>
  </>
  );
}

export default App;
