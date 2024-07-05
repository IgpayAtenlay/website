import camelCase from "../../util/camelCase";

export default function SaveOrStrike(props) {
    return (
        <div>
            <RadioButton 
                name="Custom Damage"
                setSaveOrStrike={props.setSaveOrStrike}
                default={true}
            />
            <RadioButton 
                name="Strike"
                setSaveOrStrike={props.setSaveOrStrike}
            />
            <RadioButton 
                name="Basic Save"
                setSaveOrStrike={props.setSaveOrStrike}
            />
        </div>
    );		
}

function RadioButton(props) {
    function handleChange(e) {
		props.setSaveOrStrike(e.target.value);
	}

    return(
        <div>
            <input 
                type="radio"
                name="saveOrStrike"
                id={camelCase(props.name)}
                value={camelCase(props.name)}
                onChange={handleChange}
                defaultChecked={props.default}
            />
            <label for={camelCase(props.name)}>{props.name}</label>
        </div>
    );
}