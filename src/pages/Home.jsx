import React from 'react'
import { Link } from 'react-router-dom'
import landingimg from '../assets/project.webp'
import { Card } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'




const Home = () => {
  return (
    
   <>
      <div style={{minHeight:'100vh'}} className="d-flex justify-content-center align-items-center rounded shadow w-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 style={{fontSize:'80px'}}><i class="fa-brands fa-product-hunt me-2"></i>
            Project Fair</h1>
            <p style={{textAlign:'justify'}}>One Stop Destination for all Software Development Projects. Where User can add and manage their projects.
               As well as access all projects available in our website... What are you waiting for!!!
            </p>
            <Link to={'/login'} className='btn btn-warning'>STARTS TO EXPLORE</Link>
          </div>
          <div className="col-lg-6">
           <img className='img-fluid' src={landingimg} alt="" /> 
          </div>
        </div>
      </div>
      </div>


      {/* Explore our projects */}
      <div className="my-5 text-center">
        <h1 className="mb-5">Explore Our Projects</h1>
        <marquee>
          <div className="d-flex">
            <div className="me-5">
              <ProjectCard/>
            </div>
          </div>
        </marquee>
        <button className='btn btn-link mt-5'>CLICK HERE TO VIEW MORE PROJECTS...</button>

      </div>

      {/*Our testimonials*/}
      <div className="d-flex justify-content-center align-items-center my-5 flex-column">
        <h1>Our Testimonials</h1>
        <div className="d-flex justify-content-evenly align-items-center mt-3 w-100">
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Text className='d-flex justify-content-center  align-items-center flex-column'>
          <img width={'60px'} height={'60p'} className='rounded-circle img-fluid' src="https://th.bing.com/th/id/OIP.K8RnAzAXWNC99OFVv0dX6wAAAA?rs=1&pid=ImgDetMain" alt="" />
          <div  className="d-flex justify-content-center my-2">
            <i className='fa-solid fa-star text-warning'></i>
            <i className='fa-solid fa-star text-warning'></i>
            <i className='fa-solid fa-star text-warning'></i>
            <i className='fa-solid fa-star text-warning'></i>

          </div>
         <p style={{textAlign:'justify'}}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
         </p>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Text className='d-flex justify-content-center  align-items-center flex-column'>
          <img width={'60px'} height={'60p'} className='rounded-circle img-fluid' src="https://img.freepik.com/premium-vector/avatar-male-manager-office-worker_805465-4.jpg" alt="" />
          <div  className="d-flex justify-content-center my-2">
            <i className='fa-solid fa-star text-warning'></i>
            <i className='fa-solid fa-star text-warning'></i>
            <i className='fa-solid fa-star text-warning'></i>
            <i className='fa-solid fa-star text-warning'></i>

          </div>
         <p style={{textAlign:'justify'}}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
         </p>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Text className='d-flex justify-content-center  align-items-center flex-column'>
          <img width={'60px'} height={'60p'} className='rounded-circle img-fluid' src="https://static.vecteezy.com/system/resources/previews/004/607/791/large_2x/man-face-emotive-icon-smiling-male-character-in-blue-shirt-flat-illustration-isolated-on-white-happy-human-psychological-portrait-positive-emotions-user-avatar-for-app-web-design-vector.jpg" alt="" />
          <div  className="d-flex justify-content-center my-2">
            <i className='fa-solid fa-star text-warning'></i>
            <i className='fa-solid fa-star text-warning'></i>
            <i className='fa-solid fa-star text-warning'></i>
            <i className='fa-solid fa-star text-warning'></i>

          </div>
         <p style={{textAlign:'justify'}}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
         </p>
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
      </div>
   </>


  
  
  )
}

export default Home