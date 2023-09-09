import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setIdePage } from '../actions/ideActions';

export const navToIdePage = (page) => {
    const dispatch = useDispatch();
    const nav = useNavigate();

    return () => {
        dispatch(setIdePage(page));
        nav('/ide');
    };
};

export const navToUrl = (url) => {
    const nav = useNavigate();

    return () => nav(url);
};
