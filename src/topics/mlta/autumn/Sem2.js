import React from 'react';
import styles from '../../../css/Text.module.css';
import img from '../../../cards/img/formula.png';
import TemplateSem from '../TemplateSem';

const Sem2 = () => (
    <TemplateSem
        title="Второй допсеминар (осень)"
        topic="Пропозициональные формулы"
        description="Второй допсеминар по матлогике. Тема: пропозициональные формулы"
        img={img}
        comment={
            <div className={styles.quote}>
                Комментарий насчет &quot;правильности&quot; в минимализации КНФ/ДНФ. По сути ничего писать лишнего не надо, а именно доказывать, что
                это КНФ/ДНФ и сравнивать таблицы истинности, как мы делали. НО необходимо <div className={styles.highlight}>четко и подробно</div>{' '}
                расписать, как вы используете метод минимализации с помощью карт Карно: каким покрытиям какие дизъюнкты соответствуют, показать сами
                покрытия и т.п.
            </div>
        }
        videoUrl="https://www.youtube.com/embed/oKq_vBwVi5E?si=1d5ziyuvGBzh9sQM"
        notesUrl="https://drive.google.com/file/d/1tagz0azCxRown6zTtnVM8enLuhKrXeSV/preview"
        solutionsUrl="https://drive.google.com/file/d/1twS-bzfUj3eZ9dO5FOXAWOVAOUAjxo8t/preview"
        previousCWUrl="https://drive.google.com/file/d/1tO9AynRQ6aFICvWWthNIOQ32hxkhtem0/preview"
        showPreviousCW
    />
);

export default Sem2;
