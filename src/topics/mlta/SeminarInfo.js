import React from 'react';
import { useParams } from 'react-router-dom';
import Sem1 from './Sem1';
import Empty from './Empty';

const SeminarInfo = () => {
    const { id } = useParams();

    switch (id) {
        case '1':
            return <Sem1 />;
        default:
            return <Empty />;
    }
};

export default SeminarInfo;
