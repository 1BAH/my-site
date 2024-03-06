import React from 'react';
import GdbCard from '../cards/GdbCard';
import CheckStyleCard from '../cards/ide/CheckStyleCard';
import HomeCard from '../cards/HomeCard';
import CLionCard from '../cards/ide/ClionCard';
import IdeaCard from '../cards/ide/IdeaCard';
import DockerCard from '../cards/ide/DockerCard';
import DatabaseCard from '../cards/ide/DatabaseCard';
import HotkeysCard from '../cards/ide/HotkeysCard';
import MltaCard from '../cards/MltaCard';
import TicTacToeCard from '../cards/TicTacToeCard';
import CopyrightCard from '../cards/CopyrightCard';
import FormalLangsCard from '../cards/mlta/FormalLangsCard';
import OktchCard from '../cards/mlta/OktchCard';
import ProposalCard from '../cards/mlta/ProposalCard';
import BooleanCard from '../cards/mlta/BooleanCard';
import PropCalcCard from '../cards/mlta/PropCalcCard';
import ResolutionsCard from '../cards/mlta/ResolutionsCard';
import SignatureCard from '../cards/mlta/SignatureCard';
import MorphismCard from '../cards/mlta/MorphismCard';
import PredCalcCard from '../cards/mlta/PredCalcCard';
import OrderCard from '../cards/mlta/OrderCard';
import OmegaCard from '../cards/mlta/OmegaCard';

export const pages = {
    'отладка дебаг gdb': {
        name: 'GDB',
        value: <GdbCard />,
    },
    'домашняя страница homepage': {
        name: 'Homepage',
        value: <HomeCard />,
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
    'матлог математическая логика допсеминары': {
        name: 'Seminars',
        value: <MltaCard />,
    },
    '@': {
        name: 'TicTacToe',
        value: <TicTacToeCard />,
    },
    'авторские права copyright': {
        name: 'Copyright',
        value: <CopyrightCard />,
    },
    'допсеминар формальные языки матлогика': {
        name: 'Formal',
        value: <FormalLangsCard />,
    },
    'допсеминар пропозициональные формулы матлогика': {
        name: 'Proposal',
        value: <ProposalCard />,
    },
    'допсеминар булевы функции матлогика': {
        name: 'Booleans',
        value: <BooleanCard />,
    },
    'допсеминар исчисление предикатов ив матлогика': {
        name: 'ProposalCalc',
        value: <PropCalcCard />,
    },
    'допсеминар метод резолюций резолюция матлогика': {
        name: 'Resolution',
        value: <ResolutionsCard />,
    },
    'допсеминар сигнатуры сигнатура интерпретации интерпретация матлогика': {
        name: 'Signature',
        value: <SignatureCard />,
    },
    'допсеминар морфизмы интерпретаций интерпретация интепретации игра эренфойхта  матлогика': {
        name: 'Morphism',
        value: <MorphismCard />,
    },
    'допсеминар исчисление предикатов матлогика': {
        name: 'PredicateCalc',
        value: <PredCalcCard />,
    },
    'допсеминар теоретико множественные операции октч теория множеств': {
        name: 'SetTheory',
        value: <OktchCard />,
    },
    'допсеминар порядки фундированность вполне упорядоченность матлогика': {
        name: 'Orders',
        value: <OrderCard />,
    },
    'допсеминар ординалы порядковый тип матлогика': {
        name: 'Orders',
        value: <OmegaCard />,
    },
};

export const topics = {
    hotkeys: '',
};
