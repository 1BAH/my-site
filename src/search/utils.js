import React from 'react';
import GdbCard from '../cards/GdbCard';
import CheckStyleCard from '../cards/ide/CheckStyleCard';
import JetCard from '../cards/ide/JetCard';
import HomeCard from '../cards/HomeCard';
import CLionCard from '../cards/ide/ClionCard';
import IdeaCard from '../cards/ide/IdeaCard';
import DockerCard from '../cards/ide/DockerCard';
import DatabaseCard from '../cards/ide/DatabaseCard';
import HotkeysCard from '../cards/ide/HotkeysCard';

export const pages = {
    'отладка дебаг gdb': {
        name: 'GDB',
        value: <GdbCard />,
    },
    'домашняя страница homepage': {
        name: 'Homepage',
        value: <HomeCard />,
    },
    'jetbrains ide среда разработки': {
        name: 'IDE',
        value: <JetCard />,
    },
    'clion ide среда разработки': {
        name: 'CLION',
        value: <CLionCard />,
    },
    'intellij idea среда разработки': {
        name: 'IDEA',
        value: <IdeaCard />,
    },
    'checkstyle linter линтер intellij idea': {
        name: 'CheckStyle',
        value: <CheckStyleCard />,
    },
    'docker докеризация контейнеризация': {
        name: 'Docker',
        value: <DockerCard />,
    },
    'database базы данных': {
        name: 'Database',
        value: <DatabaseCard />,
    },
    'hotkeys горячие клавиши jetbrains ide': {
        name: 'Hotkeys',
        value: <HotkeysCard />,
    },
};

export const topics = {
    hotkeys: '',
};