import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { StyledLogIcons } from '../styles/ViewLogIcons.styled';

const Logs = () => {
  const [show, setShow] = useState(false);
  const [currentLogs, setCurrentLogs] = useState(
    JSON.parse(localStorage.getItem('matchLogs') || '[]')
  );

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setCurrentLogs(JSON.parse(localStorage.getItem('matchLogs') || '[]'));
    setShow(true);
  };

  const showLogs = () => {
    return (
      <>
        {currentLogs.length > 0
          ? currentLogs.map((match, i) => {
              const { p1Log, p2Log, duration, results } = match;
              return (
                <span key={i}>
                  <StyledLogIcons>
                    {p1Log.playerName} vs {p2Log.playerName} <br />
                    {p1Log.deckName} - {p2Log.deckName}
                    <br />
                    {p1Log.totalLife}
                    <i className='fas fa-heart heart-log-icon' />
                    {p2Log.totalLife}
                    <br />
                    {p1Log.poisonCounters}
                    <i className='fas fa-skull-crossbones poison-icon' />
                    {p2Log.poisonCounters}
                    <br />
                    {results} <br />
                    Duration: {duration}
                    <br />
                    <hr />
                    <br />
                  </StyledLogIcons>
                </span>
              );
            })
          : 'No Matches Found'}
      </>
    );
  };

  const clearLogs = () => {
    localStorage.clear();
    setCurrentLogs([]);
  };

  return (
    <>
      <Button
        variant='btn btn-outline-warning top-button'
        type='button'
        onClick={handleShow}
      >
        View Logs
      </Button>

      <Modal show={show} onHide={handleClose} id='about'>
        <Modal.Header closeButton>
          <Modal.Title>Match History</Modal.Title>
        </Modal.Header>
        <Modal.Body className='match-history'> {showLogs()}</Modal.Body>
        <Modal.Footer>
          <Button variant='danger' className='btn-lg' onClick={clearLogs}>
            Clear
          </Button>
          <Button
            variant='secondary'
            className='btn-lg ms-auto'
            onClick={handleClose}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Logs;
