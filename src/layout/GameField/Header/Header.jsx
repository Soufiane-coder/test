import React from "react";
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
            </div>
        )
    }
}

export default Header;