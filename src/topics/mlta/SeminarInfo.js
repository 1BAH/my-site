import React from 'react';
import { useParams } from 'react-router-dom';
import Sem1 from './Sem1';
import Empty from './Empty';
import Sem2 from './Sem2';
import Sem3 from './Sem3';

const SeminarInfo = () => {
    const { id } = useParams();

    switch (id) {
        case '1':
            return <Sem1 />;
        case '2':
            return <Sem2 />;
        case '3':
            return <Sem3 />;
        default:
            return <Empty />;
    }
};

export default SeminarInfo;
