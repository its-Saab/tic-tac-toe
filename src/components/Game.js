/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Board from './Board'
import { calculateWinner } from '../winner'

const styles = {
  width: '200px',
  margin: '20px auto',
}

const Game = () => {

  const [board, setBoard] = useState(Array(9).fill(null))
  const [xIsNext, setXisNext] = useState(true)
  const winner = calculateWinner(board)


  const handleClick = index => {
    const boardCopy = [...board]
    if (winner || boardCopy[index]) return

    boardCopy[index] = xIsNext ? 'X' : 'O'
    setBoard(boardCopy)
    setXisNext(!xIsNext)


  }
  return (
        <>
           <Board squares= {board} onClick={handleClick}/>
            <p style={styles}>
              {winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}
            </p>
            <button className='btn' onClick={() => setBoard(Array(9).fill(null))}>
               Start Game
            </button>
        </>
  )
}

export default Game
