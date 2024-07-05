export default function Fortune(props) {
    return (
        <div>
            <RadioButton 
                name="None"
                value="none"
                default={true}
            />
            <RadioButton 
                name="Roll two, take highest"
                value="advantage"
            />
            <RadioButton 
                name="Roll two, take lowest"
                value="disadvantage"
            />
            <RadioButton 
                name="Reroll"
                value="reroll"
            />
        </div>
    );		
}

function RadioButton(props) {
    function handleChange(e) {
		// put stuff here
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