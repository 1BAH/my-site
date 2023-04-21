import React from 'react';
import textStyles from '../../../css/Text.module.css';
import basicStyles from '../../../css/Default.module.css';
import choice from './img/choice.png';
import setup from './img/setup.png';
import schemas from './img/schemas.png';
import tables from './img/tables.png';
import select from './img/select.png';
import result from './img/result.png';

const Database = () => (
    <>
        <h3 className={textStyles.header}>Встроенная работа с базами данных</h3>

        <h5 className={textStyles.header}>Подключение к базе данных</h5>
        <div className={textStyles.block}>
            &emsp;Откройте панель <div className={textStyles.highlight}>Database</div>, находящуюся справа. Нажмите на{' '}
            <div className={textStyles.highlight}>+</div> и выберите нужный дистрибутив:
            <br />
            <img src={choice} alt="choose database" className={basicStyles.picture} />
            <br />
            &emsp;Далее введите все параметры настройки. Проверьте, что соединение установлено.
            <br />
            <img src={setup} alt="set up connection" className={basicStyles.picture} />
        </div>

        <h5 className={textStyles.header}>Работа с базой данных</h5>
        <div className={textStyles.block}>
            &emsp;В панели можно выбрать, какие схемы показыть, а какие нет.
            <br />
            <img src={schemas} alt="choose database" className={basicStyles.picture} />
            <br />
            &emsp;Нажав на название схемы, появятся все ее таблицы. Нажав на таблицу, откроется окно, где появятся все данные по ней
            <br />
            <img src={tables} alt="table" className={basicStyles.picture} />
            <br />
            &emsp;В окне <div className={textStyles.highlight}>console</div> можно писать запросы:
            <br />
            <img src={select} alt="select" className={basicStyles.picture} />
            <br />
            &emsp;<div className={textStyles.pictureDescription}>Вот такой ответ будет получен, после выполнения запроса:</div>
            <br />
            <img src={result} alt="result" className={basicStyles.picture} />
        </div>
    </>
);

export default Database;
