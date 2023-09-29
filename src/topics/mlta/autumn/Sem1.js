import React from 'react';
import styles from '../../../css/Text.module.css';
import img from '../../../cards/img/lang.png';
import TemplateSem from '../TemplateSem';

const Sem1 = () => (
    <TemplateSem
        title="Первый допсеминар (осень)"
        topic="Основы формальных языков"
        description="Первый допсеминар по матлогике. Тема: основы формальных языков"
        img={img}
        comment={
            <div className={styles.quote}>
                Важное замечание! Я сказал, что слова могут быть бесконечными (счетными) - в курсе матлогики считается, что слова только конечны. Если
                интересно, то <a href="https://en.m.wikipedia.org/wiki/Omega_language">вот</a> есть на Вики статья про бесконечные слова.
            </div>
        }
        videoUrl="https://www.youtube.com/embed/Y2XlFTR2zCs?si=p0TQVNpT8ek25xAj"
        notesUrl="https://drive.google.com/file/d/1ss1lZ5aI6lp-WELMaFKEq2qeDPnWtgrR/preview"
        solutionsUrl="https://drive.google.com/file/d/1shHhZGWiPTyrDe0MRD841uYElN6jSfWF/preview"
    />
);

export default Sem1;
