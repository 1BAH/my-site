import React from 'react';
import BasicCard from '../BasicCard';
import proposal from '../img/formula.png';
import { navToUrl } from '../hooks';

export default function ProposalCard() {
    return <BasicCard img={proposal} description="Тема: пропозициональные формулы" title="[МЛТА] Допсем #2" handler={navToUrl('/mlta/2')} />;
}
