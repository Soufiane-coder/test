import React from "react";
import Routine from "../../../components/Routine/Routine";
import { Fade } from 'react-reveal';
import './ListRoutine.scss';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../../redux/user/user.selector";
import { setCurrentRoutines } from '../../../redux/routines/routines.actions';
import { selectCurrentRoutines } from '../../../redux/routines/routines.selector';

import withData from "../../../components/withData/withData";

const ListRoutine = ({ user, fullDate, fullDateOld, routinesCollection }) => {


    return (
        <div className="list-routine">
            {
                (routinesCollection.length === 0 ?
                    <h1 style={{ margin: "auto", fontSize: "5rem", color: "#525252" }}> You have no routine yet add routine</h1>
                    : routinesCollection.map(routine => {
                        return (
                            <Fade key={routine.taskId} bottom>
                                <Routine className='routine' key={routine.taskId} routine={routine} user={user} />
                            </Fade>
                        )
                    }))
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

export default connect(mapStateToProps, mapDispatchToProps)(withData(ListRoutine));