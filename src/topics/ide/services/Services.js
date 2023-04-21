import React from 'react';
import textStyles from '../../../css/Text.module.css';
import basicStyles from '../../../css/Default.module.css';
import services from './img/servises.png';

const Services = () => (
    <>
        <h3 className={textStyles.header}>Встроенные сервисы</h3>

        <div className={textStyles.block}>
            &emsp;Внизу доступна панель <div className={textStyles.highlight}>Services</div>. С ее помощью можно мониторить состояние различных
            сервисов <br />
            <img src={services} alt="choose database" className={basicStyles.picture} />
            <br />
            &emsp;Теперь подробнее поговорим про них.
        </div>
    </>
);

export default Services;
