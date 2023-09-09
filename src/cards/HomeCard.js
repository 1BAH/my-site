import React from 'react';
import BasicCard from './BasicCard';
import home from './img/homepage.png';
import { navToUrl } from './hooks';

export default function HomeCard() {
    return <BasicCard img={home} description="Домашняя страница" title="Homepage" handler={navToUrl('/home')} />;
}
