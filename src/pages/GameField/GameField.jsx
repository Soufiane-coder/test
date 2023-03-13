import React from 'react';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Header from '../../layout/GameField/Header/Header';
import { withRouter } from 'react-router-dom';
import './GameField.scss';
import ListRoutine from '../../layout/GameField/ListRoutine/ListRoutine';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';

class GameField extends React.Component {
    constructor(props) {
        super(props);
        if (!props.user) {
            this.props.history.push('/');
        }
        this.date = new Date();
        this.fullDate = `${`${this.date.getDate()}`.padStart(2, '0')}/${`${this.date.getMonth() + 1
            }`.padStart(2, '0')}/${this.date.getFullYear()}`;
        this.fullDateOld = localStorage.getItem('fullDateOld');
    }


    render() {
        return (
            <>
                <div className="game__field">
                    <NavigationBar />
                    <main >
                        <Header />
                        <ListRoutine fullDate={this.fullDate} fullDateOld={this.fullDateOld} />
                    </main>
                </div>
            </>
        )
    }
}
const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser
})
export default withRouter(connect(mapStateToProps)(GameField));