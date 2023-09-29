import React from 'react';
import BasicCard from '../BasicCard';
import img from '../img/morphine.png';
import { navToUrl } from '../hooks';

export default function MorphismCard() {
    return <BasicCard img={img} description="Тема: морфизмы интерпретаций" title="[МЛТА] Допсем #7" handler={navToUrl('/mlta/7')} />;
}
