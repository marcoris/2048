import {render, screen} from "@testing-library/react";
import React from "react";
import Tile from "./Tile";

describe('Testing Tile component', () => {
  beforeEach(() => {
    render(
      <Tile value={2} />
    )
  })

  test('Should render Tile nr 2 component', () => {
    const linkElement = screen.getByText(/2/i);
    expect(linkElement).toBeInTheDocument()
  });

  test('Should render Tile component without value', () => {
    const { container } = render(
      <Tile value={0} />
    )

    expect(container.firstChild).toHaveClass('tile-0');
  });

  test('Should render Tile nr 4 component',  () => {
    const { container, getByText } = render(
      <Tile value={4} />
    )

    expect(getByText('4')).toBeInTheDocument();
    expect(container.firstChild).not.toHaveClass('tile-2');
    expect(container.firstChild).toHaveClass('tile-4');
  });

  test('Should render Tile nr 8 component',  () => {
    const { container, getByText } = render(
      <Tile value={8} />
    )

    expect(getByText('8')).toBeInTheDocument();
    expect(container.firstChild).not.toHaveClass('tile-4');
    expect(container.firstChild).toHaveClass('tile-8');
  });
})
