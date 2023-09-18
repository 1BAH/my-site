import React from 'react';
import { Row } from 'react-bootstrap';
import styles from '../../css/Text.module.css';
import Separator from '../../elements/Separator';
import sets from '../../cards/img/sets.png';
import Img from '../../utils/Image';
import Template from '../../pages/Template';

const Oktch = () => (
    <Template title="JK [ОКТЧ] Теория множеств" description={'Допсеминар по октч на тему: "Теоретико-множественные операции"'}>
        <h3 className={styles.header}>ОКТЧ (первый допсеминар)</h3>

        <Img img={sets} width={20} />

        <Row className="justify-content-center" style={{ width: '100%' }}>
            <div className={styles.block} style={{ textAlign: 'center', width: '80%' }}>
                Тема: <div className={styles.highlight}>Теоретико-множественные операции</div>
                <br />
                <br />
                <Separator />
                <br />
                <p>Видео</p>
                <iframe
                    width="80%"
                    src="https://www.youtube.com/embed/Y2XlFTR2zCs?si=p0TQVNpT8ek25xAj"
                    title="Lambdas"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    style={{ aspectRatio: '16 / 9' }}
                />
                <br />
                <br />
                <Separator />
                <br />
                <p>Записи</p>
                <iframe
                    title="turing"
                    src="https://drive.google.com/file/d/1ssSIR3d_tbRKZPUuXPJ5hrAX2Zc2vTjV/preview"
                    width="60%"
                    allow="autoplay"
                    style={{ aspectRatio: '11 / 10' }}
                />
            </div>
        </Row>
    </Template>
);

export default Oktch;
