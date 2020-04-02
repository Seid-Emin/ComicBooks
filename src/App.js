import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import * as actions from './store/actions/index'

import './App.css';
import Header from './components/Header/Header'
import MainPage from './components/MainPage/MainPage'
import BookPage from './components/BookPage/BookPage'

class App extends Component {
  componentDidMount() {
    let props = this.props;

    //initial fetching data from server
    props.fetchBooks();

    //check for url matches and if so, take the appropriate actions
    let urlParam = props.history.location.pathname.replace('/', '');
    let query = props.history.location.search.replace('?', '');

    // does url contains any old data of searching or surfing
    //if so.. adjust the path and display the path data
    if (!urlParam.includes('book') && props.history.location.pathname !== '/' && !urlParam.includes('searching')) {
      props.changeGroup(urlParam)
    } else if (urlParam.includes('book')) {
      let urlParamTemp = urlParam.replace('book/', '').replace(/%20/g, ' '); // get rid of all extra symbols and letters
      urlParam = urlParamTemp.split('/writer:')[0];
      let urlParamOwner = urlParamTemp.split('/writer:')[1]; // get the writer used for compare
      props.searchBookByName(urlParam, urlParamOwner); //get the book name from url and get the data for that book from the server
      props.searchText(urlParam); // update search paramether at redux store
      props.history.push('/searching?' + urlParam); // update path
    } else if (urlParam.includes('searching')) {
      props.searchBookByName(query); //get the book name from url and get the data for that book from the server
      query = query.replace(/%20/g, ' '); // get rid of all extra symbols and letters
      props.searchText(query);  // update search paramether at redux store
      props.history.push('/searching?' + query); // update path
    }
    else {
      props.history.push('/year'); // if not just show the primary path and data
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path='/:category' exact component={MainPage} />
          <Route path='/book/:bookName' component={BookPage} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    category: state.bookResults.category,
    searchText: state.bookResults.searchText,
    groupCategoriesResults: state.bookResults.groupCategoriesResults
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchBooks: () => dispatch(actions.getAllBooks()),
    changeGroup: (category) => dispatch(actions.changeGroupHandler(category)),
    searchBookByName: (query, urlParamOwner) => dispatch(actions.searchBookByName(query, urlParamOwner)),
    searchText: (search) => dispatch(actions.search(search))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
