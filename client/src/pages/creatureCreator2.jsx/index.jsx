import { useState } from "react";
import Form, { parseData } from "./form";
import inputToCreature from "./inputToCreature";

export default function CreatureCreator2() {
    var [creatureInput, setCreatureInput] = useState({});
    
    function handleSubmit(e) {
		e.preventDefault();
        var rawData = new FormData(e.target);
        setCreatureInput(parseData(rawData));
	}

    return (
        <div>
            <Form handleSubmit={handleSubmit} />
            <hr />
            {JSON.stringify(creatureInput)}
            <hr />
            {JSON.stringify(inputToCreature(creatureInput))}
        </div>
    );
}