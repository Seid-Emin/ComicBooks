import React from 'react'
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom'

import * as actions from '../../../store/actions/index'

import { StyledGroupingCategories } from '../../Styles/StyledGroupingCategories'

const GroupingCategories = ({ changeGroup, randNum }) => {
    return (
        <StyledGroupingCategories>
            <NavLink onClick={() => changeGroup('year')} to='/year' activeClassName='activeGroupingCategories'><li><p value='year'>Year</p></li></NavLink>
            <NavLink onClick={() => changeGroup('writer')} to='/writer' activeClassName='activeGroupingCategories'> <li><p value='writter'>Writer</p></li></NavLink>
            <NavLink onClick={() => changeGroup('artist')} to='/artist' activeClassName='activeGroupingCategories'><li><p value='artist'>Artist</p></li></NavLink>
            <NavLink onClick={() => changeGroup('owner')} to='/owner' activeClassName='activeGroupingCategories'> <li><p value='owner'>Owner</p></li></NavLink>
            <NavLink onClick={() => changeGroup('random', randNum)} to='/random' activeClassName='activeGroupingCategories'><li><p value='random'>Random</p></li></NavLink>
        </StyledGroupingCategories >
    )
}

const mapsStateToProps = state => {
    return {
        randNum: state.bookResults.randNum // for randomising only
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeGroup: (category) => dispatch(actions.changeGroupHandler(category)),
    }
}

export default connect(mapsStateToProps, mapDispatchToProps)(withRouter(GroupingCategories)) 
