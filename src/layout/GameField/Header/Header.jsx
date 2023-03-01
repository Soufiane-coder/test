import React from "react";
import { ReactComponent as CoinIcon } from '../../../assets/icons/coin-icon.svg';
import './Header.scss';

class Header extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="game__field--header">
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
                        <div className="username">username</div>
                    </div>
                </div>
                <div className="updating-informations">
                    <p className="notification-routine">Routines <span className="notfication">-1</span></p>
                    <div className="prices-and-xps">
                        <div className="xp">1000XP</div>
                        <div className="coins"><span>10</span> <CoinIcon /></div>
                    </div>
                </div>
                <div className="filter-and-adding-button">
                    <div className="filter">
                        <span className="filter-item all">All <span className="tag">45</span></span>
                        <span className="filter-item important"> Important <span className="tag">45</span></span>
                        <span className="filter-item waiting"> Waiting <span className="tag">45</span></span>
                        <span className="filter-item completed"> Completed <span className="tag">45</span></span>
                    </div>
                    <button>+ Add Routine</button>
                </div>
            </div>
        )
    }
}

export default Header;