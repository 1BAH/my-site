import React from 'react';
import sad from './sad.png';
import textStyles from '../../css/Text.module.css';
import Img from '../../utils/Image';

const Empty = () => (
    <>
        <h1 className={textStyles.header}>Такого допсеминара не было!</h1>

        <Img img={sad} width={50} />
    </>
);

export default Empty;
