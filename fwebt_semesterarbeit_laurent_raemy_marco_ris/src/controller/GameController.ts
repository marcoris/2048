import { TileModel } from "../models/TileModel";
import {between} from "../helpers/helpers";

const PROBABILITY_1 = 0.05
const PROBABILITY_2 = 0.1
const NEW_TILE_VALUES = [2, 4, 8]

class GameController {

  tileArray: TileModel[] = []
  gridSize = 0
  tilesAtStart = 0
  targetValue = 2048
  isGameOver = false
  isGameWon = false
  score = 0

  initGameField(gridSize: number, tilesAtStart: number, targetValue: number): TileModel[] {
    this.gridSize = gridSize
    this.tilesAtStart = tilesAtStart
    this.targetValue = targetValue

    for (let i = 1; i <= this.gridSize; i++) {
      for (let j = 1; j <= this.gridSize; j++) {
        this.tileArray.push(this.createTile(i, j, true))
      }
    }
    this.score = 0

    // Random position tiles at start
    if (this.tilesAtStart > 0) {
      for (let i = 0; i < this.tilesAtStart; i++) {
        const position = this.getRandomFreePosition()
        const newTile = this.createTile(position![0], position![1], false)
        this.setTileValueByPosition(newTile.position, newTile.value)
      }
    }
    this.isGameOver = false
    this.isGameWon = false

    return this.tileArray
  }

  createTile(posX: number, posY: number, isInit: boolean): TileModel {
    if (isInit) {
      return {
        position: [posX, posY],
        value: 0,
        isTransformed: false
      }
    } else {
      const value = this.CreateRandomValueByProbability()
      return {
        position: [posX, posY],
        value: value,
        isTransformed: false
      }
    }
  }

  CreateRandomValueByProbability() {
    const randomNumber = Math.random()
    if (randomNumber < PROBABILITY_1) return NEW_TILE_VALUES[2]
    else if (randomNumber <= PROBABILITY_2 && randomNumber >= PROBABILITY_1) return NEW_TILE_VALUES[1]
    else return NEW_TILE_VALUES[0]
  }

  getRandomFreePosition() {
    let emptyFieldFound = false
    let tile: TileModel = {
      position: [-1, -1],
      value: -1,
      isTransformed: false
    }

    if (this.tileArray.find(t => t.value === 0)) {
      while (!emptyFieldFound) {
        const posX = Math.floor(Math.random() * this.gridSize) + 1
        const posY = Math.floor(Math.random() * this.gridSize) + 1
        tile = this.tileArray.find(t => t.position[0] === posX && t.position[1] === posY)!
        if (tile.value === 0) {
          emptyFieldFound = true

          return [posX, posY]
        }
      }
    } else {
      return null
    }
  }

  isMovePossible() {
    let isPossible = false
    for (const tile of this.tileArray) {
      if (tile.value === 0) {
        isPossible = true
        break
      }

      const posX = tile.position[0]
      const posY = tile.position[1]
      const neighborPositions = [[posX, posY -1], [posX + 1, posY], [posX, posY +1], [posX -1, posY]]

      for (const neighborPosition of neighborPositions) {
        if (between(neighborPosition[0], 1, this.gridSize) && between(neighborPosition[1], 1, this.gridSize)) {
          const neighborIndex = this.tileArray.findIndex(
            t => t.position[0] === neighborPosition[0] && t.position[1] === neighborPosition[1]
          )
          if (this.tileArray[neighborIndex].value === tile.value) {
            isPossible = true
            break
          }
        }
      }
    }

    return isPossible
  }

  isTargetValueInArray() {
    return this.tileArray.some(tile => tile.value === this.targetValue)
  }

  setTileValueByPosition(position: Array<number>, value: number) {
    const tileIndex = this.tileArray.findIndex(t => t.position[0] === position[0] && t.position[1] === position[1])
    this.tileArray[tileIndex].value = value
  }

  getTileArray() {
    return this.tileArray
  }

  setTileArray(tileArray: TileModel[]) {
    this.tileArray = tileArray
  }

  setIsGameOver(gameOver: boolean, gameWon: boolean) {
    this.isGameOver = gameOver
    this.isGameWon = gameWon
  }

  getScore() {
    return this.score
  }

  setScore(count: number) {
    if (!this.isGameOver)
      return this.score += count
  }
}

export default GameController
