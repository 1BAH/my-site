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
import OrderCard from '../../cards/mlta/OrderCard';
import OmegaCard from '../../cards/mlta/OmegaCard';

const MLTA = () => {
    const autumn = [
        <FormalLangsCard />,
        <ProposalCard />,
        <BooleanCard />,
        <PropCalcCard />,
        <ResolutionsCard />,
        <SignatureCard />,
        <MorphismCard />,
        <PredCalcCard />,
    ];

    const spring = [
        <OrderCard />,
        <OmegaCard />,
    ];

    return (
        <Template title="JK Допсемы по матлогу" description="Материалы допсеминаров по матлогу">
            <h1 className={styles.header}>Материалы с допсеминаров по Математической логике</h1>

            <div className={styles.block}>
                <h3 className={styles.header}>Осень 2023</h3>
                <Cards cards={autumn} />
            </div>

            <div className={styles.block}>
                <h3 className={styles.header}>Весна 2024</h3>
                <Cards cards={spring} />
            </div>
        </Template>
    );
};

export default MLTA;
