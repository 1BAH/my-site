import React from 'react';
import BasicCard from '../BasicCard';
import idea from '../img/idea.png';
import { navToUrl } from '../hooks';

export default function IdeaCard() {
    return <BasicCard img={idea} description="Горячие клавищи в IDEA" title="Intellij IDEA" handler={navToUrl('/ide')} />;
}
