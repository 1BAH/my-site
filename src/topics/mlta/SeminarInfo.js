import React from 'react';
import { useParams } from 'react-router-dom';
import Sem1 from './Sem1';
import Empty from './Empty';
import Sem2 from './Sem2';

const SeminarInfo = () => {
    const { id } = useParams();

    switch (id) {
        case '1':
            return <Sem1 />;
        case '2':
            return <Sem2 />;
        default:
            return <Empty />;
    }
};

export default SeminarInfo;
