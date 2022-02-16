import { useContext } from "react";
import { TestContext } from "./TestContext";

const Item = (props) => {
    const context = useContext(TestContext)

    const handelDeleteItem = (e) => {
            context.setTimeArr(context.timeArr.filter(t => t != e.target.innerHTML))
        
    }
    return (
        <div onClick={handelDeleteItem} >{props.children}</div>
    )
}
export default Item;