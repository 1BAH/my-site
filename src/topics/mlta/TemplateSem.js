import React from 'react';
import { Row } from 'react-bootstrap';
import styles from '../../css/Text.module.css';
import Separator from '../../elements/Separator';
import Img from '../../utils/Image';
import Template from '../../pages/Template';
import SemVideo from '../../utils/SemVideo';
import NotesFrame from '../../utils/NotesFrame';
import Absent from './Absent';

const TemplateSem = ({ title, description, img, topic, comment, videoUrl, notesUrl, solutionsUrl, previousCWUrl, showPreviousCW = false }) => (
    <Template title={`JK [МЛТА] ${topic}`} description={description}>
        <h3 className={styles.header}>{title}</h3>

        <Img img={img} width={20} />

        <Row className="justify-content-center" style={{ width: '100%' }}>
            <div className={styles.block} style={{ textAlign: 'center', width: '80%' }}>
                Тема: <div className={styles.highlight}>{topic}</div>
                <br />
                {comment}
                <br />
                <Separator />
                <br />
                {videoUrl ? (
                    <SemVideo url={videoUrl} />
                ) : (
                    <>
                        <p>Видео</p>
                        <Absent />
                    </>
                )}
                <br />
                <br />
                <Separator />
                <br />
                {notesUrl ? (
                    <NotesFrame url={notesUrl} />
                ) : (
                    <>
                        <p>Записи</p>
                        <Absent />
                    </>
                )}
                <br />
                <br />
                <Separator />
                <br />
                {solutionsUrl ? (
                    <NotesFrame url={solutionsUrl} name="Решения прошлых лет" />
                ) : (
                    <>
                        <p>Решения прошлых лет</p>
                        <Absent />
                    </>
                )}
                <br />
                <br />
                {/* eslint-disable-next-line no-nested-ternary */}
                {showPreviousCW ? (
                    previousCWUrl ? (
                        <>
                            <Separator />
                            <br />
                            <NotesFrame url={previousCWUrl} name="Решения прошлой контрольной" />
                        </>
                    ) : (
                        <>
                            <Separator />
                            <br />
                            <p>Решения прошлой контрольной</p>
                            <Absent />
                        </>
                    )
                ) : (
                    <></>
                )}
            </div>
        </Row>
    </Template>
);

export default TemplateSem;
