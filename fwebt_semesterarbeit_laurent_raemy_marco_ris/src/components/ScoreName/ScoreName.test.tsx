import React from "react";
import {getByText, render, screen} from "@testing-library/react";
import {ScoreName} from "./ScoreName";
import Button from "../Button/Button";

describe('ScoreName component', () => {
  test('Should render the ScoreName component', () => {
    render(
      <ScoreName text={'Marco'} />
    )
    const linkElement = screen.getByText(/Marco/i);
    expect(linkElement).toBeInTheDocument()
  })

  test('Should render the ScoreName component with value Marco', () => {
    render(
      <ScoreName text={'Marco'} />
    )
    expect(screen.getByTestId('score-name')).toHaveTextContent('Name: Marco');
  })

  test('Should render the ScoreName component with value Laurent', () => {
    render(
      <ScoreName text={'Laurent'} />
    )

    expect(screen.getByTestId('score-name')).not.toHaveTextContent('Name: Marco');
  })

  test('Should render the ScoreName component with value Laurent', () => {
    render(
      <ScoreName text={'Laurent'} />
    )

    expect(screen.getByTestId('score-name')).toHaveTextContent('Name: Laurent');
  })
})
