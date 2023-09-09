import { SET_IDE_PAGE } from '../actions/ideActions';

const initialState = {
    page: 0,
};

export default function ide(state = initialState, action) {
    switch (action.type) {
        case SET_IDE_PAGE:
            return { ...state, page: action.page };
        default:
            return state;
    }
}
