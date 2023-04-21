import React from 'react';
import textStyles from '../../../css/Text.module.css';
import basicStyles from '../../../css/Default.module.css';
import docker from './img/docker.png';
import options from './img/options.png';
import container from './img/container.png';

const Docker = () => (
    <>
        <h3 className={textStyles.header}>Встроенная работа с docker</h3>

        {/* <h5 className={textStyles.header}>Подключение к базе данных</h5> */}
        <div className={textStyles.block}>
            &emsp;В панели <div className={textStyles.highlight}>Services</div> выберите <div className={textStyles.highlightLight}>Docker</div>
            <br />
            <img src={docker} alt="docker" className={basicStyles.picture} />
            <br />
            &emsp;Там можно увидеть все локальные контейнеры и скачанные образы
            <br />
        </div>

        <h5 className={textStyles.header}>Работа с контейнером</h5>
        <div className={textStyles.block}>
            &emsp;Нажав на контейнер откроется подробная информация о нем:
            <br />
            <img src={container} alt="container info" className={basicStyles.picture} />
            <br />
            &emsp;Вкладки
            <br />
            <div className={textStyles.highlight}>Build Log</div> - логи сборки
            <br />
            <div className={textStyles.highlight}>Log</div> - логи с запуска контейнера
            <br />
            <div className={textStyles.highlight}>Properties</div> - свойства контейнера
            <br />
            <div className={textStyles.highlight}>Environment variables</div> - переменные окружения контейнера
            <br />
            <div className={textStyles.highlight}>Port Bindings</div> - прокинутые порты
            <br />
            <div className={textStyles.highlight}>Volume Bindings</div> - прокинутые файлы
            <br />
            <div className={textStyles.highlight}>File</div> - файловая система контейнера
        </div>
        <div className={textStyles.block}>
            &emsp;Правый клик мышки по контейнеру открывает дополнительные действия:
            <br />
            <img src={options} alt="container actions" className={basicStyles.picture} />
            <br />
            &emsp;
            <div className={textStyles.pictureDescription}>
                Среди них (пере)запуск, остановка контейнера; выполнение различных команд, создание терминала
            </div>
        </div>
    </>
);

export default Docker;
