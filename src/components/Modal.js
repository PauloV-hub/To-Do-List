import React from "react";
import Card from "./Card";

function Modal(props) {

    return (
        <div id="modal" onClick={props.onHideModal} className={props.show ? "modal" : "hide"}>
            <Card className="cardModal">
                <h1>Adicionar Itens</h1>
                {props.children}
            </Card>

        </div>
    )
}

export default Modal;