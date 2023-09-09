import React from 'react';
import BasicCard from './BasicCard';
import gdb from './img/gdb.svg';
import { navToUrl } from './hooks';

export default function GdbCard() {
    return <BasicCard img={gdb} description="Отладка с помощью gdb" title="gdb" handler={navToUrl('/gdb')} />;
}
