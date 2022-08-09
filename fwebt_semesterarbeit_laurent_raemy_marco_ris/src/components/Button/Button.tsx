import React from "react";
import "./button.scss";

interface Props {
  content: string
  onClick: () => void
  onDisable: boolean
}

const Button = ({onClick, content, onDisable}: Props) => {
  const [disable, setDisable] = React.useState(false);

  return (
    <button disabled={disable} onClick={() => {
      onClick();
      if (onDisable) {
        setDisable(true)
      }
    }
    }  className="btn btn-primary">{content}</button>
  )
}

export default Button