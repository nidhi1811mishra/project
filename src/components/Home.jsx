import React from 'react'
import './home.css'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className='home '>
        <header className='home-header'>

          <button className='btn btn-primary login text-' ><a href="http://localhost:3000/login"></a>login</button>

          <h1 className='text-center display-3 fw-bold py-3'>Welcome to HomeyCured</h1>
          <h5 className='text-center '><b>Make Your Home beautiful</b></h5>
          <h3 className='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias ipsa sapiente dignissimos.</h3>

        </header>
      </div>
      <div className='firstdiv d-flex'>
        <div className='first-img'>
          <img src="https://img.freepik.com/free-photo/couple-choosing-fabric-furniture-store_1157-37468.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1697155200&semt=ais" alt="" />
        </div>
        <div className='first-div-header'>
          <div className='first'>
            <h3 className='' >Live in Style</h3>
            <h6 className=''>With</h6>
            <h1 className=''><b>HomeyCured</b></h1>
            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Pariatur fugiat commodi impedit ipsum temporibus ea?</p>
            <Link className='btn btn-primary' to="/signup">SignUp</Link>
          </div>
        </div>
      </div>


      <div className='about'>
        <div className='about-header'>
          <h1 className='fw-bold py-3'>About HomeyCured</h1>
          <div className='about-2'>
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, cumque.</h5>
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quia quam rem, id ea quod dolor culpa dignissimos tempora dolorem explicabo</h6>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa temporibus natus blanditiis consectetur commodi nobis sed eligendi quos dolorem! Nostrum!</p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic maiores eaque pariatur mollitia nulla enim rem dignissimos aperiam quidem, tenetur unde dolore aut obcaecati autem?
          </div>

        <section className="mb-4 text-center mt-5">
          {/* Facebook */}
          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#3b5998" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-facebook-f" />
          </a>
          {/* Twitter */}
          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#55acee" }}
            to="/signup"
            role="button"
          >
            <i className="fab fa-twitter" />
          </a>
          {/* Google */}
          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#dd4b39" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-google" />
          </a>
          {/* Instagram */}
          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#ac2bac" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-instagram" />
          </a>
          {/* Linkedin */}
          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#0082ca" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-linkedin-in" />
          </a>
          {/* Github */}
          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#333333" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-github" />
          </a>
        </section>
        </div>


      </div>


    </div>
  )
}

export default Home;