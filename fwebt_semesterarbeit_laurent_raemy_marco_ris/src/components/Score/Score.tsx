import React from 'react';
import './score.scss';

interface Props {
  text: string
  score: number
}

const Score = ({text, score}: Props) => {
  return (
    <p className="score">
      <span id="score-points" className="score-points" data-testid="text">{text}: </span>
      <span id="score-highscore" className="score-highscore" data-testid="score">{score}</span>
    </p>
  )
}

export default Score
