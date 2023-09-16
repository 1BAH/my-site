import React from 'react';
import textStyles from '../../../css/Text.module.css';
import matchCase from './img/matchCase.png';
import regex from './img/regex.png';
import Img from '../../../utils/Image';

const FindReplace = () => (
    <>
        <h3 className={textStyles.header}>Поиск и замена</h3>

        <h5 className={textStyles.header}>Поиск выражений</h5>
        <div className={textStyles.block}>
            <div className={textStyles.highlight}>ctrl + f</div> - поиск выражения в файле
            <br />
            &emsp;
            <div className={textStyles.pictureDescription}>Чтобы осуществлять чувствительный к регистру поиск, нужно включить следующую опцию:</div>
            <Img img={matchCase} width={90} />
            &emsp;
            <div className={textStyles.pictureDescription}>
                Чтобы осуществлять поиск на основе регулярных выражений, нужно включить следующую опцию:
            </div>
            <Img img={regex} width={90} />
            <div className={textStyles.highlight}>ctrl + shift + f</div> - поиск выражения в проекте
            <br />
            <div className={textStyles.highlight}>F3</div> - перемещение вперед в поиске
            <br />
            <div className={textStyles.highlight}>shift + F3</div> - перемещение назад в поиске
        </div>

        <h5 className={textStyles.header}>Поиск объектов</h5>
        <div className={textStyles.block}>
            <div className={textStyles.highlight}>shift + shift</div> - глобальный поиск (настройки, классы, файлы, ...)
            <br />
            <div className={textStyles.highlight}>ctrl + n</div> - поиск класса
            <br />
            <div className={textStyles.highlight}>ctrl + shift + n</div> - поиск файла
        </div>

        <h5 className={textStyles.header}>Поиск юзаджей</h5>
        <div className={textStyles.block}>
            <div className={textStyles.highlight}>ctrl + F7</div> - поиск юзаджей в файле
            <br />
            <div className={textStyles.highlight}>alt + F7</div> - поиск юзаджей в проекте
            <br />
            <div className={textStyles.highlight}>ctrl + shift + F7</div> - выделение юзаджей в файле, далее можно перемещаться между ними с помощью{' '}
            <div className={textStyles.highlightLight}>F3</div> или <div className={textStyles.highlightLight}>shift + F3</div>
            <br />
            <div className={textStyles.highlight}>ctrl + alt + F7</div> - показать юзаджи в файле, далее можно стрелочками выбрать нужны и с помощью{' '}
            <div className={textStyles.highlightLight}>enter</div> перейти на нужный фрагмент
        </div>

        <h5 className={textStyles.header}>Замена выражений</h5>
        <div className={textStyles.block}>
            <div className={textStyles.highlight}>ctrl + r</div> - замена выражения в файле
            <br />
            <div className={textStyles.highlight}>ctrl + shift + r</div> - замена выражения в проекте
            <br />
            <div className={textStyles.highlight}>ctrl + alt + shift + j</div> - редактировать все выделенные выражения в файле
        </div>
    </>
);

export default FindReplace;
