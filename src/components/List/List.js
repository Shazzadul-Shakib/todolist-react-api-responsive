import React from 'react';
import './List.css'

const List = (props) => {
  const {id,title,completed } = props.todo;
  return (
    <div className='list'>
    <h4 className='list-id'>{id} </h4>
    <h4 className='list-text'>{title} </h4>
      {/* adding style by ternery operator */}
    <h4 style={completed ? { color: 'green' }:{ color: 'red' }}>{completed?"DONE":"PENDING"} </h4>
    </div>
  );
};

export default List;