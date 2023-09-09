import React from 'react';
import mlta from './img/set-theory.png';
import AnchorCard from './AnchorCard';

export default function MltaCard() {
    return (
        <AnchorCard img={mlta} description="Материалы допсеминаров по математической логики" title="Допсеминары по Матлогу" url="/mlta" anchor="5" />
    );
}
