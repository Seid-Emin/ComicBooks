import React from 'react'
import { connect } from 'react-redux';

import GroupBook from './GroupBook/GroupBook'
import Spinner from '../UI/Spinner/Spinner'

import { StyledCategoryGroup } from '../Styles/StyledCategoryGroup'

const CategoryGroup = ({ groupCat, searchText, groupCategoriesResults, searchResult, category, loadingBookResults, loadingSingleBookResult }) => {

    // show sipped while loading/fetching data from server
    let results = loadingBookResults && loadingSingleBookResult ? <Spinner /> : searchText ? searchResult[0] ?
        // if searching for a book display search result
        searchResult.map((singleBook, index) => {
            return <GroupBook key={index} bookInfo={singleBook} />
        }) : <p className='NoResults'>No Books Found</p> :
        // else display group results
        groupCategoriesResults.map((singleBook, index) => {
            return singleBook[category] === groupCat ?
                <GroupBook key={index} bookInfo={singleBook} /> : null
        });

    return (
        <StyledCategoryGroup>
            <h3 className='CategoryGroup-title'>{groupCat}</h3>
            <div className='CategoryGroupGridWrapper'>
                {results}
            </div>
            <div className='CategoryGroup-divideLine' />
        </StyledCategoryGroup>
    )
}

const mapStateToProps = state => {
    return {
        searchText: state.bookResults.searchText,
        groupCategoriesResults: state.bookResults.groupCategoriesResults,
        searchResult: state.bookResults.searchResult,
        category: state.bookResults.category,

        loadingBookResults: state.bookResults.loading,
        loadingSingleBookResult: state.singleBook.loading
    }
}

export default connect(mapStateToProps)(CategoryGroup)

