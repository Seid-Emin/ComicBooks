import React from 'react'
import { connect } from 'react-redux';

import logo from '../../Assets/PNG/Logo.png'
import { StyledHeader } from '../Styles/StyledHeader'
import { Link } from 'react-router-dom'

import * as actions from '../../store/actions/index'

const Header = ({ changeGroup }) => {
    return (
        <StyledHeader>
            {/* navigate to home page onClick */}
            <Link to='/year' onClick={() => changeGroup('year')}>
                <img src={logo} alt='logo' />
            </Link>
        </StyledHeader>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        changeGroup: (category) => dispatch(actions.changeGroupHandler(category)),
    }
}

export default connect(null, mapDispatchToProps)(Header)
