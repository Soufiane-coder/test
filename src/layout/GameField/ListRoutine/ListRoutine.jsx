import React from "react";
import { useEffect } from "react";

import Routine from "../../../components/Routine/Routine";
import $ from 'jquery';
import { Fade } from 'react-reveal';
import './ListRoutine.scss';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { setCurrentUser } from "../../../redux/user/user.actions";
import { loadCurrentRoutines, setCurrentRoutines } from '../../../redux/routines/routines.actions';
import { selectCurrentRoutines } from '../../../redux/routines/routines.selector';

const ListRoutine = ({ user, fullDate, fullDateOld, routinesCollection, setCurrentRoutines }) => {
    useEffect(() => {
        async function getRoutines() {
            if (fullDate !== fullDateOld) {
                await $.ajax({
                    url: "http://localhost/Game%20Of%20Life/ableButtons.php",
                    method: "get",
                    data: {
                        id: user.userId,
                    }
                });
                localStorage.setItem('fullDateOld', fullDate);
            }
            let allRoutines;
            try {
                const res = await $.ajax({
                    url: "http://localhost/Game%20Of%20Life/listRoutine.php",
                    method: "get",
                    data: {
                        userId: user.userId
                    }
                });

                allRoutines = JSON.parse(res).reverse();
                if (fullDate === fullDateOld) {
                    setCurrentRoutines(allRoutines);
                }
            } catch (err) {
                console.error(
                    `Error cannot connect with the data base to list all routines${err}`
                );
                return;
            }
        }
        getRoutines();
    }, []);
    return (
        <div className="list-routine">
            {
                routinesCollection ? routinesCollection.map(routine => {
                    return (
                        <Fade key={routine.taskId} bottom>
                            <Routine className='routine' key={routine.taskId} routine={routine} user={user} />
                        </Fade>
                    )
                }
                ) : ""
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    user: setCurrentUser,
    routinesCollection: selectCurrentRoutines,
})

const mapDispatchToProps = (dispatch) => ({
    setCurrentRoutines: (routines) => dispatch(setCurrentRoutines(routines)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ListRoutine);