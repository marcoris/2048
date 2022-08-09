import React, {useEffect} from "react";
import { TileModel } from "../../models/TileModel";
import Tile from "../Tile/Tile";
import './gameField.scss';

interface Props {
  gameStarted: boolean
  gridSize: number
  tileArray: TileModel[]
}

const GameField = ({gameStarted, gridSize, tileArray}: Props) => {
  let emptyFields = []

  for (let i = 0; i < gridSize * gridSize; i++) {
    emptyFields.push(<div className="empty"></div>)
  }

  return (
    <div className="mb-4">
      {!gameStarted ? (
        <p>Start a new Game</p>
      ) : (
        <div data-testid="game-field" className="game-field" style={{width: 120 * gridSize, height: 120 * gridSize}}>
          { emptyFields }
          <div className="tile-overlay">
            {
              tileArray.map((tile) => {
                return <Tile key={(tile.position[0] * 10) + tile.position[1]} value={tile.value}/>
              })
            }
          </div>
        </div>
      )}
    </div>
  )
}

export default GameField
