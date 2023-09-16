import React from 'react';
import textStyles from '../../../css/Text.module.css';
import choice from './img/choice.png';
import setup from './img/setup.png';
import schemas from './img/schemas.png';
import tables from './img/tables.png';
import select from './img/select.png';
import result from './img/result.png';
import Img from '../../../utils/Image';

const Database = () => (
    <>
        <h3 className={textStyles.header}>Встроенная работа с базами данных</h3>

        <h5 className={textStyles.header}>Подключение к базе данных</h5>
        <div className={textStyles.block}>
            &emsp;Откройте панель <div className={textStyles.highlight}>Database</div>, находящуюся справа. Нажмите на{' '}
            <div className={textStyles.highlight}>+</div> и выберите нужный дистрибутив:
            <br />
            <Img img={choice} width={50} />
            &emsp;Далее введите все параметры настройки. Проверьте, что соединение установлено.
            <br />
            <Img img={setup} width={50} />
        </div>

        <h5 className={textStyles.header}>Работа с базой данных</h5>
        <div className={textStyles.block}>
            &emsp;В панели можно выбрать, какие схемы показыть, а какие нет.
            <Img img={schemas} width={50} />
            &emsp;Нажав на название схемы, появятся все ее таблицы. Нажав на таблицу, откроется окно, где появятся все данные по ней
            <Img img={tables} width={75} />
            &emsp;В окне <div className={textStyles.highlight}>console</div> можно писать запросы:
            <Img img={select} width={50} />
            &emsp;<div className={textStyles.pictureDescription}>Вот такой ответ будет получен, после выполнения запроса:</div>
            <Img img={result} width={75} />
        </div>
    </>
);

export default Database;
