import React from 'react';
import { Row } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import styles from '../../css/Text.module.css';
import Separator from '../../elements/Separator';

const Preview = () => (
    <>
        <h3 className={styles.header} id="5">
            Пятый допсеминар (осень)
        </h3>
        <Row className="justify-content-center" style={{ width: '100%' }}>
            <div className={styles.block} style={{ textAlign: 'center', width: '80%' }}>
                Тема: <div className={styles.highlight}>Булевы функции</div>
                <br />
                <br />
                <Separator />
                <br />
                <p>Видео</p>
                <iframe
                    width="80%"
                    src="https://www.youtube.com/embed/qzdc90CcfkU?si=easRf-CjxWjuAF_f"
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
                <p>
                    <HashLink to="#vi">Записи</HashLink>
                </p>
                <iframe
                    title="turing"
                    src="https://drive.google.com/file/d/1TGPzgznBLDt3i3N8n3OgJmgTTMZ0zTpJ/preview"
                    width="60%"
                    allow="autoplay"
                    style={{ aspectRatio: '11 / 10' }}
                />
                <br />
                <br />
                <Separator />
                <br />
                <p>Решения прошлых лет</p>
                <iframe
                    title="2-extra"
                    src="https://drive.google.com/file/d/1lEbMaoUvHmLR2AxO7ZXohtMFUry2RRFe/preview"
                    width="60%"
                    allow="autoplay"
                    style={{ aspectRatio: '11 / 10' }}
                />
            </div>
        </Row>
    </>
);

export default Preview;
