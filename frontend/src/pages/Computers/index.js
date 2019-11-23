import React, { useEffect, useState } from 'react';
import api from '../../services/api';

export default function Computers() {

    const [computers, setComputers] = useState([]);

    useEffect(() => {
        async function handleResearchRoom() {
            const response = await api.get('/computers');
            setComputers(response.data);
        }

        handleResearchRoom();
    }, []);

    async function handleReserve(id) {
        // const response = await api.post('/computers', id);
        // setComputers(response.data);
    }

    //ver 1h e 27min do video, para trocar a cor do disponivel e indisponivel


    return (
        <>
            <button></button>
            <ul className="computers-list">
                {computers.map(computer => (
                    <li key={computer._id}>
                        <header>
                            {/*pegar uma imagenzinha de um PC na net */}
                        </header>
                        <strong>{computer.idPc}</strong>
                        <span>
                            {computer.disponivel === false && computer.montado === false
                                ? //then
                                'indisponivel'
                                : //else
                                computer.disponivel
                                    ? //then
                                    'disponivel'
                                    : //else
                                    'ocupado'
                            }
                        </span>
                        {computer.disponivel === false && computer.montado === false
                            ? //then
                            <button disabled>Ocupar</button>
                            : //else
                            computer.disponivel
                                ? //then
                                <button onClick={handleReserve(computer._id)}>
                                    Ocupar
                                        </button>
                                : //else
                                <button onClick={handleReserve(computer._id)}>
                                    Desocupar
                                        </button>
                        }
                    </li>
                ))}
            </ul>
        </>
    );
}