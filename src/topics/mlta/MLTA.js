/* eslint-disable no-unused-vars */
import React from 'react';
import styles from '../../css/Text.module.css';
import Cards from '../../cards/Cards';
import FormalLangsCard from '../../cards/mlta/FormalLangsCard';
import Template from '../../pages/Template';
import ProposalCard from '../../cards/mlta/ProposalCard';
import BooleanCard from '../../cards/mlta/BooleanCard';
import PropCalcCard from '../../cards/mlta/PropCalcCard';
import ResolutionsCard from '../../cards/mlta/ResolutionsCard';
import SignatureCard from '../../cards/mlta/SignatureCard';
import MorphismCard from '../../cards/mlta/MorphismCard';
import PredCalcCard from '../../cards/mlta/PredCalcCard';

const MLTA = () => {
    const autumn = [
        <FormalLangsCard />,
        <ProposalCard />,
        <BooleanCard />,
        // <PropCalcCard />,
        // <ResolutionsCard />,
        // <SignatureCard />,
        // <MorphismCard />,
        // <PredCalcCard />,
    ];

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
