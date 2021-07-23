import React from 'react';
import './styles/global.scss';
import { Teste } from './components/Teste'
import Button from '@material-ui/core/Button';

export function App() {
    return (
        <div>
            <Button className="mainButton" onMouseEnter={alert('oi')} variant="contained">Cadastrar Usuário</Button>
            <Teste />
            
        </div>
    )
}