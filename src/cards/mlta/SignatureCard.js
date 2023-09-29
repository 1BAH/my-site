import React from 'react';
import BasicCard from '../BasicCard';
import img from '../img/signature.png';
import { navToUrl } from '../hooks';

export default function SignatureCard() {
    return <BasicCard img={img} description="Тема: сигнатуры и интерпретации" title="[МЛТА] Допсем #6" handler={navToUrl('/mlta/6')} />;
}
