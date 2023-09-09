import React from 'react';
import BasicCard from '../BasicCard';
import clion from '../img/clion.png';
import { navToUrl } from '../hooks';

export default function CLionCard() {
    return <BasicCard img={clion} description="Горячие клавищи в CLion" title="CLion" handler={navToUrl('/ide')} />;
}
