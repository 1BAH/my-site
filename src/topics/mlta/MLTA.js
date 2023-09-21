import React from 'react';
import styles from '../../css/Text.module.css';
import Cards from '../../cards/Cards';
import FormalLangsCard from '../../cards/mlta/FormalLangsCard';
import OktchCard from '../../cards/mlta/OktchCard';
import Template from '../../pages/Template';
import ProposalCard from '../../cards/mlta/ProposalCard';

const MLTA = () => {
    const autumn = [<OktchCard />, <FormalLangsCard />, <ProposalCard />];

    return (
        <Template title="JK Допсемы по матлогу" description="Материалы допсеминаров по матлогу">
            <h1 className={styles.header}>Материалы с допсеминаров по Математической логике</h1>

            <div className={styles.block}>
                <h3 className={styles.header}>Осень 2023</h3>
                <Cards cards={autumn} />
            </div>
        </Template>
    );
};

export default MLTA;
