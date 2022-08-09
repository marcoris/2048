import React from 'react';
import './scoreName.scss';

interface Props {
  text: string
}

export const ScoreName = ({text}: Props) => {
  return (
    <p className="score-name" data-testid="score-name">Name: {text}</p>
  )
}
