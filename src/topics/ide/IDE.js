import React from 'react';
import HotKeys from './HotKeys';
import textStyles from '../../css/Text.module.css';
import basicStyles from '../../css/Default.module.css';

const IDE = () => (
    <>
        <h1 className={textStyles.header}>Работа в средах разработки</h1>
        <hr className={basicStyles.separator} />
        <div className={textStyles.description}>Изучаем среды разработки от JetBrains</div>
        <hr className={basicStyles.separator} />
        <div>
            <HotKeys />
        </div>
    </>
);

export default IDE;
