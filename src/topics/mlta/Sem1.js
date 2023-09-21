import React from 'react';
import { Row } from 'react-bootstrap';
import styles from '../../css/Text.module.css';
import Separator from '../../elements/Separator';
import fl from '../../cards/img/lang.png';
import Img from '../../utils/Image';
import Template from '../../pages/Template';

const Sem1 = () => (
    <Template title="JK [МЛТА] Формальные языки" description="Первый допсеминар по матлогике. Тема: основы формальных языков">
        <h3 className={styles.header}>Первый допсеминар (осень)</h3>

        <Img img={fl} width={20} />

        <Row className="justify-content-center" style={{ width: '100%' }}>
            <div className={styles.block} style={{ textAlign: 'center', width: '80%' }}>
                Тема: <div className={styles.highlight}>Основы формальных языков</div>
                <br />
                <div className={styles.quote}>
                    Важное замечание! Я сказал, что слова могут быть бесконечными (счетными) - в курсе матлогики считается, что слова только конечны.
                    Если интересно, то <a href="https://en.m.wikipedia.org/wiki/Omega_language">вот</a> есть на Вики статья про бесконечные слова.
                </div>
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
                    src="https://drive.google.com/file/d/1ss1lZ5aI6lp-WELMaFKEq2qeDPnWtgrR/preview"
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
                    title="1-extra"
                    src="https://drive.google.com/file/d/1shHhZGWiPTyrDe0MRD841uYElN6jSfWF/preview"
                    width="60%"
                    allow="autoplay"
                    style={{ aspectRatio: '11 / 10' }}
                />
            </div>
        </Row>
    </Template>
);

export default Sem1;
