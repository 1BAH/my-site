import React from 'react';
import { Row } from 'react-bootstrap';
import styles from '../../css/Text.module.css';
import Separator from '../../elements/Separator';
import fl from '../../cards/img/lang.png';
import Img from '../../utils/Image';
import Template from '../../pages/Template';
import SemVideo from '../../utils/SemVideo';
import NotesFrame from '../../utils/NotesFrame';

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
                <SemVideo url="https://www.youtube.com/embed/Y2XlFTR2zCs?si=p0TQVNpT8ek25xAj" />
                <br />
                <br />
                <Separator />
                <br />
                <NotesFrame url="https://drive.google.com/file/d/1ss1lZ5aI6lp-WELMaFKEq2qeDPnWtgrR/preview" />
                <br />
                <br />
                <Separator />
                <br />
                <NotesFrame url="https://drive.google.com/file/d/1shHhZGWiPTyrDe0MRD841uYElN6jSfWF/preview" name="Решения прошлых лет" />
            </div>
        </Row>
    </Template>
);

export default Sem1;
