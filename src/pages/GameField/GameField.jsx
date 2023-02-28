import React from 'react';
import NavigationBarIntern from '../../components/NavigationBarItern/NavigationBarIntern';
import Header from '../../layout/GameField/Header/Header';
import { withRouter } from 'react-router-dom';
import './GameField.scss';

class GameField extends React.Component {
    constructor({ history }) {
        super();
        if (!localStorage.getItem('user')) {
            history.push('/');
        }
    }

    render() {
        return (
            <>
                <div className="game__field">
                    <NavigationBarIntern />
                    <Header />
                </div>
            </>
        )
    }

}

export default withRouter(GameField);