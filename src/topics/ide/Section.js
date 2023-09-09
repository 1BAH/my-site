import React from 'react';
import { Nav } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import basicStyles from '../../css/Default.module.css';
import { setIdePage } from '../../actions/ideActions';

const Section = ({ eventKey, id, description }) => {
    const dispatch = useDispatch();
    const page = useSelector((state) => state.ide.page);

    return (
        <Nav.Item>
            <Nav.Link
                eventKey={eventKey}
                className={basicStyles.link}
                onClick={() => {
                    dispatch(setIdePage(id));
                }}
                style={page === id ? { backgroundColor: 'rgb(1, 75, 32)', color: '#ccff00' } : { backgroundColor: 'rgb(1, 75, 32, 0.2)' }}
            >
                {description}
            </Nav.Link>
        </Nav.Item>
    );
};

export default Section;
