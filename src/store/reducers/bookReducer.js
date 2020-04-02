import * as actionTypes from '../actions/actionTypes';

const initialState = {
    bookInfo: [],
    loading: false,
    bookPage: false
}

export const loadSingleBookStart = (state, action) => {
    return {
        ...state,
        loading: true
    }
}

export const loadSingleBookSuccess = (state, action) => {

    return {
        ...state,
        bookInfo: action.bookInfo,
        bookPage: true,
        loading: false
    }
}

export const loadSingleBookFail = (state, action) => {
    return {
        ...state,
        loading: false
    }
}


export const loadSingleBookGoBack = (state, action) => {
    return {
        ...state,
        bookInfo: [],
        bookPage: false,
        loading: false
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_SINGLE_BOOK_START: return loadSingleBookStart(state, action);
        case actionTypes.LOAD_SINGLE_BOOK_SUCCESS: return loadSingleBookSuccess(state, action);
        case actionTypes.LOAD_SINGLE_BOOK_FAIL: return loadSingleBookSuccess(state, action);

        case actionTypes.LOAD_SINGLE_BOOK_GO_BACK: return loadSingleBookGoBack(state, action);

        default: return state;
    }
}

export default reducer