import React from 'react';
import { Table } from 'react-bootstrap';
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

        <div className={styles.block}>
            Войти в отладчик можно с помощью команды&nbsp;
            <div className={styles.highlight}>$ gdb</div>, или если уже имеется исполняемый файл&nbsp;
            <div className={styles.highlight}>file.exe</div>, то можно запустить отладку сразу с ним:&nbsp;
            <div className={styles.highlight}>$ gdb file.exe</div>.
            <div className={styles.quote}>
                Использовать обычный исполняемый файл нельзя. Для отладки необходимо компилироваться с флагом&nbsp;
                <div className={styles.highlight}>-g</div>.
            </div>
            Чтобы загрузить в gdb правильно скомпилированный исполняемый файл, используйте команду&nbsp;
            <div className={styles.highlight}>(gdb) file [filename]</div>. Выход из отладчика осуществляется с помощью команды&nbsp;
            <div className={styles.highlight}>(gdb) quit</div>.
            <div className={styles.quote}>
                GDB позволяет писать писать команды не полностью, а только их префикс, что бывает зачастую удобно. Например: вместо&nbsp;
                <div className={styles.highlight}>(gdb) quit</div> можно писать&nbsp;
                <div className={styles.highlight}>(gdb) q</div>.
            </div>
            Когда программе необходимо подать аргументы на вход:
            <div className={styles.code}>user@hostname $ ./program.exe arg1 1</div>
            То при запуске программы в gdb необходимо настроить аргументы вызова:&nbsp;
            <div className={styles.highlight}>(gdb) set args [args]</div>. Чтобы посмотреть, с какими аргументами будет запущена программа,
            используйте <div className={styles.highlight}>(gdb) show args</div>.
            <div className={styles.quote}>Не забывайте, что тогда необходимо указать в маине argc и argv</div>
            Для запуска же самого кода используется команда&nbsp;
            <div className={styles.highlight}>(gdb) run</div>. Отмечу, что после завершения работы программы ее можно снова запустить, просто вызвав
            еще раз эту программу.
        </div>

        <h1 className={styles.header}>Просмотр кода</h1>
        <div className={styles.block}>
            Чтобы посмотреть код используется утилита <div className={styles.highlight}>(gdb) list</div>. <br /> <br /> Часто код собирается из
            нескольких файлов, и реализации функции расположена в другом файле. Как посмотреть на ее код? Применяем команду&nbsp;
            <div className={styles.highlight}>(gdb) l [function name]</div>. <br /> <br /> Для отладки кода иногда помогает дизассемблирование: для
            этого используется утилита <div className={styles.highlight}>(gdb) disassemble</div>. По умолчанию вывод будет в AT&T формате, для вывода
            в intel синтаксисе необходимо установить тип синтаксиса командой <div className={styles.highlight}>set disassemly-flavor intel</div>{' '}
            обратно вернуться можно с помощью команды <div className={styles.highlight}>set disassemly-flavor att</div>.
        </div>

        <h1 className={styles.header}>Точки останова</h1>

        <hr style={{ width: '75%', margin: '0 auto', color: '#1A237E' }} />

        <h3 className={styles.header}>Создание безусловной точки остaнова</h3>
        <div className={styles.block}>
            Установить точку останова можно с помощью комманды <div className={styles.highlight}>(gdb) break [line]</div>. Иногда полезным является
            установление точек останова на функциях - для этого используется команда&nbsp;
            <div className={styles.highlight}>(gdb) b [function name]</div>
        </div>

        <h3 className={styles.header}>Удаление точек останова</h3>
        <div className={styles.block}>
            Чтобы удалить точку останова используется команда <div className={styles.highlight}>(gdb) delete [breakpoint id]</div>. Вызвав
            команду&nbsp;
            <div className={styles.highlight}>(gdb) d</div>, отладчик предложит удалить все точки останова, что есть в текущей сессии.
        </div>

        <h3 className={styles.header}>Создание условных точек останова</h3>
        <div className={styles.block}>
            Когда надо отстановить программу при каком-то конкретном условии удобно применять условные точки останова. Их можно создать с помощью
            команды <div className={styles.highlight}>(gdb) b [line] if [condition]</div>.
        </div>

        <h3 className={styles.header}>Создание watchpoint</h3>
        <div className={styles.block}>
            Watchpoint - вид точки останова, который прерывает выполнение программы при изменение значения наблюдаемой переменной. Создается
            коммандой&nbsp;
            <div className={styles.highlight}>(gdb) watch [variable]</div>.
            <div className={styles.quote}>
                Так как переменная должна существовать для ее отслеживания, то watchpoint можно создать только в запущенном приложении, при условии
                того, что переменная существует в текущей области видимости - иначе ничего не получится.
            </div>
        </div>

        <h1 className={styles.header}>Просмотр различной информации</h1>
        <div className={styles.block}>
            Основной утилитой для просмотра каких-то сведений является <div className={styles.highlight}>(gdb) info</div>. Если самостоятельно ее
            вызвать без каких-либо параметров, то выведется список всех возможных параметров с описанием того, что они означают. <br /> <br /> Для
            просмотра всех точек останова на текущий момент используется <div className={styles.highlight}>(gdb) info breakpoints</div> или
            сокращенно: <div className={styles.highlight}>(gdb) i b</div>. <br /> <br /> Чтобы посмотреть все переменные используйте команду{' '}
            <div className={styles.highlight}>(gdb) info locals</div> - сокращенно <div className={styles.highlight}>(gdb) i lo</div>.
        </div>

        <h3 className={styles.header}>Просмотр значения переменных</h3>

        <div className={styles.block}>
            Если существует просто переменная, то для просмотра ее значения, применяется команда{' '}
            <div className={styles.highlight}>(gdb) print [variable]</div>. Если же переменная - это указатель, то вызов{' '}
            <div className={styles.highlight}>(gdb) p [pointer]</div> выдаст информацию о типе указателя и адресе:{' '}
            <div className={styles.code}>
                (gdb) p ptr <br /> <br /> $1 = (int *) 0x55555556b2c0
            </div>{' '}
            Чтобы узнать, что лежит под указателем, используйте:{' '}
            <div className={styles.code}>
                (gdb) p *ptr <br /> <br /> $2 = 1
            </div>
        </div>

        <h3 className={styles.header}>Просмотр значения элементов массива</h3>

        <div className={styles.block}>
            С массивами все обстоит сложнее: <br /> <br />
            Статические массивы с фиксированным размером при попытке вызова функции <div className={styles.highlight}>print</div> просто выдадут все
            свои элементы:
            <div className={styles.code}>
                {`int arr[3] = {0, 1, 2}`};<br /> <br />
                (gdb) p arr
                <br /> <br />
                $1 = {`{0, 1, 2} `}
            </div>
            Если же массив был динамически выделен на куче аллокаторами, то при попытки вызова функции <div className={styles.highlight}>print</div>{' '}
            от него, он будет интерпретироваться как указатель:
            <div className={styles.code}>
                int *arr[3] = (int *)calloc(3, sizeof(int));
                <br /> <br />
                arr[0] = 1;
                <br /> <br />
                arr[1] = 2;
                <br /> <br />
                arr[2] = 3;
                <br /> <br />
                (gdb) p arr
                <br /> <br />
                $1 = (int *) 0x55555556b2c0
                <br /> <br />
                (gdb) p *arr
                <br /> <br />
                $2 = 1
            </div>
            <div className={styles.quote}> При попытки разыменовать указатель отладчик выведет нулевой элемент массива!</div>
            Для просмотра значения элементов подобного вида массива необходимо использовать уже другую команду:{' '}
            <div className={styles.highlight}>(gdb) x/[length][type]</div>, где length - длина исследуемой области памяти, т.е. будет выведена
            информация о <div className={styles.highlight}>length * sizeof(type)</div> байт, type - тип данных, по которому будут интерпретироваться
            байты: <br /> <br />
            <Table striped bordered hover size="sm" style={{ borderColor: 'rgb(1, 50, 32, 0.25)' }}>
                <thead style={{ backgroundColor: 'rgb(1, 50, 32, 0.25)' }}>
                    <tr>
                        <th style={{ width: 'col-md-6' }}>Буква типа</th>
                        <th style={{ width: 'col-md-6' }}>Тип</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>d</td>
                        <td>int</td>
                    </tr>
                    <tr>
                        <td>ld</td>
                        <td>long</td>
                    </tr>
                    <tr>
                        <td>u</td>
                        <td>unsigned int</td>
                    </tr>
                    <tr>
                        <td>lu</td>
                        <td>unsigned long</td>
                    </tr>
                    <tr>
                        <td>x</td>
                        <td>hex</td>
                    </tr>
                    <tr>
                        <td>f</td>
                        <td>float</td>
                    </tr>
                    <tr>
                        <td>lf</td>
                        <td>double</td>
                    </tr>
                    <tr>
                        <td>c</td>
                        <td>char</td>
                    </tr>
                    <tr>
                        <td>s</td>
                        <td>string</td>
                    </tr>
                    <tr>
                        <td>p</td>
                        <td>pointer</td>
                    </tr>
                </tbody>
            </Table>
            <div className={styles.code}>
                (gdb) x/3d arr <br /> <br />
                0x55555556b2c0: 1 2 3
            </div>
            Если же захочется посмотреть информацию про вектор, то команда print выдаст много чего:
            <div className={styles.code}>
                std::vector{`<int>`} vec(3, 2)
                <br /> <br />
                (gdb) p vec
                <br /> <br />
                $1 = std::vector of length {`3, capacity 3 = {2, 2, 2}`}
            </div>
            Аналогично и для своих структур.
        </div>
    </>
);

export default GDB;
