import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../../../store/actions/index'

import { StyledGroupBook } from '../../Styles/StyledGroupBook'

class GroupBook extends Component {
    loadBook = () => {
        let props = this.props;
        props.loadSingleBookSuccess(props.bookInfo);
        props.history.replace('/book/' + props.bookInfo.name.split('#')[0] + '/writer:' + props.bookInfo.writer);
        window.scrollTo(0, 0);
    }
    render() {
        const { bookInfo } = this.props;

        return (
            <StyledGroupBook onClick={this.loadBook}>
                <img className='GroupBookImg' src={bookInfo.image} alt={bookInfo.image} />
                <p className='GroupBook_inner-title'>{bookInfo.name.split('#')[0]}</p>
                <p className='GroupBook_inner-ownedBy'>Owned By <span className='ownerName'>{bookInfo.owner}</span></p>
            </StyledGroupBook>
        )
    }

}

const mapDispatchToProps = dispatch => {
    return {
        loadSingleBookSuccess: (bookInfo) => dispatch(actions.loadSingleBookSuccess(bookInfo))
    }
}

export default connect(null, mapDispatchToProps)(withRouter(GroupBook)) 
