import React, {useState} from 'react'
import {Button, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle} from "react-bootstrap"
import apiService from "../../services/ApiService";
import {shootConfetti} from "../../helpers/helpers";

interface Props {
  type: string
  title: string
  text: string
  button: string
  form: boolean
  score: number
}

const ShowModal = ({type, title, text, button, form, score}: Props) => {
  const [show, setShow] = useState(true)
  let name = ''

  const handleClose = () => setShow(false);

  const sendHighScore = () => {
    if (name.length && score > 0) {
      apiService().saveNewScore(name, score)
        .finally(handleClose)
    }
  }

  // Shoot some confetti
  if (form) {
    shootConfetti()
  }

  return (
    <Modal show={show} backdrop="static" onHide={handleClose}>
      <ModalHeader closeButton>
        <ModalTitle>{title}</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <p>{text}</p>
        {
          form &&
          <form>
            <input type="text" max="32" id="nameField" onChange={event => name = event.target.value}/>
          </form>
        }
      </ModalBody>
      <ModalFooter>
        {
          form &&
          <Button variant={type} onClick={sendHighScore}>{button}</Button>
        }
        {
          !form &&
          <Button variant={type} onClick={handleClose}>{button}</Button>
        }
      </ModalFooter>
    </Modal>
  )
}

export default ShowModal
