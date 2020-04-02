import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import * as actions from '../../store/actions/index'

import SearchField from './SearchField/SearchField'
import GroupingCategories from './GroupingCategories/GroupingCategories'
import CategoryGroup from '../../components/CategoryGroup/CategoryGroup'
import Spinner from '../UI/Spinner/Spinner'

import { StyledMain } from '../Styles/StyledMain'


const MainPage = ({ searchText, category, groupYears, groupWriters, groupArtists, groupOwners, loadingBookResults, loadingSingleBookResult }) => {
    let currentCategory = '';
    switch (category) {
        case 'year':
            currentCategory = [...groupYears];
            break;
        case 'writer':
            currentCategory = [...groupWriters];
            break;
        case 'artist':
            currentCategory = [...groupArtists];
            break;
        case 'owner':
            currentCategory = [...groupOwners];
            break;
        default:

            break;
    }
    let categoryGroups = loadingBookResults || loadingSingleBookResult ? <Spinner /> : !searchText ? currentCategory.map((categoryInfo, index) => {
        return <CategoryGroup key={index} groupCat={categoryInfo} />
    }) : <CategoryGroup key={Math.floor(Math.random() * 10)} groupCat={searchText} />;

    // let book = bookPage ? <BookPage /> : null;
    return (
        <StyledMain>
            <SearchField />
            <GroupingCategories />
            {categoryGroups}
        </StyledMain>
    )
}

const mapStateToProps = state => {
    return {
        searchText: state.bookResults.searchText,
        category: state.bookResults.category,
        groupYears: state.bookResults.groupYears,
        groupWriters: state.bookResults.groupWriters,
        groupArtists: state.bookResults.groupArtists,
        groupOwners: state.bookResults.groupOwners,
        bookPage: state.singleBook.bookPage,

        loadingBookResults: state.bookResults.loading,
        loadingSingleBookResult: state.singleBook.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchBooks: () => dispatch(actions.getAllBooks()),
        changeGroup: (category) => dispatch(actions.changeGroupHandler(category))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MainPage))
