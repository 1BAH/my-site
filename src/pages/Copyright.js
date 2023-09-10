import React from 'react';
import { Row } from 'react-bootstrap';
import styles from '../css/Text.module.css';
import cr from './copyright.png';
import basicStyles from '../css/Default.module.css';
import title from '../hooks/title';

const Copyright = () => {
    title('JK Copyrights');

    return (
        <>
            <h1 className={styles.header}>Copyright</h1>
            <Row className="justify-content-center" style={{ width: '100%' }}>
                <div style={{ textAlign: 'center', width: '30%' }}>
                    <img src={cr} alt="manuscript" className={basicStyles.picture} />
                </div>
            </Row>

            <div className={styles.block}>
                Все материалы сайта составлены непосредственно fвтором. Копирование возможно только с указанием авторства или с согласия (
                <div className={styles.highlight}>koefic.cien@gmail.com</div>).
                <br />
                <br />
                Владелец сайта уважает авторские права, поэтому ниже перечислены использованные и упомянутые материалы.
                <div className={styles.quote}>
                    Docker - <a href="https://www.docker.com/">Docker, Inc.</a>{' '}
                </div>
                <div className={styles.quote}>
                    JetBrains - <a href="https://www.jetbrains.com/idea/">JetBrains s.r.o.</a>{' '}
                </div>
                <div className={styles.quote}>
                    Intellij IDEA - <a href="https://www.jetbrains.com/">JetBrains s.r.o.</a>{' '}
                </div>
                <div className={styles.quote}>
                    CLion - <a href="https://www.jetbrains.com/clion/">JetBrains s.r.o.</a>{' '}
                </div>
                <div className={styles.quote}>
                    CheckStyle IDEA plugin - <a href="https://plugins.jetbrains.com/plugin/1065-checkstyle-idea">Подробнее..</a>{' '}
                </div>
                <div className={styles.quote}>
                    CheckStyle - <a href="https://checkstyle.sourceforge.io/index.html">Подробнее..</a>{' '}
                </div>
                <div className={styles.quote}>
                    PostgeSQL - <a href="https://www.postgresql.org/">The PostgreSQL Global Development Group</a>
                </div>
                <div className={styles.quote}>
                    GDB - <a href="https://www.sourceware.org/gdb/">Free Software Foundation, Inc.</a>
                </div>
                <div className={styles.quote}>
                    Красивые иконки (как, например, выше :) -{' '}
                    <a href="https://www.flaticon.com/ru/free-icons/-" title="Авторские права иконки">
                        Flaticon
                    </a>
                </div>
                <div className={styles.quote}>
                    Отдельно стоит упомянуть используемый шрифт <div className={styles.highlight}>JetBrains Mono</div> от компании JetBrains.{' '}
                    <a href="https://www.jetbrains.com/lp/mono">Подробнее..</a>
                </div>
                <br />
                При нахождении ошибок, забытых упоминаний сообщите, пожалуйста, автору (<div className={styles.highlight}>koefic.cien@gmail.com</div>
                ).
            </div>
        </>
    );
};

export default Copyright;
