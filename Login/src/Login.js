import React from 'react';
import './Login.css'

function Login(props) {

  function mostrarMensagem(){
    alert('O nome do usuário e/ou senha está invalido.');
  }


  return (
    <div className="App">
      <form className="form">
        <div className='usuario'>
          <input type='texto' name='usuario' placeholder='Nome do Usuario' />
        </div>
        <div className='senha'>
          <input type='passsword' name='senha' placeholder='Digite sua senha' />
        </div>
        <button className='botao' onClick={() => mostrarMensagem()}>LOGIN</button>
        <p>Esqueceu sua senha? <a target="_blank" href="https://www.youtube.com/">Clique Aqui {props.icon}</a></p>

      </form>

    </div>
  );
  }
  
  export default Login;
