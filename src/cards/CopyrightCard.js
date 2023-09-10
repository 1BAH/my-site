import React from 'react';
import BasicCard from './BasicCard';
import cr from './img/copyright.png';
import { navToUrl } from './hooks';

export default function CopyrightCard() {
    return <BasicCard img={cr} description="Авторские права" title="Copyright" handler={navToUrl('/copyright')} />;
}
