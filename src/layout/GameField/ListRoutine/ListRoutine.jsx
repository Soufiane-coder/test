import React from "react";
import Routine from "../../../components/Routine/Routine";
import './ListRoutine.scss';

class ListRoutine extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="list-routine">
                <Routine />
                <Routine /><Routine /><Routine /><Routine /><Routine /><Routine /><Routine /><Routine /><Routine /><Routine /><Routine /><Routine /><Routine />
            </div>
        )
    }
}
export default ListRoutine;