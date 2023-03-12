import React from "react";
import $ from 'jquery';
import { ReactComponent as Done } from '../../assets/icons/done.svg';
import { ReactComponent as Remove } from '../../assets/icons/remove.svg';
import { ReactComponent as Skip } from '../../assets/icons/skip.svg';
import { ReactComponent as Undone } from '../../assets/icons/undone.svg';
import './Routine.scss';


class Routine extends React.Component {
    constructor(routine) {
        super();
        this.state = {
            ...routine
        }
    }

    handleDone = async (event) => {
        const id = event.target.closest('.routine').id;
        let combo;
        try {
            combo = await $.ajax({
                url: "http://localhost/Game%20Of%20Life/addOne.php",
                method: 'get',
                data: {
                    id: id,
                    userID: this.state.user.userId
                }
            });
        } catch (err) {
            console.error(`Error cannot checked this routine`);
            return;
        }

        this.setState({ money: +this.state.user.money + 1 });
        this.setState({ submitted: '1', combo: +this.state.combo + 1 });
    }

    handleSkip = async (event) => {
        const id = event.target.closest('.routine').id;
        let res;
        try {
            res = await $.ajax({
                url: 'http://localhost/Game%20Of%20Life/skipTaskDay.php',
                method: "get",
                data: {
                    id: id
                }
            });
        } catch (err) {
            console.log(`Error cannot send skip sign to the data base`);
            return;
        }
        res = JSON.parse(res);
        this.setState({ skip: +this.state.skip + 1 });
    }

    handleRemove = async (event) => { // under test
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

    handleUndone = async (event) => {
        this.setState({
            submitted: "0",
            combo: `${+this.state.combo - 1}`,
        });
    }
    render() {
        return (
            <div className="routine" id={this.state.taskId} style={
                this.state.submitted === "1" ? {
                    transform: "translateY(1.5rem)",
                    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.262)",
                }
                    : {}
            }>
                {
                    this.state.priority === 'important' ? <div className="important"></div> : ""
                }

                {
                    this.state.combo !== '0' ? <div className="comboed"></div> : ""
                }
                <div className="emoji">{this.state.emoji}</div>
                <div className="title">{this.state.title}</div>
                <div className="description">{this.state.description}</div>
                <div className="extra">
                    <div className="combo">{this.state.combo === '0' ? "" : `⚡${this.state.combo}`}</div>
                    <div className="skip-num">{this.state.skip === '0' ? "" : `↪️${this.state.skip}`}</div>
                    <div className="level">🎚️{this.state.level}</div>
                </div>
                <div className="buttons">
                    {
                        this.state.submitted === '0' ?
                            <button className="btn btn-success done" onClick={this.handleDone}><Done /></button>
                            :
                            <button className="btn btn-secondary done" disabled><Undone /></button>
                    }


                    <button className="btn btn-info skip" disabled={this.state.user.money < 10} onClick={this.handleSkip}><Skip /></button>
                    <button className="btn btn-danger remove  " onClick={this.handleRemove}><Remove /></button>
                </div>
            </div>
        )

    }
}

export default Routine;