import React from "react";
import { useState } from "react";
import { ReactComponent as Close } from '../../assets/icons/close.svg';
import $ from 'jquery';
import { addRoutine } from "../../redux/routines/routines.actions";
import { selectCurrentUser } from '../../redux/user/user.selector';
import './PopupWindowRoutine.scss';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const PopupWindowRoutine = ({ user, addRoutine, setPopup }) => {
    const [addRoutineForm, setAddRoutineForm] = useState({ title: "", description: "", important: false, level: 1 });
    const handleChange = (event) => {
        const { name, value } = event.target;
        if (event.target.type === "checkbox") {
            setAddRoutineForm({ ...addRoutineForm, important: event.target.checked });
            return;
        }
        setAddRoutineForm({ ...addRoutineForm, [name]: value })
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!addRoutineForm.title && !addRoutineForm.description) {
            alert("insert all fields");
            return;
        }
        try {
            let res = await $.ajax({
                url: "http://localhost/Game%20Of%20Life/addRoutine.php",
                method: 'get',
                data: {
                    userId: user.userId,
                    title: addRoutineForm.title,
                    description: addRoutineForm.description,
                    level: addRoutineForm.level,
                    priority: addRoutineForm.important ? "important" : "low",
                    notification: "00:00"
                }
            });
            res = JSON.parse(res);
            addRoutine(res);
        } catch (err) {
            console.error(`Error detected login : ${err}`);
        }
        setPopup(false)
    }
    return (
        <div className="popup">
            < div className="popup__window" >
                <Close className="popup__window--close" onClick={() => setPopup(false)} />

                <div style={{ height: "80%" }}>
                    <div className="popup__window--title">
                        <input placeholder="Title" type="text" onChange={handleChange} name="title" id="title" required />
                    </div>
                    <div className="popup__window--description">
                        <textarea name="description" onChange={handleChange} placeholder="Description" id="description"></textarea>
                    </div>
                </div>
                <div style={{ height: "20%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div className="popup__window--level">
                        <input type="number" onChange={handleChange} placeholder="level" name="level" id="level" min="1" max="5" value={addRoutineForm.level} />
                    </div>
                    <div className="popup__window--important">
                        <label className="container">
                            <input type="checkbox" onChange={handleChange} id="important" />
                            <div className="checkmark"></div>
                            <label htmlFor="important">Important</label>
                        </label>
                    </div>
                    <div className="popup__window--add-button">
                        <input type="submit" onClick={handleSubmit} value="Add routine" />
                    </div>
                </div>
            </div >
        </div >
    )
}
const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser
})

const mapDispatchToProps = (dispatch) => ({
    addRoutine: (routine) => dispatch(addRoutine(routine)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PopupWindowRoutine);