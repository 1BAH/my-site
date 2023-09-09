import React from 'react';
import textStyles from '../../../css/Text.module.css';
import Navigation from './Navigation';
import FindReplace from './FindReplace';
import Refactoring from './Refactoring';

const HotKeys = () => (
    <>
        <h2 className={textStyles.header}>Комбинации клавиш</h2>
        <div className={textStyles.header}>&nbsp;</div>
        <div className={textStyles.block}>
            <div className={textStyles.quote} style={{ fontSize: 'medium' }}>
                <div className={textStyles.highlight}>ctrl + alt + s</div> - настройки. Самая важная комбинация!
                <br />
                <div className={textStyles.highlight}>shift + shift</div> - глобальный поиск. Не менее важная комбинация!
            </div>
        </div>
        <Navigation />

        <div className={textStyles.header}>&nbsp;</div>
        <FindReplace />

        <div className={textStyles.header}>&nbsp;</div>
        <Refactoring />
    </>
);

export default HotKeys;
