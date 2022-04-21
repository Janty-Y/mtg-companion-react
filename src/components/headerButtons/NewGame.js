import React, { useContext, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import PlayerContext from '../../context/playerContext';

const NewGameModal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const playerContext = useContext(PlayerContext);
  const { updateNames, resetGame, resetTimer } = playerContext;

  const [player1, setPlayer1] = useState({ p1Name: '', p1DeckName: '' });
  const [player2, setPlayer2] = useState({ p2Name: '', p2DeckName: '' });

  const handleInputs = (e) => {
    // name = what property to update, value = user input
    const { name, value } = e.target;
    setPlayer1(() => {
      return { ...player1, [name]: value };
    });
    setPlayer2(() => {
      return { ...player2, [name]: value };
    });
  };

  // Will update player and deck names, and set game/timer state to initial values
  const handleSubmit = () => {
    updateNames(player1, player2);
    resetGame();
    handleClose();
    setTimeout(() => {
      resetTimer();
    }, 0); //so to not start the timer by default
  };

  const clearFields = () => {
    setPlayer1({ p1Name: '', p1DeckName: '' });
    setPlayer2({ p2Name: '', p2DeckName: '' });
  };

  return (
    <>
      <Button variant='btn btn-outline-warning top-button' onClick={handleShow}>
        New Game
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Game Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2>Player 1:</h2>
          <div className='form-floating'>
            <input
              type='text'
              className='form-control'
              placeholder='Player 1 Name'
              name='p1Name'
              value={player1.p1Name}
              onChange={handleInputs}
            />
            <label htmlFor='p1-name'>Name</label>
          </div>
          <div className='form-floating'>
            <input
              type='text'
              className='form-control'
              placeholder='Player 1 Deck Name'
              name='p1DeckName'
              value={player1.p1DeckName}
              onChange={handleInputs}
            />
            <label htmlFor='p1-name'>Deck Name</label>
          </div>
          <br />
          <h2>Player 2:</h2>
          <div className='form-floating'>
            <input
              type='text'
              className='form-control'
              placeholder='Player 2 Name'
              name='p2Name'
              value={player2.p2Name}
              onChange={handleInputs}
            />
            <label htmlFor='p1-name'>Name</label>
          </div>
          <div className='form-floating'>
            <input
              type='text'
              className='form-control'
              placeholder='Player 2 Deck Name'
              name='p2DeckName'
              value={player2.p2DeckName}
              onChange={handleInputs}
            />
            <label htmlFor='p1-name'>Deck Name</label>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='danger' onClick={clearFields}>
            Clear
          </Button>
          <Button variant='secondary ms-auto' onClick={handleClose}>
            Cancel
          </Button>
          <Button variant='success' onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NewGameModal;
