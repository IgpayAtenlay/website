import { useState } from 'react';
import Reroll from './reroll';

export default function Fortune(props) {
    var[reroll, setReroll] = useState(false);
    return (
        <div>
            <h2>Fortune Effects</h2>
            <RadioButton 
                name="None"
                value="none"
                default={true}
                setReroll={setReroll}
            />
            <RadioButton 
                name="Roll two, take highest"
                value="advantage"
                setReroll={setReroll}
            />
            <RadioButton 
                name="Roll two, take lowest"
                value="disadvantage"
                setReroll={setReroll}
            />
            <RadioButton 
                name="Reroll"
                value="reroll"
                setReroll={setReroll}
            />
            {reroll && 
                <Reroll />
            }
        </div>
    );		
}

function RadioButton(props) {
    function handleChange(e) {
		props.setReroll(e.target.value === "reroll");
	}

    return(
        <div>
            <input 
                type="radio"
                name="fortune"
                id={props.value}
                value={props.value}
                onChange={handleChange}
                defaultChecked={props.default}
            />
            <label htmlFor={props.value}>{props.name}</label>
        </div>
    );
}