import * as actionTypes from './actionTypes'

export const loadSingleBookStart = () => {
    return {
        type: actionTypes.LOAD_SINGLE_BOOK_START
    }
}

export const loadSingleBookSuccess = (bookInfo) => {
    return {
        type: actionTypes.LOAD_SINGLE_BOOK_SUCCESS,
        bookInfo: bookInfo
    }
}

export const loadSingleBookFail = () => {
    return {
        type: actionTypes.LOAD_SINGLE_BOOK_FAIL
    }
}

export const loadSingleBookGoBack = () => {
    return {
        type: actionTypes.LOAD_SINGLE_BOOK_GO_BACK
    }
}
