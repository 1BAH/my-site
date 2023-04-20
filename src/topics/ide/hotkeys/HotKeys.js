import React from 'react';
import textStyles from '../../../css/Text.module.css';
import Navigation from './Navigation';
import FindReplace from './FindReplace';
import Refactoring from './Refactoring';

const HotKeys = () => (
    <>
        <div className={textStyles.header}>&nbsp;</div>
        <h2 className={textStyles.header}>Комбинации клавиш</h2>
        <div className={textStyles.header}>&nbsp;</div>
        <Navigation />

        <div className={textStyles.header}>&nbsp;</div>
        <FindReplace />

        <div className={textStyles.header}>&nbsp;</div>
        <Refactoring />
    </>
);

export default HotKeys;
