import React from 'react';
import BasicCard from '../BasicCard';
import db from '../img/db.png';
import { navToIdePage } from '../hooks';

export default function DatabaseCard() {
    return <BasicCard img={db} description="Работа с базами данных внутри JetBrains IDE" title="Базы данных в JB IDE" handler={navToIdePage(1)} />;
}
