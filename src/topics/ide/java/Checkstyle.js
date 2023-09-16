import React from 'react';
import textStyles from '../../../css/Text.module.css';
import plugin from './img/plugin.png';
import settings from './img/settings.png';
import setup from './img/setup.png';
import panel from './img/panel.png';
import file from './img/file.png';
import choice from './img/choice.png';
import errors from './img/errors.png';
import run from './img/run.png';
import reload from './img/reload.png';
import Img from '../../../utils/Image';

const CheckStyle = () => (
    <>
        <h3 className={textStyles.header}>Настройка CheckStyle в IDEA</h3>

        <div className={textStyles.block}>
            &emsp;Установите плагин <div className={textStyles.highlightLight}>CheckStyle-IDEA</div>
            <Img img={plugin} width={60} />
            &emsp;После, возможно, понадобится перезагрузить приложение &emsp;Когда плагин установлен перейдите в{' '}
            <div className={textStyles.highlightLight}>Project -&gt; Settings -&gt; Tools -&gt; Checkstyle</div>
            <Img img={settings} width={60} />
            &emsp;Там нажмите на <div className={textStyles.highlightLight}>+</div>
            <Img img={setup} width={90} />
            &emsp;Выберете пункт <div className={textStyles.highlightLight}>local Checkstyle file</div> и укажите путь до него, после чего нажмите на{' '}
            <div className={textStyles.highlightLight}>Next</div>. После нажмите на <div className={textStyles.highlightLight}>Finish</div>. Далее
            необходимо нажать на <div className={textStyles.highlightLight}>Apply</div> и <div className={textStyles.highlightLight}>OK</div>
            <Img img={file} width={100} />
            <div className={textStyles.quote}>На этом настройка завершена</div>
        </div>

        <h5 className={textStyles.header}>Работа с панелью линтера</h5>
        <div className={textStyles.block}>
            &emsp;Теперь внизу доступна панель <div className={textStyles.highlightLight}>CheckStyle</div>
            <Img img={panel} width={90} />
            &emsp;В ней доступны различные действия &emsp;<div className={textStyles.pictureDescription}>Выбрать кодстайл:</div>
            <Img img={choice} width={100} />
            &emsp;<div className={textStyles.pictureDescription}>Выбрать тип показываемых ошибок (info, warning, error):</div>
            <Img img={errors} width={40} />
            &emsp;<div className={textStyles.pictureDescription}>Запустить линтер на текущем файле, модуле, проекте:</div>
            <Img img={run} width={40} />
            &emsp;<div className={textStyles.pictureDescription}>Обновить правила проверки:</div>
            <Img img={reload} width={40} />
        </div>
    </>
);

export default CheckStyle;
