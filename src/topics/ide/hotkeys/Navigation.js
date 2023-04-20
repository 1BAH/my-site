import React from 'react';
import textStyles from '../../../css/Text.module.css';
import basicStyles from '../../../css/Default.module.css';
import structure from './img/structure.png';

const Navigation = () => (
    <>
        <h3 className={textStyles.header}>Навигация</h3>

        <h5 className={textStyles.header}>Перемещение по файлу</h5>
        <div className={textStyles.block}>
            <div className={textStyles.highlight}>alt + ↑</div> - перейти на метод выше с переносом курсора
            <br />
            <div className={textStyles.highlight}>alt + ↓</div> - перейти на метод ниже с переносом курсора
            <br />
            <div className={textStyles.highlight}>ctrl + ↑</div> - скрол вверх без переноса курсора
            <br />
            <div className={textStyles.highlight}>ctrl + ↓</div> - скрол вниз без переноса курсора
            <br />
            <div className={textStyles.highlight}>F12</div> - открывается панель <div className={textStyles.highlightLight}>structure</div>, и в нем
            можно стрелочками перейти на нужный метод, а затем нажать <div className={textStyles.highlightLight}>enter</div>
            <br />
            <img src={structure} alt="structure window" className={basicStyles.picture} />
            <br />
            <div className={textStyles.highlight}>ctrl + g</div> - перейти на строчку по номеру
        </div>

        <h5 className={textStyles.header}>Перемещение между файлами</h5>
        <div className={textStyles.block}>
            <div className={textStyles.highlight}>alt + &lt;-</div> - перемещение в левый открый файл (см. панель открытых файлов)
            <br />
            <div className={textStyles.highlight}>alt + -&gt;</div> - перемещение в правый открый файл (см. панель открытых файлов)
            <br />
            <div className={textStyles.highlight}>ctrl + e</div> - открытие панели <div className={textStyles.highlightLight}>recent files</div>. Там
            стрелочками выбираем класс (можно начать вбивать название - тогда будет поиск) и жмем{' '}
            <div className={textStyles.highlightLight}>enter</div>. Также можно выбрать что-нибудь слева и перейти в какую-то из информационных
            панелей
            <br />
            <div className={textStyles.highlight}>alt + home</div> - открыть навигационную панель
        </div>

        <h5 className={textStyles.header}>Метки</h5>
        <div className={textStyles.block}>
            <div className={textStyles.highlight}>F11</div> - снять метку
            <br />
            <div className={textStyles.highlight}>ctrl + F11</div> - установить метку
            <br />
            <div className={textStyles.highlight}>ctrl + [name]</div> - перейти на метку <div className={textStyles.highlightLight}>[name]</div>
        </div>

        <h5 className={textStyles.header}>Иерархия</h5>
        <div className={textStyles.block}>
            <div className={textStyles.highlight}>ctrl + u</div> - перейти к родительскому методу/классу/интерфейсу
            <br />
            <div className={textStyles.quote}>Intellij IDEA</div>
            <div className={textStyles.highlight}>ctrl + b</div> - перейти к декларации метода/класса/интерфейса
            <br />
            <div className={textStyles.highlight}>ctrl + alt + b</div> - перейти к реализации (имплементации) метода/класса/интерфейса
            <br />
            <div className={textStyles.quote}>CLion</div>
            <div className={textStyles.highlight}>ctrl + b</div> - перейти к реализации метода/класса/интерфейса
            <br />
            <div className={textStyles.highlight}>F10</div> - перейти к декларации метода в хедер
        </div>

        <h5 className={textStyles.header}>Ошибки</h5>
        <div className={textStyles.block}>
            <div className={textStyles.highlight}>F2</div> - перейти к следующей ошибке
            <br />
            <div className={textStyles.highlight}>shift + F2</div> - вернуться к предыдущей ошибке
        </div>

        <h5 className={textStyles.header}>Перемещения</h5>
        <div className={textStyles.block}>
            <div className={textStyles.highlight}>ctrl + alt + &lt;-</div> - вернуться назад (отменить переход выше)
            <br />
            <div className={textStyles.highlight}>ctrl + alt + -&gt;</div> - пройти вперед (отменить отмену перехода хехе)
        </div>
    </>
);

export default Navigation;
