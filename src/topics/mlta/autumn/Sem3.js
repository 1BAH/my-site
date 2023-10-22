import React from 'react';
import img from '../../../cards/img/lattice.png';
import TemplateSem from '../TemplateSem';

const Sem3 = () => (
    <TemplateSem
        title="Третий допсеминар (осень)"
        topic="Булевы функции"
        img={img}
        description="Третий допсеминар по матлогике. Тема: булевы функции."
        videoUrl="https://www.youtube.com/embed/QRCxVRuX7J0?si=ucoy5JNJMERmHW4w"
        notesUrl="https://drive.google.com/file/d/1uWymYOGTkSHC4HPu88ILU1iw0cNcJzDj/preview"
        extraTasksUrl={[
            ['групп 312, 324 и 326', 'https://drive.google.com/file/d/1ueGSywMW41BJm58k0G6Ja11VjPKaW09m/preview'],
            ['группы 328', 'https://drive.google.com/file/d/1ud36FiQEM77ZGgWpKWcZUFQFzbslLPpA/preview'],
        ]}
        hwUrl="https://drive.google.com/file/d/1uX2NYnJf6i5uHq3DfEsmQcmsHAIKt_ch/preview"
        solutionsUrl="https://drive.google.com/file/d/1vzABhn-VIg_bNAbhHI27nz7JtonKxxl6/preview"
    />
);

export default Sem3;
