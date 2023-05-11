import React from 'react'
import './Calculette.css';

function Bouton({value, onClick}) {
  return (
    <button value={value} className='grey' onClick={onClick}>
      {value}
    </button>
  )
}
export default Bouton