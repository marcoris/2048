import React from "react";
import {fireEvent, getByText, render, screen} from "@testing-library/react";
import Button from "./Button";

let gameStarted = false

describe('Testing Button component', () => {
  beforeEach(() => {
    const mockCallBack = jest.fn();

    render(
      <Button content={'start'} onClick={mockCallBack} onDisable={true} />
    )
  })
  test('should render start button', () => {
    const linkElement = screen.getByText(/start/i);
    expect(linkElement).toBeInTheDocument()
    expect(gameStarted).toBeFalsy()
  });

  test('should get gameStarted value false', () => {
    expect(gameStarted).toBeFalsy()
  });

  test('should set gameStarted value to true', () => {
    const mockCallBack = jest.fn();
    const {getByText} = render(
      <Button content={'Start'} onClick={mockCallBack} onDisable={true} />
    )
    const node = getByText('Start')
    fireEvent.click(node)
    expect(gameStarted).toBeTruthy()
  })

  // Speichern Button speichert Highscore und schliesst ShowModal

  // OK Button schliesst ShowModal

  // Zurück Button von Highscores

  // Rückgängig Button
  test('Should render the back button', () => {
    const mockCallBack = jest.fn();
    const {getByText} = render(
      <Button content={'Start'} onClick={mockCallBack} onDisable={true} />
    )
    expect(screen.queryByText(/Rückgängig/i)).not.toBeInTheDocument();
    const node = getByText('Start')
    fireEvent.click(node)
    expect(gameStarted).toBeTruthy()
    expect(screen.queryByText(/Rückgängig/i)).toBeInTheDocument();
  })
})

// function startGame() {
//   gameStarted = true
//   render(
//     <Button content={'Rückgängig'} onClick={alert}/>
//   )
// }

