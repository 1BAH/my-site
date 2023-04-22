import React, { useState } from 'react';
import { Tab, Nav, Row, Col } from 'react-bootstrap';
import textStyles from '../../css/Text.module.css';
import basicStyles from '../../css/Default.module.css';
import Database from './services/Database';
import HotKeys from './hotkeys/HotKeys';
import Docker from './services/Docker';
import Services from './services/Services';
import Checkstyle from './java/Checkstyle';

const IDE = () => {
    const [page, setPage] = useState(0);
    return (
        <>
            <h1 className={textStyles.header}>Работа в средах разработки</h1>
            <hr className={basicStyles.separator} />
            <div className={textStyles.description}>Изучаем среды разработки от JetBrains</div>
            <hr className={basicStyles.separator} />
            <Tab.Container id="left-tabs-example" defaultActiveKey="hotkeys">
                <Row style={{ width: '100%' }}>
                    <Col sm={2}>
                        <Nav variant="pills" className="flex-column" style={{ padding: '2px' }}>
                            <Nav.Item>
                                <Nav.Link
                                    eventKey="hotkeys"
                                    className={basicStyles.link}
                                    onClick={() => setPage(0)}
                                    style={
                                        page === 0
                                            ? { backgroundColor: 'rgb(1, 75, 32)', color: '#ccff00' }
                                            : { backgroundColor: 'rgb(1, 75, 32, 0.2)' }
                                    }
                                >
                                    <div>Горячие клавиши</div>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link
                                    eventKey="database"
                                    className={basicStyles.link}
                                    onClick={() => setPage(1)}
                                    style={
                                        page === 1
                                            ? { backgroundColor: 'rgb(1, 75, 32)', color: '#ccff00' }
                                            : { backgroundColor: 'rgb(1, 75, 32, 0.2)' }
                                    }
                                >
                                    Работа с базами данных
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link
                                    eventKey="docker"
                                    className={basicStyles.link}
                                    onClick={() => setPage(2)}
                                    style={
                                        page === 2
                                            ? { backgroundColor: 'rgb(1, 75, 32)', color: '#ccff00' }
                                            : { backgroundColor: 'rgb(1, 75, 32, 0.2)' }
                                    }
                                >
                                    Докер
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link
                                    eventKey="checkstyle"
                                    className={basicStyles.link}
                                    onClick={() => setPage(3)}
                                    style={
                                        page === 3
                                            ? { backgroundColor: 'rgb(1, 75, 32)', color: '#ccff00' }
                                            : { backgroundColor: 'rgb(1, 75, 32, 0.2)' }
                                    }
                                >
                                    CheckStyle
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="hotkeys">
                                <HotKeys />
                            </Tab.Pane>
                            <Tab.Pane eventKey="database">
                                <Services />
                                <hr className={basicStyles.separator} />
                                <Database />
                            </Tab.Pane>
                            <Tab.Pane eventKey="docker">
                                <Services />
                                <hr className={basicStyles.separator} />
                                <Docker />
                            </Tab.Pane>
                            <Tab.Pane eventKey="checkstyle">
                                <Checkstyle />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </>
    );
};

export default IDE;
