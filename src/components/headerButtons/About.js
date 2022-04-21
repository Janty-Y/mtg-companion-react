import React, { useState } from 'react';
import { Button, Modal, Tabs, Tab } from 'react-bootstrap';
import HowToUse from '../about/HowToUse';
import Mechanics from '../about/Mechanics';
import Version from '../about/Version';

const About = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant='btn btn-outline-warning'
        type='button'
        onClick={handleShow}
      >
        About
      </Button>

      <Modal show={show} onHide={handleClose} id='about' className='about-font'>
        <Modal.Header closeButton>
          <Modal.Title>About Magic: The Gathering Companion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tabs className='mb-3'>
            <Tab eventKey='how-to-use' title='How To Use'>
              <HowToUse />
            </Tab>
            <Tab eventKey='mechanics' title='Mechanics'>
              <Mechanics />
            </Tab>
            <Tab eventKey='version' title='Version'>
              <Version />
            </Tab>
          </Tabs>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default About;
