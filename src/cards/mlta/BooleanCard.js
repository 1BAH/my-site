import React from 'react';
import BasicCard from '../BasicCard';
import bool from '../img/lattice.png';
import { navToUrl } from '../hooks';

export default function ProposalCard() {
    return <BasicCard img={bool} description="Тема: булевы функции" title="[МЛТА] Допсем #3" handler={navToUrl('/mlta/3')} />;
}
