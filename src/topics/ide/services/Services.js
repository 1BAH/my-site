import React from 'react';
import textStyles from '../../../css/Text.module.css';
import services from './img/servises.png';
import Img from '../../../utils/Image';

const Services = () => (
    <>
        <h3 className={textStyles.header}>Встроенные сервисы</h3>

        <div className={textStyles.block}>
            &emsp;Внизу доступна панель <div className={textStyles.highlight}>Services</div>. С ее помощью можно мониторить состояние различных
            сервисов <br />
            <Img img={services} width={100} />
            &emsp;Теперь подробнее поговорим про них.
        </div>
    </>
);

export default Services;
