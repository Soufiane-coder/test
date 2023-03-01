import React from "react";
import Routine from "../../../components/NavigationBarItern/Routine/Routine";
import './ListRoutine.scss';

class ListRoutine extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="list-routine">
                <Routine />
            </div>
        )
    }
}
export default ListRoutine;