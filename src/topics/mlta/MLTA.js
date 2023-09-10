import React from 'react';
import Preview from './Preview';
import styles from '../../css/Text.module.css';
import title from '../../hooks/title';

const MLTA = () => {
    title('JK Допсемы по матлогу');

    return (
        <>
            <h1 className={styles.header}>Материалы с допсеминаров по Математической логике</h1>
            <Preview />
        </>
    );
};

export default MLTA;
