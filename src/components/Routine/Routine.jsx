import React from "react";
import $ from 'jquery';
import { ReactComponent as Done } from '../../assets/icons/done.svg';
import { ReactComponent as Remove } from '../../assets/icons/remove.svg';
import { ReactComponent as Skip } from '../../assets/icons/skip.svg';
import { ReactComponent as Undone } from '../../assets/icons/undone.svg';
import './Routine.scss';
import { connect } from "react-redux";
import { selectCurrentRoutines } from "../../redux/routines/routines.selector";
import { setCurrentUser } from "../../redux/user/user.actions";
import { createStructuredSelector } from "reselect";
import { checkRoutine } from "../../redux/routines/routines.actions";

const Routine = ({ user, routine, checkRoutine }) => {

    const handleDone = async (event) => {
        const id = event.target.closest('.routine').id;
        checkRoutine(id);
        let combo;
        // try {
        //     combo = await $.ajax({
        //         url: "http://localhost/Game%20Of%20Life/addOne.php",
        //         method: 'get',
        //         data: {
        //             id: id,
        //             userID: user.userId
        //         }
        //     });
        // } catch (err) {
        //     console.error(`Error cannot checked this routine`);
        //     return;
        // }

        // this.setState({ money: +this.state.user.money + 1 });
        // this.setState({ submitted: '1', combo: +this.state.combo + 1 });
    }

    const handleSkip = async (event) => {
        // const id = event.target.closest('.routine').id;
        // let res;
        // try {
        //     res = await $.ajax({
        //         url: 'http://localhost/Game%20Of%20Life/skipTaskDay.php',
        //         method: "get",
        //         data: {
        //             id: id
        //         }
        //     });
        // } catch (err) {
        //     console.log(`Error cannot send skip sign to the data base`);
        //     return;
        // }
        // res = JSON.parse(res);
        // this.setState({ skip: +this.state.skip + 1 });
    }

    const handleRemove = async (event) => { // under test
        //     const id = e.currentTarget.closest('.item').id;
        //   // console.log(id);
        //   let combo;
        //   try {
        //     const res = await this._ajaxRequest('deleteRoutine.php', 'get', {
        //       id: id,
        //     });
        //     // console.log(res);
        //   } catch (err) {
        //     console.error(`Error cannot delet this routine`);
        //     return;
        //   }
    }

    const handleUndone = async (event) => {
        // this.setState({
        //     submitted: "0",
        //     combo: `${+this.state.combo - 1}`,
        // });
    }
    return (
        <div className="routine" id={routine.taskId} style={
            routine.submitted === "1" ? {
                transform: "translateY(1.5rem)",
                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.262)",
            }
                : {}
        }>
            {
                routine.priority === 'important' ? <div className="important"></div> : ""
            }

            {
                routine.combo !== '0' ? <div className="comboed"></div> : ""
            }
            <div className="emoji">{routine.emoji}</div>
            <div className="title">{routine.title}</div>
            <div className="description">{routine.description}</div>
            <div className="extra">
                <div className="combo">{routine.combo === '0' ? "" : `⚡${routine.combo}`}</div>
                <div className="skip-num">{routine.skip === '0' ? "" : `↪️${routine.skip}`}</div>
                <div className="level">🎚️{routine.level}</div>
            </div>
            <div className="buttons">
                {
                    routine.submitted === '0' ?
                        <button className="btn btn-success done" onClick={handleDone}><Done /></button>
                        :
                        <button className="btn btn-secondary done" disabled><Undone /></button>
                }


                <button className="btn btn-info skip" disabled={user.money < 10} onClick={handleSkip}><Skip /></button>
                <button className="btn btn-danger remove  " onClick={handleRemove}><Remove /></button>
            </div>
        </div>
    )

}
const mapStateToProps = createStructuredSelector({
    user: setCurrentUser,
    routinesCollection: selectCurrentRoutines,
})

const mapDispatchToProps = (dispatch) => ({
    checkRoutine: (taskId) => dispatch(checkRoutine(taskId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Routine);