import React from 'react';
import BasicCard from '../BasicCard';
import bool from '../img/le.png';
import { navToUrl } from '../hooks';

export default function OrderCard() {
    return <BasicCard img={bool} description="Тема: порядки" title="[МЛТА] Допсем #9" handler={navToUrl('/mlta/9')} />;
}
