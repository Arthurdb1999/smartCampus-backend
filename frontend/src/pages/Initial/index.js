import React from 'react';
import './index.css';

export default function Initial({ history }) {
    return (
        <ul className = 'conteiner'>
            <h1>
                <br></br>
                <br></br>
                <br></br>
                Escolha qual Web Service você deseja testar</h1>
            <button className="btn1" onClick={() => history.push('/computers')}>
                Disponibilidade dos computadores da Sala de Pesquisa
          </button>
            <button className="btn2">
                Web Service 2
          </button>
            <button className="btn3">
                Web Service 3
          </button>
        </ul>
    );
}