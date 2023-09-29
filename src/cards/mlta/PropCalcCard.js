import React from 'react';
import BasicCard from '../BasicCard';
import img from '../img/ponens.png';
import { navToUrl } from '../hooks';

export default function PropCalcCard() {
    return <BasicCard img={img} description="Тема: исчисление высказываний" title="[МЛТА] Допсем #4" handler={navToUrl('/mlta/4')} />;
}
