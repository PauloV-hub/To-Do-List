import React from "react";
import Card from "./Card";

function ListItem(props) {
    return (
        <li key= { props.item.id } >

        <Card className={ props.item.done ? "done item" : "item" }>
            { props.item.text }
            < div >
            <button onClick={ () => props.onItemDeleted(props.item) }> Delete </button>
                < input type = "checkbox"checked = { props.item.done }onChange = {() => props.onDone(props.item)
}/>
    </div>
    </Card>

    </li>
        
        );
}

export default ListItem;
