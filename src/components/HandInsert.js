import React from 'react'

import HandInsertInput from './HandInsertInput'

const HandInsert = (props) => {
  return (
    <div className='HandInsert'>
      <h2 className='Title'>Hand Insert</h2>
      <p>d</p>
      <HandInsertInput />
      <p> {props.ceva} </p>
    </div>
  );
};

export default HandInsert
