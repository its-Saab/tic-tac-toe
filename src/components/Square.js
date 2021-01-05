import React from 'react'

const style = {
  border: '6px solid #2c3e50',
  borderRadius: '2px',
  fontFamily: 'Helvetica',
  fontWeight: 'bold',
  fontSize: '4em',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'lightblue'
};


const Square = ({value, onClick}) => (
    <button style={style} onClick= {onClick}>
      {value}
    </button>
  )


export default Square
