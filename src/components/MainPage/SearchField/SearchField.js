import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom'

import * as actions from '../../../store/actions/index'

import { StyledSearchField } from '../../Styles/StyledSearchField'
import searchIcon from '../../../Assets/PNG/Search Icon.png'

class SearchField extends Component {
    handleSearch = (e) => {
        this.props.searchText(e.target.value); //get searching parameters
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.searchBookByName(this.props.search); // pass searching parameter/query for fetching
        this.props.history.push('/searching?' + this.props.search); // push the path to url if submited
    }

    render() {
        return (
            <StyledSearchField>
                <form onSubmit={this.handleSubmit} autoComplete="on">
                    <input onKeyUp={this.handleSearch} type='search' placeholder='Search by book name' required />
                    {/* push/link path onClick event */}
                    <Link to={'/searching?' + this.props.search}> <img onClick={this.handleSubmit} src={searchIcon} alt='searchIcon' /></Link>
                </form>
            </StyledSearchField>
        )
    }
}

const mapStateToProps = state => {
    return {
        search: state.bookResults.searchText
    }
}

const mapDispatchToProps = dispatch => {
    return {
        searchText: (search) => dispatch(actions.search(search)),
        searchBookByName: (query) => dispatch(actions.searchBookByName(query))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchField))
