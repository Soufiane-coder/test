import React from "react";
import Routine from "../../../components/Routine/Routine";
import { Fade } from 'react-reveal';
import './ListRoutine.scss';
import withData from "../../../components/withData/withData";


const ListRoutine = ({ routinesCollection }) => {
    return (
        <div className="list-routine">
            {
                routinesCollection.map(routine => {
                    return (
                        <Fade key={routine.taskId} bottom>
                            <Routine className='routine' key={routine.taskId} routine={routine} />
                        </Fade>
                    )
                })
            }
        </div>
    )
}


export default withData(ListRoutine);
