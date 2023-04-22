import React from 'react';
import textStyles from '../../../css/Text.module.css';
import toolchain from './img/toolchain.png';
import basicStyles from '../../../css/Default.module.css';

const Toolchain = () => (
    <>
        <h5 className={textStyles.header}>Тулчейны</h5>
        <div className={textStyles.block}>
            &emsp;Чтобы создать тулчейн, надо перейти в{' '}
            <div className={textStyles.highlightLight}>Settings -&gt; Build,&nbsp;Execution,&nbsp;Deployment -&gt; Toolchains</div>. Потом нужно
            нажать на <div className={textStyles.highlightLight}>+</div>, после чего выбрать вид тулчейна.
            <br />
            <div className={textStyles.quote}>Обратите внимание, что docker toolchain появился в версии 2021.3</div>
            Придется немного подождать, пока пройдут все проверки, после чего можно будет уже нажать{' '}
            <div className={textStyles.highlightLight}>OK</div> или <div className={textStyles.highlightLight}>Apply</div> - тулчейн готов!
        </div>
        <div className={textStyles.block}>
            <img src={toolchain} alt="toolchain" className={basicStyles.picture} />
            <br />
            &emsp;
            <div className={textStyles.pictureDescription}>Окно настройки тулчейнов</div>
        </div>
    </>
);

export default Toolchain;
