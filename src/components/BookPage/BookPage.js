import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import * as actions from '../../store/actions/index'

import GroupBook from '../CategoryGroup/GroupBook/GroupBook'

import { StyledBookPage } from '../Styles/StyledBookPage'
import { StyledCategoryGroup } from '../Styles/StyledCategoryGroup'
import fullStar from '../../Assets/SVG/Full star.svg'
import emptyStar from '../../Assets/SVG/Empty star.svg'
import backIcon from '../../Assets/SVG/Back Icon.svg'

class BookPage extends Component {
    backToCollectionHandler = () => {
        let props = this.props;

        if (props.prevGroup) { // check for prev history 
            //   props.history.goBack();
            console.log(props);

            props.changeGroup(props.category);
            props.history.push('/' + props.category)
        } else {
            props.history.push('/year'); // if fresh url with prev searched book is pasted, bo back redirects to home page with years group preloaded
            props.searchText('');
        }
        props.loadSingleBookGoBack();
    }

    render() {
        const { bookInfo, groupCategoriesResults } = this.props;
        //shuffle books in the result for later displaying a random one
        const copyGroupCat = [...groupCategoriesResults];
        let shuffledResults = copyGroupCat ? copyGroupCat.sort(() => Math.random() - 0.5) : null;

        //pick first 5 of the shuffled results
        let randomBooks = shuffledResults ? shuffledResults.splice(0, 5).map((randomBook, index) => {
            return < GroupBook key={index} bookInfo={randomBook} />
        }) : null;

        let rating = [];
        // Loop to create stars type
        // Fullstars
        for (let i = 0; i < bookInfo.rating; i++) {
            rating.push(1);
        }
        // Emptystars
        for (let j = 0; j < 5 - bookInfo.rating; j++) {
            rating.push(0);
        }

        let ratingStarts = rating.map((singleStar, index) => {
            if (singleStar === 1) {
                return <img src={fullStar} key={index} className='FullStars' alt={fullStar} />
            } else {
                return <img src={emptyStar} key={index} className='EmptyStars' alt={emptyStar} />
            }
        });

        return (
            <StyledBookPage>
                <div className='backToCollection' onClick={this.backToCollectionHandler}>
                    <img src={backIcon} className='backIcon' alt={backIcon}></img>
                    <p className='backText'>Back to collection</p>
                </div>
                <div className='BookInfo'>
                    <img src={bookInfo.image} className='BookInfo_img' alt={bookInfo.image} />
                    <div className='BookInfo_info'>
                        <div className='BookNameAndRating' >
                            <p className='BookName'>{bookInfo.name ? bookInfo.name.split('#')[0] : null}({bookInfo.year})</p>
                            <div className='Rating'>{ratingStarts}</div>
                        </div>
                        <section className='BookCreds'>
                            <p className='BookCreds_title'>Writer: <span className='BookCreds_title-text'>{bookInfo.writer}</span></p>
                            <p className='BookCreds_title'>Artist: <span className='BookCreds_title-text'>{bookInfo.artist}</span></p>
                            <p className='BookCreds_title'>Publication: <span className='BookCreds_title-text'>{bookInfo.publication}</span></p>
                            <p className='BookCreds_title'>Owner: <span className='BookCreds_title-text'>{bookInfo.owner}</span></p>
                        </section>
                        <p className='BookSummary-text'>{bookInfo.summary}</p>
                    </div>
                </div>
                <div className='CategoryGroup-divideLine BookPage-divideLine' />
                <StyledCategoryGroup>
                    <h3 className='CategoryGroup-title'>Other Random Books</h3>
                    <div className='CategoryGroupGridWrapper'>
                        {randomBooks}
                    </div>
                </StyledCategoryGroup>
            </StyledBookPage>
        )
    }
}

const mapStateToProps = state => {
    return {
        bookInfo: state.singleBook.bookInfo,
        category: state.bookResults.category,
        groupCategoriesResults: state.bookResults.groupCategoriesResults,
        prevGroup: state.bookResults.prevGroup,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeGroup: (category) => dispatch(actions.changeGroupHandler(category)),
        loadSingleBookGoBack: () => dispatch(actions.loadSingleBookGoBack()),
        searchText: (search) => dispatch(actions.search(search))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BookPage)) 