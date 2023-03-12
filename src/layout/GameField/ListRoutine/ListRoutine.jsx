import React from "react";
import { useState, useEffect } from "react";

import Routine from "../../../components/Routine/Routine";
import $ from 'jquery';
import { Fade } from 'react-reveal';
import './ListRoutine.scss';
const ListRoutine = ({ user, fullDate, fullDateOld }) => {

    const [routines, setRoutines] = useState(null);
    useEffect(() => {
        async function getRoutines() {
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
                    setRoutines({ routines: allRoutines });
                }
            } catch (err) {
                console.error(
                    `Error cannot connect with the data base to list all routines${err}`
                );
                return;
            }
            if (fullDate !== fullDateOld) {
                allRoutines.forEach(async routine => {
                    try {
                        await $.ajax({
                            url: "http://localhost/Game%20Of%20Life/ableButtons.php",
                            method: "get",
                            data: {
                                id: routine.userId,
                            }
                        });
                        localStorage.setItem('fullDateOld', fullDate);
                    } catch (err) {
                        console.error(`Error cannot able buttons`);
                        return;
                    }
                });
                try {
                    // render the new list with abled
                    allRoutines = await $.ajax({
                        url: "http://localhost/Game%20Of%20Life/listRoutine.php",
                        method: "get"
                    });
                    allRoutines = JSON.parse(allRoutines).reverse();
                    setRoutines({ routines: allRoutines });
                } catch (err) {
                    console.log(
                        `Error cannot connect with the data base to list all routines`
                    );
                    return;
                }
            }

        }
        getRoutines();
    }, []);
    return (
        <div className="list-routine">
            {
                routines ? routines.routines.map(routine => {
                    return (
                        <Fade key={routine.taskId} bottom>
                            <Routine className='routine' key={routine.taskId} {...routine} user={user} />
                        </Fade>
                    )
                }
                ) : ""
            }
        </div>
    )
}
export default ListRoutine;