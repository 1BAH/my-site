import React from 'react';
import textStyles from '../../../css/Text.module.css';
import buildProfile from './img/profile.png';
import basicStyles from '../../../css/Default.module.css';

const BuildProfile = () => (
    <>
        <h3 className={textStyles.header}>Профили сборки</h3>

        <div className={textStyles.block}>
            &emsp;Чтобы создать тулчейн, надо перейти в{' '}
            <div className={textStyles.highlightLight}>Settings -&gt; Build,&nbsp;Execution,&nbsp;Deployment -&gt; CMake</div>. Потом нужно нажать на{' '}
            <div className={textStyles.highlightLight}>+</div>. Далее необходимо настроить профиль сборки: указать его название, тип сборки, выбрать
            тулчейн для сборки, после чего можно передать опции как сборки, так и запуска
            <br />
        </div>

        <div className={textStyles.block}>
            <img src={buildProfile} alt="build profile" className={basicStyles.picture} />
            <br />
            &emsp;
            <div className={textStyles.pictureDescription}>Окно настройки профилей сборки</div>
        </div>
    </>
);

export default BuildProfile;
