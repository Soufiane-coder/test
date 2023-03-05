import React from 'react';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Header from '../../layout/GameField/Header/Header';
import { withRouter } from 'react-router-dom';
import './GameField.scss';
import ListRoutine from '../../layout/GameField/ListRoutine/ListRoutine';

class GameField extends React.Component {
    constructor({ history }) {
        super();
        if (!localStorage.getItem('user')) {
            history.push('/');
        }
        this.date = new Date();
        this.fullDate = `${`${this.date.getDate()}`.padStart(2, '0')}/${`${this.date.getMonth() + 1
            }`.padStart(2, '0')}/${this.date.getFullYear()}`;
        this.fullDateOld = localStorage.getItem('fullDateOld');
        this.state = {
            user: JSON.parse(localStorage.getItem('user'))
        }
        this.setMoney.bind(this);
    }

    setMoney = () => {
        this.state.user = { user: { money: "99", level: "100" } };
        console.log(this.state);
    }

    render() {

        return (
            <>
                <div className="game__field">
                    <NavigationBar user={this.state.user} />
                    <main >
                        <Header user={this.state.user} setMoney={this.setMoney} />
                        <ListRoutine user={this.state.user} fullDate={this.fullDate} fullDateOld={this.fullDateOld} />
                    </main>
                </div>
            </>
        )
    }

}

export default withRouter(GameField);