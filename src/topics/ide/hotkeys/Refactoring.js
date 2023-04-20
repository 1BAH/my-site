import React from 'react';
import textStyles from '../../../css/Text.module.css';
// import basicStyles from '../../../css/Default.module.css';

const Refactoring = () => (
    <>
        <h3 className={textStyles.header}>Рефакторинг</h3>

        <h5 className={textStyles.header}>Intellij IDEA</h5>
        <div className={textStyles.block}>
            <div className={textStyles.highlight}>ctrl + alt + shift + t</div> - панель рефакторинга
            <br />
            <div className={textStyles.highlight}>ctrl + alt + o</div> - удалить неиспользуемые импорты
            <br />
            <div className={textStyles.highlight}>ctrl + alt + t</div> - окружить выражение чем-то, например, ифом или скобками
            <br />
            <div className={textStyles.highlight}>ctrl + shift + del</div> - раскрыть выражение
            <br />
            <div className={textStyles.highlight}>ctrl + alt + v</div> - вынести в переменную
            <br />
            <div className={textStyles.highlight}>ctrl + alt + m</div> - вынести в метод
            <br />
            <div className={textStyles.highlight}>ctrl + alt + f</div> - вынести в поле
            <br />
            <div className={textStyles.highlight}>ctrl + alt + c</div> - вынести в константу
            <br />
            <div className={textStyles.highlight}>ctrl + alt + p</div> - вынести в параметр
            <br />
            <div className={textStyles.highlight}>ctrl + alt + n</div> - заинлайнить
            <br />
            <div className={textStyles.highlight}>shift + F6</div> - переименовать все использования
            <br />
            <div className={textStyles.highlight}>shift + tab</div> - выбор дополнительных опций (например, можно понять тип на интерфейс при выносе
            переменной)
            <br />
            <div className={textStyles.highlight}>ctrl + F6</div> - изменить сигнатуру метода, откроется соответствующее окно
            <br />
            <div className={textStyles.highlight}>ctrl/alt + shift + ↑</div> - перенос строчки вверх
            <br />
            <div className={textStyles.highlight}>ctrl/alt + shift + ↓</div> - перенос строчки вниз
            <br />
            <div className={textStyles.highlight}>ctrl + y</div> - стереть всю строчку
            <br />
            <div className={textStyles.highlight}>ctrl + ctrl + [↑/↓]</div> - режим мультистрочного курсора: можно выделить несколько строчек и сразу
            все редактировать
        </div>

        <h5 className={textStyles.header}>CLion</h5>
        <div className={textStyles.block}>
            <div className={textStyles.highlight}>ctrl + alt + shift + t</div> - панель рефакторинга
            <br />
            <div className={textStyles.highlight}>ctrl + alt + o</div> - удалить неиспользуемые импорты
            <br />
            <div className={textStyles.highlight}>ctrl + alt + t</div> - окружить выражение чем-то, например, ифом или скобками
            <br />
            <div className={textStyles.highlight}>ctrl + shift + del</div> - раскрыть выражение
            <br />
            <div className={textStyles.highlight}>ctrl + alt + v</div> - вынести в переменную
            <br />
            <div className={textStyles.highlight}>ctrl + alt + m</div> - вынести в метод
            <br />
            <div className={textStyles.highlight}>ctrl + alt + d</div> - вынести в макрос
            <br />
            <div className={textStyles.highlight}>ctrl + alt + c</div> - вынести в константу
            <br />
            <div className={textStyles.highlight}>ctrl + alt + p</div> - вынести в параметр
            <br />
            <div className={textStyles.highlight}>ctrl + alt + t</div> - вынести в typedef
            <br />
            <div className={textStyles.highlight}>ctrl + alt + n</div> - заинлайнить
            <br />
            <div className={textStyles.highlight}>shift + F6</div> - переименовать все использования
            <br />
            <div className={textStyles.highlight}>shift + tab</div> - выбор дополнительных опций (например, можно понять тип на интерфейс при выносе
            переменной)
            <br />
            <div className={textStyles.highlight}>ctrl + F6</div> - изменить сигнатуру метода, откроется соответствующее окно
            <br />
            <div className={textStyles.highlight}>ctrl/alt + shift + ↑</div> - перенос строчки вверх
            <br />
            <div className={textStyles.highlight}>ctrl/alt + shift + ↓</div> - перенос строчки вниз
            <br />
            <div className={textStyles.highlight}>ctrl + y</div> - стереть всю строчку
            <br />
            <div className={textStyles.highlight}>ctrl + ctrl + [↑/↓]</div> - режим мультистрочного курсора: можно выделить несколько строчек и сразу
            все редактировать
        </div>
    </>
);

export default Refactoring;
