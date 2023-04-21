import React from 'react';
import $ from 'jquery';
import myServer from "../server/server";
import LoadingRoutine from '../LoadingRoutine/LoadingRoutine';
import { useEffect } from 'react';
const withData = WrappedComponent => {
    const ComponentData = (props) => {
        const {fullDate, fullDateOld, user, routinesCollection, setCurrentRoutines} = props;
        useEffect (() => {
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
            getRoutines.call(this);
        }, []);
        return routinesCollection ? <WrappedComponent  {...props} />
        : <div className='list-routine'>
            <LoadingRoutine/>
            <LoadingRoutine/>
            <LoadingRoutine/>
            <LoadingRoutine/>
            <LoadingRoutine/>
            <LoadingRoutine/>
            <LoadingRoutine/>
            </div>
    }
  return ComponentData;
};

export default withData;