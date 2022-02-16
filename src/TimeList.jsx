import React, { useContext } from "react";
import ReactDOM from "react-dom";
import Item from "./Item";
import { TestContext } from "./TestContext";

const TimeList = (props) => {
const context = useContext (TestContext)
    return (
        <div className="main_time_list">
            {context.timeArr.map((c) => (
                <Item key={Math.random()} >{c}</Item>
            ))}


        </div>
    )
}
export default TimeList;