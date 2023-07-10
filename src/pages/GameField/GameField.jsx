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
import { selectCurrentDisplayMode } from '../../redux/display-mode/display-mode.selector';
import $ from 'jquery';


const GameField = ({ setCurrentRoutines, user, displayMode }) => {
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
                    `Error cannot connect with the data base to list all routines`, err.message
                );
                console.error(res);
                return;
            }
        }
        getFetchRoutines();
    }, [user]);


    return (
        <div className={`game__field ${displayMode}-mode`} >
            <NavigationBar />
            <main className={displayMode === "light" ? '' : 'bg-dark-p-color'}>
                <Header className={`${displayMode}-mode`} />
                <ListRoutine className={displayMode === "light" ? '' : 'bg-dark-s-color'} />
            </main>
        </div >
    )
}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser,
    displayMode: selectCurrentDisplayMode
})

const mapDispatchToProps = (dispatch) => ({
    setCurrentRoutines: (routines) => dispatch(setCurrentRoutines(routines)),
})
export default connect(mapStateToProps, mapDispatchToProps)(GameField);