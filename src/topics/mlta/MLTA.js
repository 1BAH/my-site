import React from 'react';
import styles from '../../css/Text.module.css';
import title from '../../hooks/title';
import Cards from '../../cards/Cards';
import FormalLangsCard from '../../cards/mlta/FormalLangsCard';

const MLTA = () => {
    title('JK Допсемы по матлогу');

    const autumn = [<FormalLangsCard />];

    return (
        <>
            <h1 className={styles.header}>Материалы с допсеминаров по Математической логике</h1>

            <div className={styles.block}>
                <h3 className={styles.header}>Осень 2023</h3>
                <Cards cards={autumn} />
            </div>
        </>
    );
};

export default MLTA;
