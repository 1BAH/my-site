import React from 'react';
import BasicCard from '../BasicCard';
import img from '../img/3sat.png';
import { navToUrl } from '../hooks';

export default function ResolutionsCard() {
    return <BasicCard img={img} description="Тема: метод резолюций" title="[МЛТА] Допсем #5" handler={navToUrl('/mlta/5')} />;
}
