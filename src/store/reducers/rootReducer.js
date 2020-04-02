import searchParam from './searchAndBooksReducer'
import singleBook from './bookReducer'

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    bookResults: searchParam,
    singleBook: singleBook
});

export default rootReducer;