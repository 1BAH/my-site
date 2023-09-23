import React from 'react';
import { Row } from 'react-bootstrap';
import styles from '../../css/Text.module.css';
import Separator from '../../elements/Separator';
import fl from '../../cards/img/formula.png';
import Img from '../../utils/Image';
import Template from '../../pages/Template';
import Absent from './Absent';
import SemVideo from '../../utils/SemVideo';
import NotesFrame from '../../utils/NotesFrame';

const Sem2 = () => (
    <Template title="JK [МЛТА] Пропозициональные формулы" description="Второй допсеминар по матлогике. Тема: пропозициональные формулы">
        <h3 className={styles.header}>Второй допсеминар (осень)</h3>

        <Img img={fl} width={20} />

        <Row className="justify-content-center" style={{ width: '100%' }}>
            <div className={styles.block} style={{ textAlign: 'center', width: '80%' }}>
                Тема: <div className={styles.highlight}>Пропозициональные формулы</div>
                <br />
                <div className={styles.quote}>
                    Комментарий насчет &quot;правильности&quot; в минимализации КНФ/ДНФ. По сути ничего писать лишнего не надо, а именно доказывать,
                    что это КНФ/ДНФ и сравнивать таблицы истинности, как мы делали. НО необходимо{' '}
                    <div className={styles.highlight}>четко и подробно</div> расписать, как вы используете метод минимализации с помощью карт Карно:
                    каким покрытиям какие дизъюнкты соответствуют, показать сами покрытия и т.п.
                </div>
                <br />
                <Separator />
                <br />
                <SemVideo url="https://www.youtube.com/embed/oKq_vBwVi5E?si=1d5ziyuvGBzh9sQM" />
                <br />
                <br />
                <Separator />
                <br />
                <NotesFrame url="https://drive.google.com/file/d/1tagz0azCxRown6zTtnVM8enLuhKrXeSV/preview" />
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
                <NotesFrame url="https://drive.google.com/file/d/1tO9AynRQ6aFICvWWthNIOQ32hxkhtem0/preview" name="Решения прошлой контрольной" />
            </div>
        </Row>
    </Template>
);

export default Sem2;
