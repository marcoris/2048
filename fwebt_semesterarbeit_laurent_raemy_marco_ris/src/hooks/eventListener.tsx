import {useEffect, useState} from "react";

export default function useEventListener(targetKey: any) {

  const [keyPressed, setKeyPressed] = useState(false)

  const downHandler = ({key}: any) => {
    if (key === targetKey) {
      setKeyPressed(true)
    }
  }

  const upHandler = ({key}: any) => {
    if (key === targetKey) {
      setKeyPressed(false)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', downHandler)
    window.addEventListener('keyup', upHandler)

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    }
  })

  return keyPressed

}