import React from 'react';
import textStyles from '../../../css/Text.module.css';
import basicStyles from '../../../css/Default.module.css';
import plugin from './img/plugin.png';
import settings from './img/settings.png';
import setup from './img/setup.png';
import panel from './img/panel.png';
import file from './img/file.png';
import choice from './img/choice.png';
import errors from './img/errors.png';
import run from './img/run.png';
import reload from './img/reload.png';

const CheckStyle = () => (
    <>
        <h3 className={textStyles.header}>Настройка CheckStyle в IDEA</h3>

        <div className={textStyles.block}>
            &emsp;Установите плагин <div className={textStyles.highlightLight}>CheckStyle-IDEA</div>
            <br />
            <img src={plugin} alt="plugin" className={basicStyles.picture} />
            <br />
            &emsp;После, возможно, понадобится перезагрузить приложение
            <br />
            &emsp;Когда плагин установлен перейдите в{' '}
            <div className={textStyles.highlightLight}>Project -&gt; Settings -&gt; Tools -&gt; Checkstyle</div>
            <br />
            <img src={settings} alt="settings" className={basicStyles.picture} />
            <br />
            &emsp;Там нажмите на <div className={textStyles.highlightLight}>+</div>
            <br />
            <img src={setup} alt="set uo plugin" className={basicStyles.picture} />
            <br />
            &emsp;Выберете пункт <div className={textStyles.highlightLight}>local Checkstyle file</div> и укажите путь до него, после чего нажмите на{' '}
            <div className={textStyles.highlightLight}>Next</div>. После нажмите на <div className={textStyles.highlightLight}>Finish</div>. Далее
            необходимо нажать на <div className={textStyles.highlightLight}>Apply</div> и <div className={textStyles.highlightLight}>OK</div>
            <br />
            <img src={file} alt="set uo plugin" className={basicStyles.picture} />
            <br />
            <div className={textStyles.quote}>На этом настройка завершена</div>
        </div>

        <h5 className={textStyles.header}>Работа с панелью линтера</h5>
        <div className={textStyles.block}>
            &emsp;Теперь внизу доступна панель <div className={textStyles.highlightLight}>CheckStyle</div>
            <br />
            <img src={panel} alt="panel" className={basicStyles.picture} />
            <br />
            &emsp;В ней доступны различные действия
            <br />
            <br />
            &emsp;<div className={textStyles.pictureDescription}>Выбрать кодстайл:</div>
            <br />
            <img src={choice} alt="choice code style" className={basicStyles.picture} />
            <br />
            &emsp;<div className={textStyles.pictureDescription}>Выбрать тип показываемых ошибок (info, warning, error):</div>
            <br />
            <img src={errors} alt="errors" className={basicStyles.picture} />
            <br />
            &emsp;<div className={textStyles.pictureDescription}>Запустить линтер на текущем файле, модуле, проекте:</div>
            <br />
            <img src={run} alt="run checkstyle" className={basicStyles.picture} />
            <br />
            &emsp;<div className={textStyles.pictureDescription}>Обновить правила проверки:</div>
            <br />
            <img src={reload} alt="reload rules" className={basicStyles.picture} />
        </div>
    </>
);

export default CheckStyle;
