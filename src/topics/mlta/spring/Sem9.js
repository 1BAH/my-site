import React from 'react';
import img from '../../../cards/img/le.png';
import TemplateSem from '../TemplateSem';
import styles from '../../../css/Text.module.css';

const Sem9 = () => (
    <TemplateSem
        title="Девятый допсеминар (весна)"
        topic="Порядки"
        img={img}
        comment={
            <div className={styles.quote}>
                Важное замечание! <b>Утверждение, что ЛУМ×ЛУМ = ЛУМ неверно</b>:
                <br />
                (9, 3) и (3, 9) не сравнимы в смысла порядка на N×N.
                <br />
                Фундированность же будет <b>всегда</b>: пусть не так, тогда есть БУП =&gt; есть БУП по компоненте - противоречие
            </div>
        }
        description="Девятый допсеминар по матлогике. Тема: порядки."
        videoUrl="https://www.youtube.com/embed/7m8Yqhqjotc?si=P9JbXYxABYqX4LO8"
        notesUrl="https://drive.google.com/file/d/14pa8EMlY5-hZe8v4_ZgocpIlrRiXRlyO/preview"
        solutionsUrl="https://drive.google.com/file/d/1P3bPny82N76PtTTsC2zISIGaEfZETCZ9/preview"
    />
);

export default Sem9;
