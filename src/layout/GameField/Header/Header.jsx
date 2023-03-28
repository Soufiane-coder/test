import React from "react";
import { ReactComponent as CoinIcon } from '../../../assets/icons/coin-icon.svg';
import './Header.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../../redux/user/user.selector";
import { addCoin } from '../../../redux/user/user.actions';
import { selectCurrentRoutines } from '../../../redux/routines/routines.selector';
import { useState } from "react";
import { ReactComponent as Close } from '../../../assets/icons/close.svg';

const Header = ({ addCoin, user, routines }) => {
    // return (<><button onClick={() => addCoin(user)}>add coins </button> <p>{user?.money}</p></>)
    // let notifications = routines?.reduce((accum, routine) => routine.submitted === "0" ? ++accum : accum, 0);
    // let notifications = routines.payload.routines ? routines.payload.routines.reduce((accum, routine) => {
    //     return routine.submitted === "0" ? ++accum : accum;
    // }, 0) : -1;
    const [popup, setPopup] = useState(false);

    return (
        <div className="game__field--header">
            {
                popup ? <div className="popup">
                    <div className="popup__window">
                        <Close className="popup__window--close" onClick={() => setPopup(false)} />

                        <div style={{ height: "80%" }}>
                            <div className="popup__window--title">
                                <input placeholder="Title" type="text" name="title" id="title" required />
                            </div>
                            <div className="popup__window--description">
                                <textarea name="description" placeholder="Description" id="description"></textarea>
                            </div>
                        </div>
                        <div style={{ height: "20%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <div className="popup__window--level">
                                <input type="number" placeholder="level" name="level" id="level" min="1" max="5" />
                            </div>
                            <div className="popup__window--important">
                                <label className="container">
                                    <input type="checkbox" id="important" />
                                    <div className="checkmark"></div>
                                    <label htmlFor="important">Important</label>
                                </label>
                            </div>
                            <div className="popup__window--add-button">
                                <input type="submit" value="Add routine" />
                            </div>
                        </div>
                    </div>
                </div > : null
            }
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