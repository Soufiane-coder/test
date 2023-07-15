import React from "react";
import { ReactComponent as CoinIcon } from '../../../assets/icons/coin-icon.svg';
import './Header.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../../redux/user/user.selector";
import { selectCurrentRoutines } from '../../../redux/routines/routines.selector';
import { useState } from "react";
import PopupWindowRoutine from "../../../components/PopupWindowRoutine/PopupWindowRoutine";

const Header = ({ user, routines }) => {
    const [popup, setPopup] = useState(false);


    return (
        <div className="game__field--header">

            <PopupWindowRoutine {...{ popup, setPopup }} />


            <div className="user-informations-bar">
                <div className="tree-lines">
                    <div className="line-one" />
                    <div className="line-two" />
                    <div className="line-three" />
                </div>
                <div className="username-and-rate">
                    <div className="rate">
                        <div className="et checked">★</div>
                        <div className="et">★</div>
                        <div className="et">★</div>
                        <div className="et">★</div>
                        <div className="et">★</div>
                    </div>
                    <div className="username">{user?.username}</div>
                </div>
            </div>
            <div className="updating-informations">
                <p className="notification-routine">Routines <span className="notfication">{routines?.reduce((accum, routine) => routine.submitted === "0" ? ++accum : accum, 0)}</span></p>
                <div className="prices-and-xps">
                    <div className="xp">{user?.xp}XP</div>
                    <div className="coins">{user?.coin}<CoinIcon /></div>
                </div>
            </div>
            <div className="filter-and-adding-button">
                <div className="filter">
                    <input type="radio" name="filter" id="all" />
                    <label className="filter-item all" htmlFor="all">All routine <span className="tag">0</span></label>

                    <input type="radio" name="filter" id="_important" />
                    <label className="filter-item important" htmlFor="_important">Important <span className="tag">0</span></label>

                    <input type="radio" name="filter" id="waiting" />
                    <label className="filter-item waiting" htmlFor="waiting"> Waiting <span className="tag">0</span></label>

                    <input type="radio" name="filter" id="completed" />
                    <label className="filter-item completed" htmlFor="completed"> Completed <span className="tag">0</span></label>
                    <span className="selector"></span>
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


export default connect(mapStateToProps)(Header);