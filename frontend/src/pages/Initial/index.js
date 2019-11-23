import React from 'react';

export default function Initial({ history }) {
    return (
        <>
            <p>Escolha qual Web Service você deseja testar</p>
            <button onClick={() => history.push('/computers')}>
                Disponibilidade dos computadores da Sala de Pesquisa
          </button>
            <button>
                Web Service 2
          </button>
            <button>
                Web Service 3
          </button>
        </>
    );
}