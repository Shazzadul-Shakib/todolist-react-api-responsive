import React, { useEffect, useState } from 'react';
import List from '../List/List';
import './Todos.css';

const Todos = () => {
  // API fetch
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => setTodos(data));
  }, [])
  return (
    <div className='todos'>
      {/* passing data to other components as props by map */}
      {
        todos.map(todo=><List todo={todo} key={todo.id}></List>)
      }
    </div>
  );
};

export default Todos;