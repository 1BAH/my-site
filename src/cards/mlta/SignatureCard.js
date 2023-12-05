import React from 'react';
import BasicCard from '../BasicCard';
import img from '../img/signature.png';
import { navToUrl } from '../hooks';

export default function SignatureCard() {
    return <BasicCard img={img} description="Тема: языки первого порядка" title="[МЛТА] Допсем #6" handler={navToUrl('/mlta/6')} />;
}
