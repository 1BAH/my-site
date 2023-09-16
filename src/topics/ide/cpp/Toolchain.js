import React from 'react';
import textStyles from '../../../css/Text.module.css';
import toolchain from './img/toolchain.png';
import Img from '../../../utils/Image';

const Toolchain = () => (
    <>
        <h5 className={textStyles.header}>Тулчейны</h5>
        <div className={textStyles.block}>
            &emsp;Чтобы создать тулчейн, надо перейти в{' '}
            <div className={textStyles.highlightLight}>Settings -&gt; Build, Execution, Deployment -&gt; Toolchains</div>. Потом нужно нажать на{' '}
            <div className={textStyles.highlightLight}>+</div>, после чего выбрать вид тулчейна.
            <br />
            <div className={textStyles.quote}>Обратите внимание, что docker toolchain появился в версии 2021.3</div>
            Придется немного подождать, пока пройдут все проверки, после чего можно будет уже нажать{' '}
            <div className={textStyles.highlightLight}>OK</div> или <div className={textStyles.highlightLight}>Apply</div> - тулчейн готов!
        </div>
        <div className={textStyles.block}>
            <Img img={toolchain} width={90} />
            &emsp;
            <div className={textStyles.pictureDescription}>Окно настройки тулчейнов</div>
        </div>
    </>
);

export default Toolchain;
