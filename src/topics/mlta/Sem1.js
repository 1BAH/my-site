import React from 'react';
import { Row } from 'react-bootstrap';
import styles from '../../css/Text.module.css';
import Separator from '../../elements/Separator';
import Absent from './Absent';
import fl from '../../cards/img/lang.png';
import Img from '../../utils/Image';

const Sem1 = () => (
    <>
        <h3 className={styles.header}>Первый допсеминар (осень)</h3>

        <Img img={fl} width={20} />

        <Row className="justify-content-center" style={{ width: '100%' }}>
            <div className={styles.block} style={{ textAlign: 'center', width: '80%' }}>
                Тема: <div className={styles.highlight}>Основы формальных языков</div>
                <br />
                <div className={styles.quote}>
                    Важное замечание! Я перепутал алфавиты и слова, поэтому сказал, что слова могут быть счетными. На самом деле это всегда
                    ОБЯЗАТЕЛЬНО конечные последовательности.
                </div>
                <Separator />
                <br />
                <p>Видео</p>
                <Absent />
                {/* <iframe
                        width="80%"
                        src="..."
                        title="Lambdas"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        style={{ aspectRatio: '16 / 9' }}
                    /> */}
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
    </>
);

export default Sem1;
