import React from 'react';
import BasicCard from '../BasicCard';
import keypad from '../img/keypad.png';
import { navToIdePage } from '../hooks';

export default function HotkeysCard() {
    return (
        <BasicCard img={keypad} description="Горячие клавищи в средах разработки от JetBrains" title="Горячие клавиши" handler={navToIdePage(0)} />
    );
}
