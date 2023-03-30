import React from "react";
import { ReactComponent as CoinIcon } from '../../../assets/icons/coin-icon.svg';
import './Header.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../../redux/user/user.selector";
import { addCoin } from '../../../redux/user/user.actions';
import { selectCurrentRoutines } from '../../../redux/routines/routines.selector';
import { useState } from "react";
import PopupWindowRoutine from "../../../components/PopupWindowRoutine/PopupWindowRoutine";

const Header = ({ addCoin, user, routines }) => {
    // return (<><button onClick={() => addCoin(user)}>add coins </button> <p>{user?.money}</p></>)
    // let notifications = routines?.reduce((accum, routine) => routine.submitted === "0" ? ++accum : accum, 0);
    // let notifications = routines.payload.routines ? routines.payload.routines.reduce((accum, routine) => {
    //     return routine.submitted === "0" ? ++accum : accum;
    // }, 0) : -1;
    const [popup, setPopup] = useState(false);

    return (
        <div className="game__field--header">
            {popup ? <PopupWindowRoutine setPopup={setPopup} /> : null}
            <div className="user-informations-bar">
                <div className="tree-lines">
                    <div className="line-one" />
                    <div className="line-two" />
                    <div className="line-three" />
                </div>
                <div className="username-and-rate">
                    <div className="rate">
                        <div className="et checked"></div>
                        <div className="et"></div>
                        <div className="et"></div>
                        <div className="et"></div>
                        <div className="et"></div>
                    </div>
                    <div className="username">{user?.username}</div>
                </div>
            </div>
            <div className="updating-informations">
                <p className="notification-routine">Routines <span className="notfication">{routines?.reduce((accum, routine) => routine.submitted === "0" ? ++accum : accum, 0)}</span></p>
                <div className="prices-and-xps">
                    <div className="xp">{user?.xp}XP</div>
                    <div className="coins"><span>{user?.coin}</span> <CoinIcon /></div>
                </div>
            </div>
            <div className="filter-and-adding-button">
                <div className="filter">
                    <span className="filter-item all">All <span className="tag">45</span></span>
                    <span className="filter-item important"> Important <span className="tag">45</span></span>
                    <span className="filter-item waiting"> Waiting <span className="tag">45</span></span>
                    <span className="filter-item completed"> Completed <span className="tag">45</span></span>
                </div>
                <button onClick={() => setPopup(true)}>+ Add Routine</button>
            </div>
        </div >
    )
}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser,
    routines: selectCurrentRoutines
})

const mapDispatchToProps = dispatch => ({
    addCoin: (user) => dispatch(addCoin(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);