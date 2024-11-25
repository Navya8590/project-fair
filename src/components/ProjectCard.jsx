import React, { useState } from 'react'
import { Card,Modal } from 'react-bootstrap'



const ProjectCard = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
     <Card onClick={handleShow} style={{ width: '18rem' }}>
      <Card.Img height={"200px"} variant="top" src="https://emeritus.org/in/wp-content/uploads/sites/3/2022/10/Why-Is-Quality-Planning-Important-in-Project-Management.jpg.optimal.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
       
      </Card.Body>
    </Card>

    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
              <img className='img-fluid' src="https://emeritus.org/in/wp-content/uploads/sites/3/2022/10/Why-Is-Quality-Planning-Important-in-Project-Management.jpg.optimal.jpg" alt="" />
            </div>
            <div className="col-lg-6">
              <h3>Title</h3>
              <h6>Languages Used : <span className='text-danger'>language</span></h6>
              <p style={{textAlign:'justify'}}><span className='fw-bolder'>Project Overview :</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolor sit perspiciatis quisquam sequi, dicta sed, perferendis iure ea, eligendi temporibus quasi mollitia nisi? Velit illum odit sint omnis fugiat!</p>
            </div>
          </div>
          <div className="mt-2 float-start">
            <a href="https://github.com/Navya8590/counter-app.git" target='_blank' className='btn btn-secondary me-2'> <i className='fa-brands fa-github'></i></a>
            <a href="https://github.com/Navya8590/counter-app.git" target='_blank' className='btn btn-secondary'> <i className='fa-solid fa-link'></i></a>
          </div>
        </Modal.Body>
         
      </Modal>
    </>
  )
}

export default ProjectCard