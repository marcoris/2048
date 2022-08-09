import React, {useEffect} from "react";
import './Highscores.scss';
import Highscore from "../components/Highscore/Highscore";
import apiService from "../services/ApiService";

export const Highscores = () => {
  const [highscores, setHighscores] = React.useState(false)
  const [backend, setBackend] = React.useState(false)
  const [datas, setDatas] = React.useState('')

  const buildHighscores = (data: any) => {
    setBackend(true)
    if (data.length > 0) {
      setHighscores(true)
    } else {
      setHighscores(false)
    }
    data.sort((a: any, b: any) => {
      return a.score - b.score;
    })

    setDatas(data)
  }

  useEffect(() => {
    apiService().getHighscores()
      .then((data) => {buildHighscores(data)})
      .catch((err) => {
        setBackend(false)
        console.log(err.message);
      })
  }, [])

  return(
    <>
      <h1>Highscores</h1>
      {
        backend && highscores && <Highscore data={datas} show="1" />
      }
      {
        backend && !highscores && <Highscore data={datas} show="2" />
      }
      {
        !backend && <Highscore data={datas} show="3" />
      }
    </>
  )
}
