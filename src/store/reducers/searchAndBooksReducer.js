import * as actionTypes from '../actions/actionTypes';

const initialState = {
    searchText: null,
    category: 'year',
    groupYears: [],
    groupWriters: [],
    groupArtists: [],
    groupOwners: [],
    groupRandom: [],
    prevGroup: null,
    groupCategoriesResults: [],
    searchResult: [],
    loading: false,
    error: ''
}

const searchParam = (state, action) => {
    return {
        ...state,
        searchText: action.searchText,
        loading: true
    }
}

export const fetchGroupCategoriesStart = (state, action) => {
    return {
        ...state,
        loading: true
    };
};

const fetchGroupCategoriesSuccess = (state, action) => {
    return {
        ...state,
        groupCategoriesResults: action.groupCategoriesResults,
        groupYears: action.year,
        groupWriters: action.writer,
        groupArtists: action.artist,
        groupOwners: action.owner,
        groupRandom: action.random,
        loading: false
    }
}

export const fetchGroupCategoriesFail = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.error.message
    };
};

export const changeGroupHandler = (state, action) => {
    //generate random number and check for dublicating one
    // show random group on random selected
    let currentCategory = action.category;
    if (currentCategory === 'random') {
        let random = ['year', 'writer', 'artist', 'owner'];
        let randomNumber = Math.floor(Math.random() * 4);
        if (random[randomNumber] === state.prevGroup) {
            if (randomNumber > 0) {
                randomNumber--;
            } else {
                randomNumber++;
            }
        }
        currentCategory = random[randomNumber];
    }

    return {
        ...state,
        category: currentCategory,
        searchText: null,
        prevGroup: currentCategory
    }
}

export const fetchSearchStart = (state, action) => {
    return {
        ...state,
        loading: true,
    };
};

export const fetchSearchSuccess = (state, action) => {
    return {
        ...state,
        searchResult: action.searchResult,
        loading: false
    };
};

export const fetchSearchFail = (state, action) => {
    return {
        ...state,
        error: action.error.message,
        loading: false
    };
};

export const loadSingleBookGoBack = (state, action) => {
    return {
        ...state,
        loading: false
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH: return searchParam(state, action);

        case actionTypes.FETCH_ALL_BOOKS_START: return fetchGroupCategoriesStart(state, action);
        case actionTypes.FETCH_ALL_BOOKS_SUCCESS: return fetchGroupCategoriesSuccess(state, action);
        case actionTypes.FETCH_ALL_BOOKS_FAIL: return fetchGroupCategoriesFail(state, action);

        case actionTypes.CHANGE_GROUP: return changeGroupHandler(state, action);

        case actionTypes.FETCH_SEARCH_START: return fetchSearchStart(state, action);
        case actionTypes.FETCH_SEARCH_SUCCESS: return fetchSearchSuccess(state, action);
        case actionTypes.FETCH_SEARCH_FAIL: return fetchSearchFail(state, action);

        case actionTypes.LOAD_SINGLE_BOOK_GO_BACK: return loadSingleBookGoBack(state, action);

        default: return state;
    }
}

export default reducer