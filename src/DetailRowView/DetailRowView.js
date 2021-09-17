import React from "react";

export default ({person}) => (
    <div>
        <p>Comment: </p>
        <p>id:</p>
        <p>ProductId: <b>{person.id}</b> </p>
        <p>Description: <br></br>
            <textarea defaultValue={person.comments} />
         </p>
        <p>date: <b>{Date()}</b> </p>
    </div>
)