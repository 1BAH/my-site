import React from 'react';
import { Row } from 'react-bootstrap';
import styles from '../../css/Text.module.css';
import Separator from '../../elements/Separator';
import fl from '../../cards/img/lang.png';
import Img from '../../utils/Image';
import Template from '../../pages/Template';
import Absent from './Absent';

const Sem2 = () => (
    <Template title="JK [МЛТА] Пропозициональные формулы" description="Второй допсеминар по матлогике. Тема: пропозициональные формулы">
        <h3 className={styles.header}>Второй допсеминар (осень)</h3>

        <Img img={fl} width={20} />

        <Row className="justify-content-center" style={{ width: '100%' }}>
            <div className={styles.block} style={{ textAlign: 'center', width: '80%' }}>
                Тема: <div className={styles.highlight}>Пропозициональные формулы</div>
                <br />
                <br />
                <Separator />
                <br />
                <p>Видео</p>
                <Absent />
                <br />
                <br />
                <Separator />
                <br />
                <p>Записи</p>
                <Absent />
                <br />
                <br />
                <Separator />
                <br />
                <p>Решения прошлых лет</p>
                <Absent />
                <br />
                <br />
                <Separator />
                <br />
                <p>Решения прошлой контрольной</p>
                <iframe
                    title="2023-1-solution"
                    src="https://drive.google.com/file/d/1tO9AynRQ6aFICvWWthNIOQ32hxkhtem0/preview"
                    width="640"
                    height="480"
                    allow="autoplay"
                />
            </div>
        </Row>
    </Template>
);

export default Sem2;
