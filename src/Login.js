import './App.css';
import React, { useState, useEffect } from 'react';
import LoginService from './services/loginService';
import logo from './assets/img/logo.png';
import './styles/loader-bouncing.css';
import { useHistory } from 'react-router-dom';

const Login = ({ setToken }) => {
  const history = useHistory()
  const [userName, setUsername] = useState('')
  const [password, setPassword] = useState('')  

  const Login = async () => {
    let data = {
      Username: userName,
      Password: password,
    };
    
    if (!data.Username || !data.Password) {
      alert(!data.Username ? "Usuario requerido" : "Passowrd requerido");
      return;
    }

    mostrarProgress(true);

    LoginService.LogIn(data)
      .then(async (response) => {
        setTimeout(() => {
          mostrarProgress(false);

          if (response) {            
            localStorage.setItem("token", response);
            setToken(response)
            history.push('/home')
          } else {
            alert("Usuario y contraseña incorrectos");
          }
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const mostrarProgress = (showProgress) => {
    let divLoading = document.getElementById('divLoading')

    if (showProgress && !divLoading.classList.contains('is-active')) {
        divLoading.classList.add('is-active');
    }

    if (!showProgress && divLoading.classList.contains('is-active')) {
        divLoading.classList.remove('is-active');
    }
  }

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      history.push('/home')
    }
  }, [])

  return (
    <div className="App">
      <div id="divLoading" className='loader loader-bouncing' data-text="Cargando"></div>

      <section className="App-content">
        <div className='col-3 d-flex align-items-center justify-content-center'>
          <div className='bground-white shadow rounded border-light p-4 p-lg-5 w-100 fmxw-500 div-login fadeInUp'>
            <div className='text-center text-md-center mb-4 mt-md-0'>
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            
            <div className='form-group mb-4'>                  
                <div className='input-group'>
                    <span className="input-group-text" id='basic-addon1'>
                        <svg className='icon icon-xs' fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"></path></svg>
                    </span>
                    <input type="text" className='form-control' placeholder="Nombre de usuario" id="usuario" onChange={(e) => setUsername(e.target.value)} required />
                </div>
            </div>            
            <div className='form-group mb-4'>                  
                <div className='input-group'>
                    <span className='input-group-text' id="basic-addon2">
                        <svg className='icon icon-xs' fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"></path></svg>
                    </span>
                    <input type="password" className='form-control' placeholder="Contraseña" id="contrasena" onChange={(e) => setPassword(e.target.value)} required />
                </div>
            </div>
            <div className='d-grid'>
              <button className='btn btn-success' onClick={Login}>Iniciar Sesión</button>
            </div>
           
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;