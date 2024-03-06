import React from 'react';
import BasicCard from '../BasicCard';
import img from '../img/omega.png';
import { navToUrl } from '../hooks';

export default function OmegaCard() {
    return <BasicCard img={img} description="Тема: ординалы" title="[МЛТА] Допсем #10" handler={navToUrl('/mlta/10')} />;
}
