import React from 'react';
import BasicCard from '../BasicCard';
import jet from '../img/jet.png';
import { navToUrl } from '../hooks';

export default function JetCard() {
    return <BasicCard img={jet} description="Горячие клавищи в средах разработки от JetBrains" title="Intellij jet" handler={navToUrl('/ide')} />;
}
