import React from 'react';
import { useParams } from 'react-router-dom';
import Sem1 from './autumn/Sem1';
import Empty from './Empty';
import Sem2 from './autumn/Sem2';
import Sem3 from './autumn/Sem3';
import Sem8 from './autumn/Sem8';
import Sem4 from './autumn/Sem4';
import Sem5 from './autumn/Sem5';
import Sem6 from './autumn/Sem6';
import Sem7 from './autumn/Sem7';
import Sem9 from './spring/Sem9';
import Sem10 from './spring/Sem10';

const SeminarInfo = () => {
    const { id } = useParams();

    switch (id) {
        case '1':
            return <Sem1 />;
        case '2':
            return <Sem2 />;
        case '3':
            return <Sem3 />;
        case '4':
            return <Sem4 />;
        case '5':
            return <Sem5 />;
        case '6':
            return <Sem6 />;
        case '7':
            return <Sem7 />;
        case '8':
            return <Sem8 />;
        case '9':
            return <Sem9 />;
        case '10':
            return <Sem10 />;
        default:
            return <Empty />;
    }
};

export default SeminarInfo;
