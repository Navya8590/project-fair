import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = ({insideDashboard}) => {
  return (
    <Navbar style={{zIndex:1}} className="shadow border rounded position-fixed w-100">
        <Container>
          <Navbar.Brand href="#home">
          <Link to={'/'} className='text-decoration-none fw-bolder'><i class="fa-solid fa-diagram-project me-2"></i>Project Fair</Link>
          </Navbar.Brand>
          {
            insideDashboard &&
            <button className='btn btn-link fw-bolder'>Logout <i className='fa-solid fa-right-from-bracket ms-1'></i></button>
          }
        </Container>
      </Navbar>
  )
}

export default Header