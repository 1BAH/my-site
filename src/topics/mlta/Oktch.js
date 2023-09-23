import React from 'react';
import { Row } from 'react-bootstrap';
import styles from '../../css/Text.module.css';
import Separator from '../../elements/Separator';
import sets from '../../cards/img/sets.png';
import Img from '../../utils/Image';
import Template from '../../pages/Template';
import SemVideo from '../../utils/SemVideo';
import NotesFrame from '../../utils/NotesFrame';

const Oktch = () => (
    <Template title="JK [ОКТЧ] Теория множеств" description={'Допсеминар по октч на тему: "Теоретико-множественные операции"'}>
        <h3 className={styles.header}>ОКТЧ (первый допсеминар)</h3>

        <Img img={sets} width={20} />

        <Row className="justify-content-center" style={{ width: '100%' }}>
            <div className={styles.block} style={{ textAlign: 'center', width: '80%' }}>
                Тема: <div className={styles.highlight}>Теоретико-множественные операции</div>
                <br />
                <div className={styles.quote}>Разбор ОКТЧ начинается с 1:59</div>
                <br />
                <Separator />
                <br />
                <SemVideo url="https://www.youtube.com/embed/Y2XlFTR2zCs?si=p0TQVNpT8ek25xAj" />
                <br />
                <br />
                <Separator />
                <br />
                <NotesFrame url="https://drive.google.com/file/d/1ssSIR3d_tbRKZPUuXPJ5hrAX2Zc2vTjV/preview" />
            </div>
        </Row>
    </Template>
);

export default Oktch;
