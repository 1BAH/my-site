import React from 'react';
import { useParams } from 'react-router-dom';
import Sem1 from './Sem1';
import Empty from '../Empty';
import Sem2 from './Sem2';
import Sem3 from './Sem3';
import Sem8 from './Sem8';
import Sem4 from './Sem4';
import Sem5 from './Sem5';
import Sem6 from './Sem6';
import Sem7 from './Sem7';

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
        default:
            return <Empty />;
    }
};

export default SeminarInfo;
