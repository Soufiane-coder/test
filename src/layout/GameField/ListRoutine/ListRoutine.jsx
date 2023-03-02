import React from "react";
import { useState, useEffect } from "react";

import Routine from "../../../components/Routine/Routine";
import $ from 'jquery';
import './ListRoutine.scss';
const ListRoutine = ({ user }) => {

    const [routines, setRoutines] = useState(null);
    useEffect(() => {
        async function getRoutines() {
            try {
                const res = await $.ajax({
                    url: "http://localhost/Game%20Of%20Life/listRoutine.php",
                    method: "get",
                    data: {
                        Id_user: user.Id_user
                    }
                });
                setRoutines({ routines: JSON.parse(res).reverse() });
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
                routines ? routines.routines.map(routine => {
                    return (
                        <Routine className='routine' key={routine.Id_task} {...routine} user={user} />
                    )
                }
                ) : ""
            }
        </div>
    )
}
export default ListRoutine;