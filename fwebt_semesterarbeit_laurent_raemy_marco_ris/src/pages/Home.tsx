import React, {useEffect} from 'react';
import '../assets/scss/_variables.scss';
import '../App.scss';
import './Home.scss'
import Score from "../components/Score/Score";
import {ScoreName} from "../components/ScoreName/ScoreName";
import GameField from "../components/GameField/GameField";
import Button from "../components/Button/Button";
import ActionController from '../controller/ActionController';
import GameController from '../controller/GameController';
import { TileModel } from '../models/TileModel';
import useEventListener from "../hooks/eventListener";
import ShowModal from "../components/ShowModal/ShowModal";
import apiService from "../services/ApiService";

function Home() {
  const gridSizeList = [3, 4, 5, 6, 7, 8]
  const tilesAtStartList = [1, 2, 3, 4, 5, 6, 7, 8]
  const targetValueList = [32, 64, 128, 256, 512, 1024, 2048]
  const [gridSize, setGridSize] = React.useState(4)
  const [tilesAtStart, setTilesAtStart] = React.useState(2)
  const [targetValue, setTargetValue] = React.useState(2048)
  const [gameStarted, setGameStarted] = React.useState(false)
  const [gameLost, setGameLost] = React.useState(false)
  const [gameWon, setGameWon] = React.useState(false)
  const [highScore, setHighscore] = React.useState(0)
  const [scoreName, setScorename] = React.useState('-')
  const [tileArray, setTileArray] = React.useState<TileModel[]>([])
  const [gameController] = React.useState<GameController>(new GameController())
  const [score, setScore] = React.useState(gameController.getScore())
  const [actionController, setActionController] = React.useState<ActionController>()
  const upPress = useEventListener('ArrowUp')
  const downPress = useEventListener('ArrowDown')
  const leftPress = useEventListener('ArrowLeft')
  const rightPress = useEventListener('ArrowRight')

  function manageErrors(response: any) {
    if (!response.ok) {
      throw Error(response.statusText);
    }

    return response;
  }

  function startGame() {
    gameController.initGameField(gridSize, tilesAtStart, targetValue)
    setTileArray(gameController.getTileArray())
    setActionController(new ActionController(gameController))
    setGameStarted(true)
  }

  function handleHighscoreData(data: any) {
    let highscore = data[0].score
    let name = ''
    for (let i = 0; i < data.length; i++) {
      if (data[i].score < highscore) {
        highscore = data[i].score
        name = data[i].name
      }
    }

    setHighscore(highscore)
    setScorename(name)
  }

  useEffect(() => {
    if (gameController.isGameOver) {
      if (gameController.isGameWon) {
        setGameWon(true)
        setGameLost(false)
      } else {
        setGameWon(false)
        setGameLost(true)
      }
    }
    setScore(gameController.getScore())
  })

  useEffect(() => {
    apiService().getHighscores()
      .then((data) => {handleHighscoreData(data)})
      .catch((err) => {
        console.log(err.message);
      })
  }, []);

  useEffect(() => {
    if (gameStarted && !gameWon && !gameLost) {
      if (upPress) {
        actionController?.moveTiles('up')
      } else if (downPress) {
        actionController?.moveTiles('down')
      } else if (leftPress) {
        actionController?.moveTiles('left')
      } else if (rightPress) {
        actionController?.moveTiles('right')
      }
      setTileArray(gameController.getTileArray())
    }
  }, [upPress, downPress, leftPress, rightPress, gameStarted, gameWon, gameLost])

  return (
    <>
      <div className="container">
        <h1 className="app-logo">2048</h1>
        <div className="row">
          <div className="col-md-6 score-left">
            <Score text={'Highscore'} score={highScore}/>
            <ScoreName text={scoreName}/>
          </div>
          <div className="col-md-6 score-right">
            <Score text={'Punkte'} score={score}/>
          </div>
        </div>

        <div className="main">
          <GameField gameStarted={gameStarted} gridSize={gridSize} tileArray={tileArray} />
          {
            gameLost &&
            <ShowModal type="primary" title="Game Over" text={`Du hast verloren! Deine Punkte: ${score}`} button="OK" form={false} score={0} />
          }
          {
            gameWon &&
            <ShowModal type="primary" title="Gewonnen" text={`Du Hengst hast gewonnen! Deine Punkte: ${score}`} button="Score Speichern" form={true} score={score} />
          }
          {
            !gameStarted &&
            <div className="game-actions text-start">
              <div className="d-flex mb-3">
                <label>
                  Grid Size
                  <select className="form-select" defaultValue={4} onChange={event => {
                    setGridSize(parseInt(event.target.value))
                  }}>
                    {
                      gridSizeList.map((item) => {
                        return <option key={item} value={item}>{item}</option>
                      })
                    }
                  </select>
                </label>
                <label>
                  Tiles at Start
                  <select className="form-select" defaultValue={2} onChange={event => {
                    setTilesAtStart(parseInt(event.target.value))
                  }}>
                    {
                      tilesAtStartList.map((item) => {
                        return <option key={item} value={item}>{item}</option>
                      })
                    }
                  </select>
                </label>
                <label>
                  Target Value
                  <select className="form-select" defaultValue={2048} onChange={event => {
                    setTargetValue(parseInt(event.target.value))
                  }}>
                    {
                      targetValueList.map((item) => {
                        return <option key={item} value={item}>{item}</option>
                      })
                    }
                  </select>
                </label>
              </div>
              <Button onClick={startGame} content={'Start'} onDisable={true} />
            </div>
          }
          <div className="footer">
            <small>&copy; 2022 by Marco Ris and Laurent Raemy</small>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
