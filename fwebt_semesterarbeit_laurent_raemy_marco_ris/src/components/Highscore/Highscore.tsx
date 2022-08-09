import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Alert} from "react-bootstrap";
import {Tablerow} from "./Tablerow";

export default function Highscore(data: any) {
  const scores = data.data
  let count = 1
  if (data.show === '1') {
    return(
      <>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Highscore</th>
            </tr>
          </thead>
          <tbody>
            {
              scores.map((score: any) => {
                return <Tablerow key={(score.score + score.name).replace(' ', '')} counter={count++} scores={score} />
              })
            }
          </tbody>
        </table>
      </>
    )
  } else if (data.show === '2') {
    return(
      <>
        <Alert key={"info"} id="alert" variant="info">
          <p>Es gibt leider noch keine Highscores.</p>
        </Alert>
      </>
    )
  }

  return(
    <>
      <Alert key={"danger"} id="alert" variant="danger">
        <p>Leider keine Verbindung zum Backend.</p>
      </Alert>
    </>
  )
}


