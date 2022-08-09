import { TileModel } from "../models/TileModel"
import GameController from "./GameController"
import {arraysEqual, deepCopyArray} from "../helpers/helpers";

class ActionController {
  gameController: GameController
  tileArray: TileModel[]

  constructor(gameController: GameController) {
    this.gameController = gameController
    this.tileArray = gameController.getTileArray()
  }

  moveTiles(direction: string) {
    let cols = this.getTileArrayPerColumn(Math.sqrt(this.tileArray.length))
    let rows = this.getTileArrayPerRow(Math.sqrt(this.tileArray.length))
    let newTileArray: TileModel[] = []

    switch (direction) {
    case 'up':
      for (let i = 0; i < rows.length; i++) {
        rows = this.moveTilesOnePosition(rows)
      }
      rows.forEach((row) => {
        row.forEach((tile) => {
          newTileArray.push(tile)
        })
      })
      break
    case 'down':
      rows = rows.reverse()
      for (let i = 0; i < rows.length; i++) {
        rows = this.moveTilesOnePosition(rows)
      }
      rows = rows.reverse()
      rows.forEach((row) => {
        row.forEach((tile) => {
          newTileArray.push(tile)
        })
      })
      break
    case 'left':
      for (let i = 0; i < cols.length; i++) {
        cols = this.moveTilesOnePosition(cols)
      }
      cols.forEach((col) => {
        col.forEach((tile) => {
          newTileArray.push(tile)
        })
      })
      newTileArray.sort(function (a, b) {
        return a.position[0] - b.position[0]
      })
      break
    case 'right':
      cols = cols.reverse()
      for (let i = 0; i < cols.length; i++) {
        cols = this.moveTilesOnePosition(cols)
      }
      cols = cols.reverse()
      cols.forEach((col) => {
        col.forEach((tile) => {
          newTileArray.push(tile)
        })
      })
      newTileArray.sort(function (a, b) {
        return a.position[0] - b.position[0]
      })
      break
    }

    if (!arraysEqual(newTileArray, this.tileArray)) {
      this.tileArray = newTileArray
      this.tileArray.forEach(tile => tile.isTransformed = false)
      this.gameController.setTileArray(this.tileArray)
      this.gameController.setScore(1)

      // check if 2048 in gamecontroller
      if (!this.gameController.isTargetValueInArray()) {
        const newTilePositions = this.gameController.getRandomFreePosition()
        if (newTilePositions) {
          const newTile = this.gameController.createTile(newTilePositions![0], newTilePositions![1], false)
          this.gameController.setTileValueByPosition(newTile.position, newTile.value)
        }
        if (!this.gameController.isMovePossible()) {
          this.gameController.setIsGameOver(true, false)
        }
      } else {
        this.gameController.setIsGameOver(true, true)
      }
    }
  }

  getTileArrayPerRow(borderIndex: number) {
    let tmpTileArray = deepCopyArray(this.tileArray)
    let chunksArray = []
    for (let i = 0; i < borderIndex; i++) {
      chunksArray.push(tmpTileArray.splice(0, borderIndex))
    }

    return chunksArray
  }

  getTileArrayPerColumn(borderIndex: number) {
    let tmpTileArray = deepCopyArray(this.tileArray)
    let chunksArray = []
    for (let i = 0; i < borderIndex; i++) {
      let chunks: TileModel[] = []
      tmpTileArray.forEach((tile) => {
        if (tile.position[1] == i + 1) {
          chunks.push(tile)
        }
      })
      chunksArray.push(chunks)
    }

    return chunksArray
  }

  moveTilesOnePosition(rows: TileModel[][]): TileModel[][] {
    let previousRow: TileModel[] = []
    rows.forEach((row, rowIndex) => {
      if (rowIndex === 0) {
        previousRow = row

        return
      }
      row.forEach((cell, cellIndex) => {
        if (previousRow[cellIndex].value === 0) {
          previousRow[cellIndex].value = cell.value
          cell.value = 0
        } else if (cell.value === previousRow[cellIndex].value && (!cell.isTransformed || !previousRow[cellIndex].isTransformed)) {
          previousRow[cellIndex].value += cell.value
          previousRow[cellIndex].isTransformed = true
          cell.value = 0
        }
      })
      if (rowIndex < rows.length -1) {
        previousRow = row
      }
    })

    return rows
  }
}

export default ActionController
