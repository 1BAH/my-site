import React from 'react';
import styles from '../../css/Info.module.css';

const GDB = () => (
    <>
        <h1 className={styles.header}>Запуск отладчика и программ в нем</h1>
        <hr style={{ width: '75%', margin: '0 auto', color: '#1A237E' }} />
        <div style={{ textAlign: 'center', marginTop: '10px', fontStyle: 'italic', marginBottom: '10px' }}>
            Далее для отличия команды терминала будут указываться как&nbsp;
            <div className={styles.highlight}>$сommand</div>, команды же отладчика -&nbsp;
            <div className={styles.highlight}>(gdb) command</div>
        </div>
        <hr style={{ width: '75%', margin: '0 auto', color: '#1A237E' }} />
        <h1 className={styles.header}>... Продолжение следует ...</h1>
    </>
);

export default GDB;
