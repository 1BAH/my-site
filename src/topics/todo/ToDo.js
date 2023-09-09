import React from 'react';
import todo from './img/to-do-list.png';
import basicStyles from '../../css/Default.module.css';
import textStyles from '../../css/Text.module.css';

const ToDo = () => (
    <>
        <h3 className={textStyles.header}>Данная страница находится в разработке..</h3>
        <div style={{ textAlign: 'center' }}>
            <img src={todo} alt="docker" className={basicStyles.picture} />
        </div>
    </>
);

export default ToDo;
