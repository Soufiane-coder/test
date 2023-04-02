import React from "react";
import { useEffect } from "react";

import Routine from "../../../components/Routine/Routine";
import $ from 'jquery';
import { Fade } from 'react-reveal';
import './ListRoutine.scss';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../../redux/user/user.selector";
import { setCurrentRoutines } from '../../../redux/routines/routines.actions';
import { selectCurrentRoutines } from '../../../redux/routines/routines.selector';
import myServer from "../../../components/server/server";

const ListRoutine = ({ user, fullDate, fullDateOld, routinesCollection, setCurrentRoutines }) => {
    useEffect(() => {
        async function getRoutines() {
            if (fullDate !== fullDateOld) {
                try {
                    await $.ajax({
                        url: `${myServer}/ableButtons.php`,
                        method: "get",
                        data: {
                            id: user.userId,
                        }
                    });
                    localStorage.setItem('fullDateOld', fullDate);
                } catch (err) {
                    console.error(err);
                }
            }
            let allRoutines;
            try {
                const res = await $.ajax({
                    url: `${myServer}/listRoutine.php`,
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
                routinesCollection && routinesCollection.length ? routinesCollection.map(routine => {
                    return (
                        <Fade key={routine.taskId} bottom>
                            <Routine className='routine' key={routine.taskId} routine={routine} user={user} />
                        </Fade>
                    )
                }
                ) : <h1 style={{ margin: "auto", fontSize: "5rem", color: "#525252" }}> You have no routine yet add routine</h1>
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser,
    routinesCollection: selectCurrentRoutines,
})

const mapDispatchToProps = (dispatch) => ({
    setCurrentRoutines: (routines) => dispatch(setCurrentRoutines(routines)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ListRoutine);