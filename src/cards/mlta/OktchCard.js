import React from 'react';
import BasicCard from '../BasicCard';
import sets from '../img/sets.png';
import { navToUrl } from '../hooks';

export default function OktchCard() {
    return <BasicCard img={sets} description="Тема: теоретико-множественные операции" title="[ОКТЧ] Допсем #1" handler={navToUrl('/oktch')} />;
}
