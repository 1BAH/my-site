import React from 'react';
import BasicCard from '../BasicCard';
import docker from '../img/docker.png';
import { navToIdePage } from '../hooks';

export default function DockerCard() {
    return <BasicCard img={docker} description="Docker плагин" title="Docker" handler={navToIdePage(2)} />;
}
