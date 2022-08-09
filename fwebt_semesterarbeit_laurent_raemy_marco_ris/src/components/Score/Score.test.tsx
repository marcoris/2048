import React from "react";
import {render, screen} from "@testing-library/react";
import Score from "./Score";

let gameStarted = false
let score = 1000
const component = Score

describe('Testing Score component', () => {
  beforeEach(() => {
    render(
      <>
        <Score text={'Highscore'} score={1000} />
        <Score text={'Punkte'} score={0} />
      </>
    )
  })

  /*test('should reset score', () => {
    expect(component.resetScore()).toEqual(0)
  })*/

  test('should render score components', () => {
    const linkElementScore = screen.getByText(/Punkte/i);
    const linkElementHighscore = screen.getByText(/Highscore/i);
    expect(linkElementScore).toBeInTheDocument()
    expect(linkElementHighscore).toBeInTheDocument()
  });
})
