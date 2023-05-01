import React, { useEffect } from 'react';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Header from '../../layout/GameField/Header/Header';
import './GameField.scss';
import ListRoutine from '../../layout/GameField/ListRoutine/ListRoutine';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { setCurrentRoutines } from '../../redux/routines/routines.actions';
import myServer from "../../components/server/server";
import $ from 'jquery';

const GameField = ({ setCurrentRoutines, user }) => {
    useEffect(() => {
        const getFetchRoutines = async () => {
            let res;
            try {
                res = await $.ajax({
                    url: `${myServer}/listRoutine.php`,
                    method: "post",
                    data: {
                        userId: user.userId
                    }
                });
                const allRoutines = JSON.parse(res).reverse();
                setCurrentRoutines(allRoutines);

            } catch (err) {
                console.error(
                    `Error cannot connect with the data base to list all routines ${err}`
                );
                console.error(res);
                return;
            }
        }
        getFetchRoutines();
    }, [setCurrentRoutines, user]);



    return (
        <div className="game__field">
            <NavigationBar />
            <main >
                <Header />
                <ListRoutine />
            </main>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser
})

const mapDispatchToProps = (dispatch) => ({
    setCurrentRoutines: (routines) => dispatch(setCurrentRoutines(routines)),
})
export default connect(mapStateToProps, mapDispatchToProps)(GameField);