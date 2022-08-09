import React from "react";

interface Props {
  counter: number
  scores: any
}

export const Tablerow = (data: Props) => {
  return (
    <tr>
      <td>{data.counter}</td>
      <td>{data.scores.name}</td>
      <td>{data.scores.score}</td>
    </tr>
  )
}
