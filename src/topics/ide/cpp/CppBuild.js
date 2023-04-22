import React from 'react';
import textStyles from '../../../css/Text.module.css';
import Toolchain from './Toolchain';
import BuildProfile from './BuildProfile';

const CppBuild = () => (
    <>
        <h3 className={textStyles.header}>Продвинутая сборка в CLion</h3>

        <div className={textStyles.block} style={{ fontStyle: 'italic' }}>
            &emsp;Не редко приходится по разному собирать файлы: добавить санитайзеры, опции компиляции. Для этого в CLion придуман механизм профилей
            сборки. Но это не все, помимо различных опций компиляции также крайне важна платформа, на которой осуществляется сборка и запуск, поэтому
            были разработаны тулчейны.
        </div>
        <Toolchain />
        <BuildProfile />
    </>
);

export default CppBuild;
