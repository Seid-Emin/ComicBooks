import * as actionTypes from './actionTypes'

export const search = searchText => {
    return {
        type: actionTypes.SEARCH,
        searchText: searchText
    };
};

export const fetchSearchStart = () => {
    return {
        type: actionTypes.FETCH_SEARCH_START
    };
};

export const fetchSearchSuccess = (searchResult) => {
    return {
        type: actionTypes.FETCH_SEARCH_SUCCESS,
        searchResult: searchResult
    };
};

export const fetchSearchFail = (error) => {
    return {
        type: actionTypes.FETCH_SEARCH_FAIL,
        error: error
    };
};

export const loadSingleBookSuccess = (bookInfo) => {
    return {
        type: actionTypes.LOAD_SINGLE_BOOK_SUCCESS,
        bookInfo: bookInfo
    }
}

export const searchBookByName = (query, writer) => {
    return {
        type: actionTypes.FETCH_SEARCH,
        query: query,
        writer: writer
    }
}