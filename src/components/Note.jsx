import React from "react";


function Note(props)
{
    return <div className="note">
           <h2 >{props.heading}</h2>
           <p> {props.data}</p>
           </div>
}
export default Note