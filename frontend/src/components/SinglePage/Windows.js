import React from "react";

export default function Window(props){

    return (
        <iframe className="Window_" src={props.site} title="Spectator_Window" scrolling="yes"></iframe>
    )

}