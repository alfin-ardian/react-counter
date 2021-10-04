import { useEffect,useState } from 'react';
import './App.css';

import ShoppingIcon from './assets/shopping-icon.svg'
import MinusIcon from './assets/minus-icon.svg'
import PlusIcon from './assets/plus-icon.svg'

function App() {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([
    {title: 'Telur', count: 1},
    {title: 'Ayam', count: 1},
    {title: 'Mie Instan', count: 1}
  ])
  return (
  <>
    <nav className="nav">
      <img className="nav-icon" src={ShoppingIcon} alt="Gambar Logo"/>
      <h1 className="nav-title">Shopping List</h1>
    </nav>
    <section className="container">
      <form className="form">
        <input className="input" value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder="silakan masukan list"/>
        <button className="add-button" type="submit">add</button>
      </form>

      {todos.length > 0 ? (<div className="todos">{todos.map((todo, index) => {
        return(
          <div className="todo" key={index}>
            {todo.title}
            
            <div className="todo-icon-wrapper">
              <div className="todo-count">{todo.count}</div>
              <button className="todo-action-button">
                <img src={PlusIcon} alt="plus icon"/>
              </button>
              <button className="todo-action-button">
                <img src={MinusIcon} alt="minus icon"/>
              </button>
            </div>
          </div>
        )
      })}</div>):(<div>kosong</div>)}
    </section>
  </>
  );
}

export default App;
