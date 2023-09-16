import React from 'react';
import BasicCard from '../BasicCard';
import lang from '../img/lang.png';
import { navToUrl } from '../hooks';

export default function FormalLangsCard() {
    return <BasicCard img={lang} description="Тема: основы формальных языков" title="Допсем #1" handler={navToUrl('/mlta/1')} />;
}
