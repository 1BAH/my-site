import React from 'react';
import BasicCard from '../BasicCard';
import checkstyle from '../img/checkstyle.png';
import { navToIdePage } from '../hooks';

export default function CheckStyleCard() {
    return <BasicCard img={checkstyle} description="CheckStyle плагин в Intellij IDEA" title="CheckStyle" handler={navToIdePage(3)} />;
}
