import React from "react";
import classnames from 'classnames';
import './tile.scss';

interface Props {
  value: number
}

const Tile = ({value}: Props) => {
  return (
    <div className={classnames('tile', `tile-${value}`)}>{value > 0 ? value : ''}</div>
  )
}

export default Tile
