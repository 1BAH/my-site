import React from 'react';
import img from '../../../cards/img/omega.png';
import TemplateSem from '../TemplateSem';
import styles from '../../../css/Text.module.css';

const Sem10 = () => (
    <TemplateSem
        title="Десятый допсеминар (весна)"
        topic="Ординалы"
        img={img}
        comment={
            <div className={styles.quote}>
                Важное замечание! <b>В 7 номере есть ошибка</b>:
                <br />
                Пункт г неверный - начальный отрезок может быть несобственным.
            </div>
        }
        description="Десятый допсеминар по матлогике. Тема: ординалы."
        videoUrl="https://www.youtube.com/embed/xY3TRO49SRA?si=Iv8i60SqTUtXemBr"
        notesUrl="https://drive.google.com/file/d/16OXAP4GDxih9aga3EjKkrFJjqOZly3r4/preview"
        solutionsUrl="https://drive.google.com/file/d/1_9EY4cQDBWqRoaDpR9eHohAehitw6ISp/preview"
        extraTasksUrl={[['Новые задачи', 'https://drive.google.com/file/d/14vlRXy4XYYYTaNDos5x60SGyRrWPK35n/preview']]}
    />
);

export default Sem10;
