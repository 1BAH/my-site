export const SET_IDE_PAGE = 'SET_IDE_PAGE';

export function setIdePage(page) {
    return (dispatch) => {
        dispatch({ type: SET_IDE_PAGE, page });
    };
}
