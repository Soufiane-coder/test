import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentDisplayMode } from '../../../redux/display-mode/display-mode.selector';
import Titre from '../Titre/Titre';
import { displayModes } from '../../../enums/displayModes';
import './Header.scss';


const Header = ({ displayMode }) => {
    const isDarkMode = displayMode === displayModes.dark;
    return (
        <div className={`header ${isDarkMode && 'dark-mode'}`} >
            <div className={isDarkMode ? 'background-white bg-dark-p-color' : 'background-white'} />
            <div className={`${isDarkMode && 'bg-dark-p-color'} triangle-white triangle-up-right`} />
            <div className={`${isDarkMode && 'bg-dark-p-color'} triangle-white triangle-buttom-left`} />
            <Titre />
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    displayMode: selectCurrentDisplayMode
})



export default connect(mapStateToProps)(Header);