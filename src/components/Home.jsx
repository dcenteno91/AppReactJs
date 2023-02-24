import React from 'react';
import logo from '../assets/img/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div className='App'>
      <section className='App-content'>
        <div className='col-3 d-flex align-items-center justify-content-center'>
          <div className='text-center text-md-center mb-4 mt-md-0'>
            <h1>Página de inicio</h1>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home;