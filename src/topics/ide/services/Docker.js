import React from 'react';
import textStyles from '../../../css/Text.module.css';
import docker from './img/docker.png';
import options from './img/options.png';
import container from './img/container.png';
import Img from '../../../utils/Image';

const Docker = () => (
    <>
        <h3 className={textStyles.header}>Встроенная работа с docker</h3>

        <div className={textStyles.block}>
            &emsp;В панели <div className={textStyles.highlight}>Services</div> выберите <div className={textStyles.highlightLight}>Docker</div>
            <br />
            <Img img={docker} width={70} />
            &emsp;Там можно увидеть все локальные контейнеры и скачанные образы
            <br />
        </div>

        <h5 className={textStyles.header}>Работа с контейнером</h5>
        <div className={textStyles.block}>
            &emsp;Нажав на контейнер откроется подробная информация о нем:
            <br />
            <Img img={container} width={70} />
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
            <Img img={options} width={70} />
            <div className={textStyles.pictureDescription}>
                Среди них (пере)запуск, остановка контейнера; выполнение различных команд, создание терминала
            </div>
        </div>
    </>
);

export default Docker;
