import React from 'react';
import BasicCard from '../BasicCard';
import img from '../img/forall.png';
import { navToUrl } from '../hooks';

export default function PredCalcCard() {
    return <BasicCard img={img} description="Тема: исчисление предикатов" title="[МЛТА] Допсем #8" handler={navToUrl('/mlta/8')} />;
}
