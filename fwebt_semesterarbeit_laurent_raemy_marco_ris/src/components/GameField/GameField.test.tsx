import React from "react";
import { render, screen } from '@testing-library/react';
import GameField from "./GameField";
import GameController from "../../controller/GameController"
import { TileModel } from "../../models/TileModel";

let tileArray: TileModel[]

describe('GameField Component testing', () => {
  let gameController;
  beforeEach(() => {
    gameController = new GameController()
    tileArray = [
      {
        position: [1, 1],
        value: 2,
        isTransformed: false
      },
      {
        position: [1, 2],
        value: 0,
        isTransformed: false
      },
      {
        position: [2, 1],
        value: 2,
        isTransformed: false
      },
      {
        position: [2, 2],
        value: 4,
        isTransformed: false
      },
    ]
  })

  test('Gamefield component exists', () => {
    render(
      <GameField gameStarted={false} gridSize={4} tileArray={tileArray} />
    )

    expect(screen.getByTestId('game-field')).toBeInTheDocument()
  });

  test('If Gamefield component does not exist when 5 tiles and gamefield size 2X2', () => {
    render(
      <GameField gameStarted={false} gridSize={4} tileArray={tileArray} />
    )

    expect(screen.getByTestId('game-field-to-small')).toBeInTheDocument()
  })

  test('If Gamefield component does have 2 Tiles with value of 2, 4 or 8', () => {
    const gameController = new GameController()
    gameController.initGameField(4, 2, 2048)
    const tileArray = gameController.getTileArray()
    let counter = 0

    Object.keys(tileArray).forEach(key => {
      // @ts-ignore
      if (tileArray[key].value === 2 || tileArray[key].value === 4 || tileArray[key].value === 8) {
        counter++
      }
    })

    expect(counter).toBe(2)
  });
});
