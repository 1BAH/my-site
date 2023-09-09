import React from 'react';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import textStyles from '../../css/Text.module.css';
import Database from './services/Database';
import HotKeys from './hotkeys/HotKeys';
import Docker from './services/Docker';
import Services from './services/Services';
import Checkstyle from './java/Checkstyle';
import CppBuild from './cpp/CppBuild';
import Debugger from './debugger/Debugger';
import Section from './Section';
import Separator from '../../elements/Separator';

const IDE = () => {
    const idToName = {
        0: 'hotkeys',
        1: 'database',
        2: 'docker',
        3: 'checkstyle',
        4: 'cppbuild',
        5: 'debugger',
    };

    const page = useSelector((state) => state.ide.page);

    return (
        <>
            <h1 className={textStyles.header}>Работа в средах разработки</h1>
            <Separator />
            <div className={textStyles.description}>Изучаем среды разработки от JetBrains</div>
            <Separator />
            <Tab.Container id="left-tabs-example" defaultActiveKey="hotkeys" activeKey={idToName[page]}>
                <Row style={{ width: '100%' }}>
                    <Col sm={2}>
                        <Nav variant="pills" className="flex-column" style={{ padding: '2px' }}>
                            <Section eventKey="hotkeys" id={0} description="Горячие клавиши" />
                            <Section eventKey="database" id={1} description="Работа с базами данных" />
                            <Section eventKey="docker" id={2} description="Докер" />
                            <Section eventKey="checkstyle" id={3} description="CheckStyle" />
                            <Section eventKey="cppbuild" id={4} description="Сборка в C++" />
                            <Section eventKey="debugger" id={5} description="Отладка в С++" />
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="hotkeys">
                                <HotKeys />
                            </Tab.Pane>
                            <Tab.Pane eventKey="database">
                                <Services />
                                <Separator />
                                <Database />
                            </Tab.Pane>
                            <Tab.Pane eventKey="docker">
                                <Services />
                                <Separator />
                                <Docker />
                            </Tab.Pane>
                            <Tab.Pane eventKey="checkstyle">
                                <Checkstyle />
                            </Tab.Pane>
                            <Tab.Pane eventKey="cppbuild">
                                <CppBuild />
                            </Tab.Pane>
                            <Tab.Pane eventKey="debugger">
                                <Debugger />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </>
    );
};

export default IDE;
